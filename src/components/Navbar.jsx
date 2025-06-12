// src/components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-gray-800">
        puretext<span className="text-purple-600">.jp</span>
      </Link>
      <div className="space-x-4">
        <Link href="/purchase" className="text-gray-700 hover:underline">お申し込み</Link>
        <Link href="/login" className="text-blue-600 font-medium hover:underline">ログイン</Link>
      </div>
    </nav>
  );
}