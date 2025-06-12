'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setLoggedIn(!!data.session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  // ページ内スムーズスクロール用関数（型注釈なし）
  const handleScrollTo = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <Image src="/images/logo.png" alt="PureText ロゴ" width={28} height={28} />
          <span>
            PureText
            <span className="text-purple-600">.jp</span>
          </span>
        </Link>

        <nav className="flex space-x-6 items-center text-sm font-medium text-gray-700">
          <a
            href="#features"
            onClick={handleScrollTo('features')}
            className="hover:text-purple-600 cursor-pointer"
          >
            特徴
          </a>
          <a
            href="#how-to"
            onClick={handleScrollTo('how-to')}
            className="hover:text-purple-600 cursor-pointer"
          >
            使い方
          </a>
          <a
            href="#pricing"
            onClick={handleScrollTo('pricing')}
            className="hover:text-purple-600 cursor-pointer"
          >
            料金プラン
          </a>
          <a
            href="#faq"
            onClick={handleScrollTo('faq')}
            className="hover:text-purple-600 cursor-pointer"
          >
            よくある質問
          </a>
          <Link href="/terms" className="hover:text-purple-600 transition">
            利用規約
          </Link>

          {loggedIn ? (
            <Link
              href="/mypage"
              className="bg-purple-600 text-white px-4 py-1.5 rounded-full hover:bg-purple-700 transition"
            >
              マイページ
            </Link>
          ) : (
            <Link
              href="/login"
              className="bg-purple-600 text-white px-4 py-1.5 rounded-full hover:bg-purple-700 transition"
            >
              ログイン
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
