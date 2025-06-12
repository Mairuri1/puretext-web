'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function DownloadPage() {
  const router = useRouter()
  const [allowed, setAllowed] = useState(null) // ← 型なしに修正

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      const { data, error } = await supabase
        .from('users')
        .select('plan')
        .eq('id', user.id)
        .single()

      if (error || !data) {
        router.push('/mypage')
        return
      }

      const validPlans = ['basic', 'pro', 'admin']
      if (!validPlans.includes(data.plan)) {
        router.push('/mypage')
        return
      }

      setAllowed(true)
    }

    checkAuth()
  }, [router])

  if (allowed === null) {
    return <p className="text-center mt-10">認証中...</p>
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-700 mb-4">ダウンロードページ</h1>
        <p className="text-gray-600 mb-6">
          最新のアプリを以下のボタンからダウンロードできます。
        </p>

        <a
          href="/downloads/user.exe" // ← public/downloads/user.exe に置いてね
          download
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition inline-block"
        >
          ⬇️ ダウンロード（user.exe）
        </a>
      </div>
    </div>
  )
}
