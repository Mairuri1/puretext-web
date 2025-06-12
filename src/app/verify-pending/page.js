'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function VerifyPendingPage() {
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(async () => {
      // サインインしてるユーザーを取得
      const { data: { user } } = await supabase.auth.getUser()
      // 認証されていれば /verified へリダイレクト
      if (user && user.email_confirmed_at) {
        router.push('/verified')
      }
    }, 3000) // 3秒ごとにチェック

    return () => clearInterval(interval)
  }, [router])

  return (
    <div className="max-w-lg mx-auto mt-20 text-center">
      <h1 className="text-2xl font-bold text-yellow-600">⏳ メール認証待ち</h1>
      <p className="mt-4">
        登録したメールに届いたリンクをクリックして認証を完了してください。
        <br />
        （認証後、自動でページが切り替わります）
      </p>
    </div>
  )
}
