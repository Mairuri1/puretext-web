'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function MyPage() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }

      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single()

      if (!data || error) {
        router.push('/signup')
        return
      }

      setUserData(data)
      setLoading(false)
    }

    fetchUserData()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const handleCancel = () => {
    router.push('/cancel')
  }

  const handleDownload = () => {
    router.push('/download')
  }

  const hasValidPlan =
  userData?.plan === 'basic' ||
  userData?.plan === 'pro' ||
  userData?.plan === 'admin'

  if (loading || !userData) return <p className="text-center mt-10">読み込み中...</p>

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-10 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">マイページ</h1>
        <div className="mb-4 flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-gray-500">ニックネーム</span>
            <span className="font-medium">{userData.username}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">メール</span>
            <span>{userData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">プラン</span>
            <span>{userData.plan}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">使用回数</span>
            <span>{userData.usage_count}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">状態</span>
            <span className={userData.is_active ? "text-green-600" : "text-red-500"}>
              {userData.is_active ? "有効" : "停止中"}
            </span>
          </div>
        </div>

        {/* ✅ ダウンロードボタン（条件付き表示） */}
        {hasValidPlan && (
          <button
            onClick={handleDownload}
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            ⬇️ ダウンロードページへ
          </button>
        )}

        <div className="flex gap-3 mt-8">
          <button
            className="w-1/2 bg-gray-200 hover:bg-gray-300 py-2 px-3 rounded-xl text-gray-700 transition"
            onClick={handleLogout}
          >
            ログアウト
          </button>
          <button
            className="w-1/2 bg-red-100 hover:bg-red-400 hover:text-white py-2 px-3 rounded-xl text-red-600 border border-red-300 transition"
            onClick={handleCancel}
          >
            解約
          </button>
        </div>
      </div>
    </div>
  )
}
