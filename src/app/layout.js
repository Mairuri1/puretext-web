import "./globals.css"
import Header from "../components/Header"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "PureText - 超自然なAI文章ツール",
  description: "AI検出されにくい自然な文章を自動生成するツール PureText（ピュアテキスト）",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-800">
        <Header />
        <main>{children}</main>

        {/* ✅ フッター */}
        <footer className="bg-gray-900 text-gray-300 text-sm mt-16">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
              <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="PureText ロゴ" width={24} height={24} />
                <span className="font-semibold text-white text-lg">PureText</span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#features" className="hover:underline">特徴</a>
                <a href="#howto" className="hover:underline">使い方</a>
                <a href="#plans" className="hover:underline">料金プラン</a>
                <a href="#faq" className="hover:underline">よくある質問</a>
                <a href="/terms" className="hover:underline">利用規約</a>
                <a href="/privacy" className="hover:underline">プライバシーポリシー</a>
                <a href="/contact" className="hover:underline">お問い合わせ</a>
              </div>

              <div>
                <Link href="/purchase" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition">
                  申し込む ▶
                </Link>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              &copy; 2025 puretext.jp - All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
