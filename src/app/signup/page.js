'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import bcrypt from 'bcryptjs'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSignup = async () => {
    setError('')
    setMessage('')

    // 1. パスワードをハッシュ化
    let hashedPassword
    try {
      hashedPassword = await bcrypt.hash(password, 10)
    } catch (e) {
      setError('パスワードの暗号化に失敗しました')
      return
    }

    // 2. Supabase Authでサインアップ（メール認証はスキップ）
    const { data: signupData, error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: undefined, // メール認証無効
      }
    })

    if (signupError) {
      if (signupError.message.includes('User already registered')) {
        setError('このメールアドレスはすでに使われています')
      } else {
        setError(signupError.message)
      }
      return
    }

    const user = signupData?.user
    // uuidが取得できる場合だけusersテーブルにも同期
    if (user && user.id) {
      // すでに登録済みならスキップ
      const { data: exists } = await supabase
        .from('users')
        .select('uuid')
        .eq('uuid', user.id)
        .single()

      if (!exists) {
        const { error: insertError } = await supabase.from('users').insert([
          {
            id: user.id,
            username,
            email: user.email,
            password: hashedPassword,
            
            usage_count: 0,
            is_active: true
          }
        ])
        if (insertError) {
          setError('ユーザーデータの登録に失敗しました')
          return
        }
      }
    }

    // 3. 登録成功したらすぐマイページへ遷移（認証演出なし！）
    router.push('/mypage')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow border">
      <h2 className="text-2xl font-bold mb-6 text-center">新規登録</h2>

      <input
        type="text"
        placeholder="ユーザー名（ニックネーム）"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
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
        onClick={handleSignup}
        className="w-full p-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded"
      >
        登録する
      </button>

      {error && <p className="mt-4 text-red-600">{error}</p>}
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  )
}
