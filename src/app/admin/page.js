'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import dayjs from 'dayjs'

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  // 管理者判定（plan: "admin"のみアクセス可）
  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      const { data: userData } = await supabase
        .from('users')
        .select('plan')
        .eq('id', user.id)
        .single()
      if (!userData || userData.plan !== 'admin') {
        router.push('/unauthorized')
        return
      }
      setIsAdmin(true)
    }
    checkAdmin()
  }, [router])

  // ユーザーデータ取得
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from('users')
        .select('id, username, email, password, plan, usage_count, is_active, last_login, created_at, sub_expire_date')
        .order('created_at', { ascending: false })
      if (error) setError('ユーザー取得エラー')
      setUsers(data || [])
      setLoading(false)
    }
    if (isAdmin) fetchUsers()
  }, [isAdmin])

  if (!isAdmin) return null
  if (loading) return <div className="text-center pt-40 text-gray-400">Loading...</div>
  if (error) return <div className="text-red-500">{error}</div>

  // サブスク延長処理
  const handleExtendSub = async (userId, oldExpireDate, days) => {
    const base = oldExpireDate && dayjs(oldExpireDate).isAfter(dayjs())
      ? dayjs(oldExpireDate)
      : dayjs()
    const newExpire = base.add(days, 'day').format('YYYY-MM-DD')
    await supabase.from("users").update({ sub_expire_date: newExpire }).eq("id", userId)
    setUsers(users =>
      users.map(u => u.id === userId ? { ...u, sub_expire_date: newExpire } : u)
    )
  }

  // BAN・解除
  const handleToggleActive = async (id, nowActive) => {
    await supabase.from('users').update({ is_active: !nowActive }).eq('id', id)
    setUsers(users => users.map(u => u.id === id ? { ...u, is_active: !nowActive } : u))
  }

  // プラン変更
  const handleChangePlan = async (userId, newPlan) => {
    await supabase.from('users').update({ plan: newPlan }).eq('id', userId)
    setUsers(users =>
      users.map(u => u.id === userId ? { ...u, plan: newPlan } : u)
    )
  }

  // プラン選択肢
  const PLAN_LIST = [
    { value: '', label: '（未設定）' },
    { value: 'free', label: 'free' },
    { value: 'basic', label: 'basic' },
    { value: 'pro', label: 'pro' },
    { value: 'admin', label: 'admin' }
  ]

  // 売上・人数
  const basicCount = users.filter(u => u.plan === "basic").length
  const totalRevenue = basicCount * 980
  const activeCount = users.filter(u => u.is_active).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-purple-800 tracking-tight">管理ダッシュボード</h1>
            <p className="text-gray-500 mt-2">サブスク有効期限・ユーザー管理を一括で</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <StatsCard label="総ユーザー数" value={users.length} color="blue" />
            <StatsCard label="アクティブ" value={activeCount} color="green" />
            <StatsCard label="BASIC" value={basicCount} color="purple" />
            <StatsCard label="累計売上(円)" value={totalRevenue.toLocaleString()} color="pink" />
          </div>
        </header>

        {/* ユーザー一覧 */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-purple-700">ユーザー一覧</h2>
          </div>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-3 font-semibold">ID</th>
                  <th className="py-2 px-3 font-semibold">ニックネーム</th>
                  <th className="py-2 px-3 font-semibold">メール</th>
                  <th className="py-2 px-3 font-semibold">パスワード</th>
                  <th className="py-2 px-3 font-semibold">プラン</th>
                  <th className="py-2 px-3 font-semibold">有効期限</th>
                  <th className="py-2 px-3 font-semibold">使用数</th>
                  <th className="py-2 px-3 font-semibold">状態</th>
                  <th className="py-2 px-3 font-semibold">最終ログイン</th>
                  <th className="py-2 px-3 font-semibold">登録日</th>
                  <th className="py-2 px-3 font-semibold">操作</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                    <td className="py-1 px-3 text-xs text-gray-500">{user.id.slice(0, 8)}…</td>
                    <td className="py-1 px-3">{user.username}</td>
                    <td className="py-1 px-3 text-xs">{user.email}</td>
                    <td className="py-1 px-3 text-xs">{user.password ? "●●●●●" : ""}</td>
                    <td className="py-1 px-3">
                      <select
                        className="px-2 py-1 rounded text-xs bg-gray-50 border"
                        value={user.plan || ""}
                        onChange={e => handleChangePlan(user.id, e.target.value)}
                        style={{ minWidth: 60 }}
                      >
                        {PLAN_LIST.map(opt =>
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        )}
                      </select>
                    </td>
                    <td className="py-1 px-3 text-xs">
                      {user.sub_expire_date ? dayjs(user.sub_expire_date).format("YYYY-MM-DD") : "未設定"}
                    </td>
                    <td className="py-1 px-3 text-right">{user.usage_count}</td>
                    <td className="py-1 px-3">
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                        user.is_active ? 'bg-green-500' : 'bg-red-400'
                      }`} />
                      {user.is_active ? '有効' : '停止'}
                    </td>
                    <td className="py-1 px-3 text-xs">{user.last_login ? dayjs(user.last_login).format("MM/DD HH:mm") : "-"}</td>
                    <td className="py-1 px-3 text-xs">{user.created_at?.slice(0, 10)}</td>
                    <td className="py-1 px-3 flex flex-col gap-1">
                      <div className="flex gap-2 mb-1">
                        <button
                          className="px-2 py-1 bg-blue-100 hover:bg-blue-200 rounded text-xs"
                          onClick={() => handleExtendSub(user.id, user.sub_expire_date, 7)}
                        >
                          7日延長
                        </button>
                        <button
                          className="px-2 py-1 bg-purple-100 hover:bg-purple-200 rounded text-xs"
                          onClick={() => handleExtendSub(user.id, user.sub_expire_date, 30)}
                        >
                          30日延長
                        </button>
                      </div>
                      <button
                        className={`px-2 py-1 rounded text-xs ${user.is_active ? 'bg-red-200 hover:bg-red-300' : 'bg-green-200 hover:bg-green-300'}`}
                        onClick={() => handleToggleActive(user.id, user.is_active)}
                      >
                        {user.is_active ? 'BAN' : '解除'}
                      </button>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={11} className="text-center py-6 text-gray-400">ユーザーがいません</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

function StatsCard({ label, value, color = "purple" }) {
  const colorMap = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-700",
    pink: "bg-pink-50 text-pink-700"
  }
  return (
    <div className={`flex flex-col px-5 py-2 rounded-xl shadow ${colorMap[color] || colorMap.purple}`}>
      <span className="text-xs font-medium">{label}</span>
      <span className="text-lg font-bold tracking-tight">{value}</span>
    </div>
  )
}
