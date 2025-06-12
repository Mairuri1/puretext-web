'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function PurchasePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (!data.session) {
        router.push('/login')
      } else {
        setLoading(false)
      }
    }
    checkSession()
  }, [])

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">読み込み中...</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 space-y-10">
      <h1 className="text-3xl font-extrabold text-center mb-4">ご利用のお申し込み</h1>

      {/* プラン概要 */}
      <section className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-500">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">📦</span> プラン概要
        </h2>
        <p className="text-lg font-semibold text-gray-800 mb-2">ベーシックプラン：月額 980円</p>
        <ul className="list-disc pl-5 text-gray-700 text-base space-y-1">
          <li>作文生成・画像認識・Wordレポート出力に <span className="font-bold">基本無制限アクセス</span></li>
          <li>日本人向けに最適化された自然でバレにくい文章</li>
          <li>AI検出率を抑えた高精度出力形式に対応</li>
        </ul>
        <p className="text-sm text-gray-500 mt-3">
          ※安定性のため、<span className="font-semibold">過剰なリクエスト</span>には一時的な制限がかかる場合があります。
        </p>
      </section>

      {/* 利用規約 */}
      <section className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">📄</span> 利用規約
        </h2>
        <p className="text-gray-700 text-base">
          ご利用前に
          <span
            onClick={() => router.push('/terms')}
            className="text-blue-600 underline cursor-pointer ml-1"
          >
            利用規約
          </span>
          を必ずご確認ください。
        </p>
      </section>

      {/* PayPay手順 */}
      <section className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-yellow-500">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">💴</span> PayPayでのお支払い方法
        </h2>
        <ol className="list-decimal pl-5 text-gray-800 space-y-2 text-base">
          <li>ホームタブ、下部の <span className="text-red-500 font-semibold">赤い「送る」</span> ボタンをタップ</li>
          <li>画面上部の検索バーに <code className="font-mono font-bold">quartz_2525</code> と入力し、表示されたユーザーを開く</li>
          <li>左下の <span className="text-red-500 font-semibold">「送る」</span> ボタンをもう一度タップ</li>
          <li>金額を <strong>980円</strong> に設定し、「次へ」をタップ</li>
          <li>「メッセージを書く」を押して、<strong>PureTextのアカウントユーザー名</strong> を入力</li>
          <li>内容を確認して送信！これで完了です 🎉</li>
        </ol>
        <p className="text-sm text-gray-600 mt-4">
          ※送金後、<strong>24時間以内にアカウントが有効化</strong>されます。
        </p>
      </section>

      {/* LINE問い合わせ */}
      <section className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-500 text-center">
        <h2 className="text-xl font-bold mb-4 flex justify-center items-center">
          <span className="mr-2">🙋‍♀️</span> 不明点がある場合
        </h2>
        <p className="text-base text-gray-700 mb-4">
          操作に迷ったら、LINE公式アカウントまでお気軽にお問い合わせください。
        </p>
        <a
          href="https://lin.ee/xxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
        >
          LINEで問い合わせる
        </a>
      </section>
    </div>
  )
}
