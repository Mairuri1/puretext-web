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

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* ロゴ（全デバイス共通） */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <Image src="/images/logo.png" alt="PureText ロゴ" width={28} height={28} />
          <span>
            PureText
            <span className="text-purple-600">.jp</span>
          </span>
        </Link>

        {/* ===== PC用ナビ（768px以上）===== */}
        <nav className="hidden md:flex space-x-6 items-center text-sm font-medium text-gray-700">
          <a
            href="#features"
            onClick={e => { e.preventDefault(); document.getElementById("features")?.scrollIntoView({ behavior: 'smooth' }) }}
            className="hover:text-purple-600 cursor-pointer"
          >
            特徴
          </a>
          <a
            href="#how-to"
            onClick={e => { e.preventDefault(); document.getElementById("how-to")?.scrollIntoView({ behavior: 'smooth' }) }}
            className="hover:text-purple-600 cursor-pointer"
          >
            使い方
          </a>
          <a
            href="#pricing"
            onClick={e => { e.preventDefault(); document.getElementById("pricing")?.scrollIntoView({ behavior: 'smooth' }) }}
            className="hover:text-purple-600 cursor-pointer"
          >
            料金プラン
          </a>
          <a
            href="#faq"
            onClick={e => { e.preventDefault(); document.getElementById("faq")?.scrollIntoView({ behavior: 'smooth' }) }}
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

        {/* ===== スマホ用（〜767px）：右端にボタンだけ ===== */}
        <div className="flex md:hidden">
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
        </div>
      </div>
    </header>
  )
}
