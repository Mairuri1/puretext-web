'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  // ログイン済みならusersテーブルに自動登録（なければ）
  useEffect(() => {
    const syncUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data: exists } = await supabase
        .from("users")
        .select("uuid")
        .eq("uuid", user.id)
        .single()

      if (!exists) {
        await supabase.from("users").insert([{
          id: user.id,
          username: user.user_metadata?.username ?? "名無し",
          email: user.email,
          plan: "basic",
          usage_count: 0,
          is_active: true
        }])
      }
    }
    syncUser()
  }, [])

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      setError('ログインに失敗しました：' + error.message)
    } else {
      router.push('/mypage')
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* コンテンツ中央 */}
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-xl shadow border">
          <h2 className="text-2xl font-bold text-center mb-1">ログイン</h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            アカウント情報を入力してください
          </p>

          <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full p-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded"
          >
            ログイン
          </button>

          {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}

          {/* 新規登録誘導 */}
          <div className="mt-6 text-center">
            <p className="text-sm mb-2">アカウントをお持ちでない方はこちら</p>
            <button
              onClick={() => router.push('/signup')}
              className="text-purple-600 hover:underline font-medium"
            >
              新規登録ページへ
            </button>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="text-center text-sm text-gray-400 py-4">
        © {new Date().getFullYear()} PureText. All rights reserved.
      </footer>
    </div>
  )
}
