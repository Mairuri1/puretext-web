"use client";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { StarIcon } from "lucide-react"; 
import { ArrowRightIcon } from "lucide-react";

const reviews = [
  {
    icon: "/images/icon1.png",
    name: "立命館大学 2年",
    title: "もっと早く使えばよかった",
    content: "最初は有料ってだけで悩みました。でも課題がコピペだけで完結するようになり、時間もストレスも大幅カット。友達に勧められて使いましたが、本当に“知らない方が損”でした！",
    stars: 5
  },
  {
    icon: "/images/icon2.png",
    name: "同志社大学 1年",
    title: "課金する価値があるサービス",
    content: "使う前は正直迷いました。でも一度使ったら『この値段でこの快適さ？』ってなって、今では友達にも勧めてます。みんなで課題終わらせて遊びに行けるようになった！",
    stars: 4.5
  },
  {
    icon: "/images/icon3.png",
    name: "京都産業大学 3年",
    title: "手作業に戻れなくなった",
    content: "画像認識もレポート生成も自然すぎて感動。教授にバレる心配ゼロ。クオリティも最高で、処理も速い。最初に「課金は損かな？」と感じていた自分が逆に損してました。",
    stars: 4.8
  },
  {
    icon: "/images/icon4.png",
    name: "龍谷大学 1年",
    title: "みんな使ってて焦った",
    content: "サークルの先輩に『使わないと課題で損するよ』と言われて始めました。提出前に余裕ができて、正直もっと早く使えばよかったです。課題で困ってる後輩にも勧めてます！",
    stars: 5
  }
];





export default function Home() {

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="scroll-smooth bg-white text-gray-800">
      {/* Heroセクション（目を引く導入） */}
<section className="text-center py-12 md:py-20 px-4 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">

  <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight md:leading-tight">
    ChatGPTは<br className="block md:hidden" />
    もう見抜かれる時代。
  </h1>
  <p className="text-base md:text-xl mb-1 leading-snug">でも、手直しって正直めんどくさい。</p>
  <p className="text-base md:text-xl mb-4">
    <span className="text-yellow-300 font-extrabold text-2xl md:text-4xl mr-2">
      PureText
    </span>
    は、そんなあなたのためのAIです。
  </p>
  <a
    href="#"
    className="inline-block bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition hover:scale-105 shadow-lg text-base md:text-lg"
    onClick={(e) => {
      e.preventDefault();
      const el = document.getElementById("features");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    今すぐはじめる
  </a>
</section>




<section className="bg-yellow-50 border-l-4 border-yellow-400 py-10 px-6 md:px-16 text-left">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
    AI検出されない文章へ。
  </h2>
  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
    ChatGPTなど生成AIは日々進化していますが、それに伴いAI検出ツールも日々進化しています。<br />
    多少自然に書くように指示したところで、AI特有の「癖」は全然消えていないんです。<br />
    <span className="block mt-2 text-lg md:text-xl">
      <span className="font-semibold text-purple-600">
        PureTextでは、そんなAIの「癖」を徹底研究。
      </span>
      <span className="text-black font-semibold"> 平均AI検出率5%以下</span>を実現しました。
    </span>
  </p>
</section>

<span id="features" className="block h-0 scroll-mt-28"></span>

<section className="w-full flex flex-col md:flex-row items-center bg-white py-14 px-2 md:px-0 relative">
  {/* 左：テキスト */}
  <div className="w-full md:w-[55%] max-w-xl md:ml-[12%] md:mr-0">
    {/* 2行タイトル */}
    <h2 className="
      text-2xl md:text-3xl font-extrabold text-gray-900 mb-7 tracking-wide text-left leading-snug
      max-[600px]:text-center
    ">
      AIを使ったレポート作成などで
      <br />
      こんなお悩みありませんか？
    </h2>
    <div className="space-y-5 text-base md:text-lg">
      {/* 1 */}
      <div className="flex items-start gap-2">
        <span className="inline-block mt-1 w-6 h-6 text-purple-600 shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#A78BFA"/>
            <path d="M17 8.5L10.5 15L7 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span>
          毎回「自然に書いて」と頼んだのに
          <span className="text-red-600 font-bold">不自然すぎて直す</span>
          羽目に
        </span>
      </div>
      {/* 2 */}
      <div className="flex items-start gap-2">
        <span className="inline-block mt-1 w-6 h-6 text-purple-600 shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#A78BFA"/>
            <path d="M17 8.5L10.5 15L7 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
<span>結局自分で手直ししてて<span className="text-red-600 font-bold">時間を無駄に</span>している</span>




      </div>
      {/* 3 */}
      <div className="flex items-start gap-2">
        <span className="inline-block mt-1 w-6 h-6 text-purple-600 shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#A78BFA"/>
            <path d="M17 8.5L10.5 15L7 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span>
          提出は間に合ったけど
          <span className="text-red-600 font-bold">バレてないか心配</span>
          になる
        </span>
      </div>
    </div>
    {/* 解決カギカッコ */}
    <div className="mt-10 flex items-center">
      {/* 左カギカッコ */}
      <span className="inline-block mr-2">
        <svg width="30" height="34" viewBox="0 0 30 34" fill="none">
          <path d="M26 32C12 32 6 22.5 6 12M6 12C6 8.02944 9.02944 5 13 5H27M6 12L16 12" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
      <span className="bg-purple-50 text-purple-700 font-bold text-lg md:text-xl rounded-xl px-5 py-3 shadow-sm tracking-wide">
        そんな悩み、<span className="text-purple-700 font-extrabold">PureText</span>なら<br className="block md:hidden" />
        <span className="underline decoration-purple-300 decoration-2">すべて解決できます！</span>
      </span>
      {/* 右カギカッコ */}
      <span className="inline-block ml-2">
        <svg width="30" height="34" viewBox="0 0 30 34" fill="none" style={{ transform: "scaleX(-1)" }}>
          <path d="M26 32C12 32 6 22.5 6 12M6 12C6 8.02944 9.02944 5 13 5H27M6 12L16 12" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
    </div>
  </div>

</section>



{/* 上の紫波 */}
<div className="w-full overflow-hidden leading-[0] -mb-1">
  <svg viewBox="0 0 1440 150" className="w-full h-24 md:h-32" preserveAspectRatio="none">
    <path fill="#F4F3FF" d="M0,0 Q360,80 720,40 T1440,80 V150 H0 Z"/>
  </svg>
</div>


<section className="bg-[#F4F3FF] py-16 px-6  text-center">
<h2 className="text-xl md:text-3xl font-bold mb-2 text-gray-800 leading-tight">
  超自然な文章が書けるAIツール<br />
  <span className="text-purple-700 font-extrabold text-2xl md:text-4xl">
    「PureText」
  </span> はこんな人におすすめ
</h2>


  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-10">
    {/* カード 1 */}
    <div className="flex flex-col items-center text-gray-800">
      <img
        src="/images/target1.png"
        alt="AIレポート手直し"
        className="w-24 h-24 md:w-32 md:h-32 mb-4 mx-auto"
      />
      <p className="text-base md:text-xl font-semibold text-center leading-relaxed">
        AIで書いたレポートを<br />毎回手直ししてる人
      </p>
    </div>
    {/* カード 2 */}
    <div className="flex flex-col items-center text-gray-800">
      <img
        src="/images/target2.png"
        alt="教授にバレないか不安"
        className="w-24 h-24 md:w-32 md:h-32 mb-4 mx-auto"
      />
      <p className="text-base md:text-xl font-semibold text-center leading-relaxed">
        教授にバレないか<br />ヒヤヒヤしてる人
      </p>
    </div>
    {/* カード 3 */}
    <div className="flex flex-col items-center text-gray-800">
      <img
        src="/images/target3.png"
        alt="画像課題をまとめて処理"
        className="w-24 h-24 md:w-32 md:h-32 mb-4 mx-auto"
      />
      <p className="text-base md:text-xl font-semibold text-center leading-relaxed">
        画像の課題を<br />何枚も一気に処理したい人
      </p>
    </div>
    {/* カード 4 */}
    <div className="flex flex-col items-center text-gray-800">
      <img
        src="/images/target4.png"
        alt="無料ツール制限にイライラ"
        className="w-24 h-24 md:w-32 md:h-32 mb-4 mx-auto"
      />
      <p className="text-base md:text-xl font-semibold text-center leading-relaxed">
        無料AIの回数制限に<br />イライラしたことがある人
      </p>
    </div>
  </div>
</section>


{/* 下の紫波（逆さま） */}
<div className="w-full overflow-hidden leading-[0] -mb-1 rotate-180">
  <svg viewBox="0 0 1440 150" className="w-full h-24 md:h-32" preserveAspectRatio="none">
    <path fill="#F4F3FF" d="M0,0 Q360,80 720,40 T1440,80 V150 H0 Z"/>
  </svg>
</div>



<section className="py-20 px-6 bg-white max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">
    なぜ<span className="text-purple-600 font-extrabold">PureText</span>が選ばれているのか？
  </h2>

  <div className="space-y-16">

    {/* 理由① */}
    <div className="bg-purple-50 border border-purple-200 ring-1 ring-purple-100 rounded-2xl p-8 shadow-xl transition hover:scale-[1.01] max-w-2xl mx-auto">
      <div className="inline-block bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 shadow">
        理由①
      </div>
      <h3 className="text-2xl font-bold text-purple-800 mb-4">AI検出回避に特化した文章生成</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><span className="font-semibold text-purple-700">AIが作った文章の癖を徹底排除</span>し、文章からAIっぽさを除去</li>
        <li>外部ツールでのチェックでも<span className="font-semibold text-purple-700">平均AI検出率5%以下</span>を実現</li>
        <li>英検やTOEICでも使える、<span className="font-semibold text-purple-700">日本人が書くような英文</span>にも対応</li>
      </ul>
      <p className="mt-4 text-purple-900">
        ChatGPTだけでは教授にバレる時代。<br />
        だからこそ <span className="font-semibold underline decoration-purple-500">“検出されない精度”</span> が求められています。
      </p>
    </div>

    {/* 理由② */}
    <div className="bg-green-50 border border-green-200 ring-1 ring-green-100 rounded-2xl p-8 shadow-xl transition hover:scale-[1.01] max-w-2xl mx-auto">
      <div className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 shadow">
        理由②
      </div>
      <h3 className="text-2xl font-bold text-green-800 mb-4">画像課題もまとめて解決</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>グラフ・図・手書きメモなども<span className="font-semibold text-green-700">そのまま理解＆処理</span></li>
        <li>他サービスでは枚数制限が厳しいが、<span className="font-semibold text-green-700">PureTextは基本無制限</span>で画像を送信可能</li>
        <li><span className="font-semibold text-green-700">アップするだけ</span>で要約や解説も自動で生成</li>
      </ul>
      <p className="mt-4 text-green-900">
        <span className="underline decoration-green-500 font-bold">画像枚数にも実質制限なし。</span><br />
        <span className="text-green-800 font-bold">大量の課題も一気に処理できます。</span>
      </p>
    </div>

    {/* 理由③ */}
    <div className="bg-pink-50 border border-pink-200 ring-1 ring-pink-100 rounded-2xl p-8 shadow-xl transition hover:scale-[1.01] max-w-2xl mx-auto">
      <div className="inline-block bg-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 shadow">
        理由③
      </div>
      <h3 className="text-2xl font-bold text-pink-800 mb-4">日本人が開発・運営</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><span className="font-semibold text-pink-700">日本語に完全対応</span>しているから精度も安心</li>
        <li>サーバー管理・問い合わせはすべて<span className="font-semibold text-pink-700">国内運営</span></li>
        <li>LINEでのサポートも可能、<span className="font-semibold text-pink-700">リアルタイムで質問できる</span></li>
      </ul>
      <p className="mt-4 text-pink-900">
        英語UIや海外製AIに不安がある人でも安心。<br />
        <span className="font-semibold underline decoration-pink-500">「困ったらすぐ聞ける」環境</span>を整えています。
      </p>
    </div>

  </div>
</section>




<span id="how-to" className="block h-0 scroll-mt-28"></span>

<section className="bg-gray-50 py-20 px-6 w-full text-center">
  <h2
    className="text-[1.7rem] xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 md:mb-5 leading-tight tracking-tight"
    style={{ maxWidth: '95vw', margin: '0 auto' }}
  >
    使い方はたったの4ステップ
  </h2>
  {/* ここがポイント！mt-10 でタイトル下に大きめ余白 */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-10 md:mt-14">

    {/* STEP 1 */}
    <div className="relative bg-yellow-50 border border-yellow-200 rounded-2xl py-6 md:py-8 px-4 md:px-6 w-64 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src="/images/step1.png"
        alt="Step 1 Illustration"
        className="absolute top-2 right-3 w-12 md:w-14 h-auto"
      />
      <div className="text-sm text-yellow-700 font-bold mb-1 tracking-wider">STEP 1</div>
      <p className="font-semibold text-lg">テーマを入力</p>
      <p className="text-xs text-gray-600 mt-1">授業のお題をそのまま</p>
    </div>

    {/* 矢印 */}
    <div className="text-3xl md:text-5xl text-yellow-300 drop-shadow-xl font-extrabold my-4 md:my-0 hidden md:block select-none">→</div>
    <div className="text-3xl text-yellow-300 drop-shadow-xl font-extrabold my-4 md:my-0 block md:hidden select-none">↓</div>

    {/* STEP 2 */}
    <div className="relative bg-yellow-50 border border-yellow-200 rounded-2xl py-6 md:py-8 px-4 md:px-6 w-64 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src="/images/step2.png"
        alt="Step 2 Illustration"
        className="absolute top-2 right-3 w-10 md:w-12 h-auto"
      />
      <div className="text-sm text-yellow-700 font-bold mb-1 tracking-wider">STEP 2</div>
      <p className="font-semibold text-lg">文体を選ぶ</p>
      <p className="text-xs text-gray-600 mt-1">崩し度や雰囲気も調整OK</p>
    </div>

    {/* 矢印 */}
    <div className="text-3xl md:text-5xl text-yellow-300 drop-shadow-xl font-extrabold my-4 md:my-0 hidden md:block select-none">→</div>
    <div className="text-3xl text-yellow-300 drop-shadow-xl font-extrabold my-4 md:my-0 block md:hidden select-none">↓</div>

    {/* STEP 3 */}
    <div className="relative bg-yellow-50 border border-yellow-200 rounded-2xl py-6 md:py-8 px-4 md:px-6 w-64 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src="/images/step3.png"
        alt="Step 3 Illustration"
        className="absolute top-2 right-3 w-14 md:w-16 h-auto"
      />
      <div className="text-sm text-yellow-700 font-bold mb-1 tracking-wider">STEP 3</div>
      <p className="font-semibold text-lg">ボタンを押す</p>
      <p className="text-xs text-gray-600 mt-1">10秒ほどで自動生成</p>
    </div>

    {/* 矢印 */}
    <div className="text-3xl md:text-5xl text-yellow-300 drop-shadow-xl font-extrabold my-4 md:my-0 hidden md:block select-none">→</div>
    <div className="text-3xl text-yellow-300 drop-shadow-xl font-extrabold my-4 md:my-0 block md:hidden select-none">↓</div>

    {/* STEP 4（強調） */}
    <div className="relative bg-yellow-100 border-2 border-yellow-400 ring-4 ring-yellow-200 rounded-2xl p-6 md:p-8 w-72 shadow-2xl scale-110 z-10 transition-transform duration-300 hover:scale-115 hover:shadow-[0_8px_32px_#facc15]">
      <img
        src="/images/step4.png"
        alt="Step 4 Illustration"
        className="absolute top-2 right-3 w-14 md:w-16 h-auto"
      />
      <div className="text-sm text-yellow-800 font-bold mb-1 tracking-wider">STEP 4</div>
      <p className="text-xl font-bold text-yellow-800">コピペして提出！</p>
      <p className="text-sm text-gray-700 mt-1">そのまま使える自然な文章</p>
    </div>
  </div>
</section>

{/* --- 比較表タイトル --- */}
<div className="w-full bg-white pt-12 pb-4 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-tight">
    他サービスとの比較
  </h2>
  <p className="text-base md:text-lg text-gray-600">
    PureTextは<span className="font-bold text-purple-600">自然さ・速さ・使いやすさ</span>で圧倒的コスパ！
  </p>
</div>



<div className="overflow-x-auto max-w-5xl mx-auto mt-4 md:mt-8 px-1 md:px-0">
  <table className="table-auto w-full min-w-[410px] sm:min-w-[510px] border border-gray-300 text-xs md:text-[16px] bg-white">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-1 py-2 text-left min-w-[55px] sm:min-w-[70px]"></th>
        <th className="border border-gray-300 px-1 py-2 text-center text-gray-500 font-bold min-w-[85px] sm:min-w-[95px]">無料AI</th>
        <th className="border border-gray-300 px-1 py-2 text-center text-gray-500 font-bold min-w-[85px] sm:min-w-[95px]">他社有料</th>
<th className="border border-gray-300 px-2 md:px-4 py-2 bg-green-50 font-bold text-green-800">
  <div className="flex items-center justify-center gap-2">
    <span>PureText</span>
    <span className="text-[11px] bg-purple-600 text-white rounded-full px-2 py-0.5 shadow-sm hidden md:inline-block">
      人気 No.1
    </span>
  </div>
  {/* スマホは今まで通り下に表示 */}
  <span className="block md:hidden mt-1 text-[10px] bg-purple-600 text-white rounded-full px-2 py-0.5 shadow-sm mx-auto w-fit">
    人気 No.1
  </span>
</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-1 py-2 font-medium text-gray-700 text-xs md:text-sm whitespace-nowrap min-w-[55px] sm:min-w-[70px]">
          <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded-md">自然さ</span>
        </td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">不自然で堅い／バレやすい</td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">やや自然だが少し堅い</td>
        <td className="border border-gray-300 px-1 py-2 text-green-900 font-medium min-w-[105px] sm:min-w-[115px]">そのまま使えるレベルで自然</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-1 py-2 font-medium text-gray-700 text-xs md:text-sm whitespace-nowrap min-w-[55px] sm:min-w-[70px]">
          <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded-md">処理時間</span>
        </td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">遅め／広告あり</td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">早いが混雑時は不安定</td>
        <td className="border border-gray-300 px-1 py-2 text-green-900 font-medium min-w-[105px] sm:min-w-[115px]">平均10秒で即出力</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-1 py-2 font-medium text-gray-700 text-xs md:text-sm whitespace-nowrap min-w-[55px] sm:min-w-[70px]">
          <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded-md">使い勝手</span>
        </td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">指示を毎回入力する必要あり</td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">同様に自力で指示が必要</td>
        <td className="border border-gray-300 px-1 py-2 text-green-900 font-medium min-w-[105px] sm:min-w-[115px]">テーマを入れてボタンを押すだけ</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-1 py-2 font-medium text-gray-700 text-xs md:text-sm whitespace-nowrap min-w-[55px] sm:min-w-[70px]">
          <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded-md">調整時間</span>
        </td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">10分以上の手直しが必要</td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">2分程度の微調整が必要</td>
        <td className="border border-gray-300 px-1 py-2 text-green-900 font-medium min-w-[105px] sm:min-w-[115px]">基本不要／10秒で使える</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-1 py-2 font-medium text-gray-700 text-xs md:text-sm whitespace-nowrap min-w-[55px] sm:min-w-[70px]">
          <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded-md">画像処理</span>
        </td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">5枚程度</td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">30枚程度</td>
        <td className="border border-gray-300 px-1 py-2 text-green-900 font-medium min-w-[105px] sm:min-w-[115px]">基本無制限</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-1 py-2 font-medium text-gray-700 text-xs md:text-sm whitespace-nowrap min-w-[55px] sm:min-w-[70px]">
          <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded-md">金額</span>
        </td>
        <td className="border border-gray-300 px-1 py-2 text-gray-400 min-w-[85px] sm:min-w-[95px]">ー</td>
        <td className="border border-gray-300 px-1 py-2 text-gray-500 min-w-[85px] sm:min-w-[95px]">3,000円／月〜</td>
        <td className="border border-gray-300 px-1 py-2 text-green-900 font-medium min-w-[105px] sm:min-w-[115px]">980円／月</td>
      </tr>
    </tbody>
  </table>
</div>




<div className="mt-16"></div>

<span id="pricing" className="block h-0 scroll-mt-28"></span>

{/* 料金プランセクション */}
<section className="bg-gray-50 py-16 px-6 text-center">
  <h2 className="text-3xl font-bold mb-10">料金プラン</h2>
  <div className="max-w-md mx-auto">
    <div className="bg-white shadow-lg rounded-xl p-6 border border-purple-300">
      <h3 className="text-xl font-semibold mb-2 text-purple-700">ベーシックプラン</h3>
      <p className="text-3xl font-bold mb-4 text-purple-700">¥980<span className="text-sm text-gray-500"> /月</span></p>
      <ul className="text-left mb-6 space-y-1 text-sm text-gray-700">
        <li>✅ 基本無制限に使用可能</li>
        <li>✅ レポート生成 & 要約</li>
        <li>✅ 日本語/英語ともに自然な文章生成</li>
        <li>✅ 画像から解答 & 要約が可能</li>
        <li>✅ ラーメン一杯分で、面倒な課題から解放</li>
      </ul>
      <Link
        href="/purchase"
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition font-medium"
      >
        今すぐ申し込む
      </Link>
    </div>
  </div>
</section>


<section className="py-14 px-2 bg-white max-w-4xl mx-auto">
  <h3 className="text-2xl font-bold mb-7 text-center">
    <StarIcon className="w-8 h-8 text-yellow-400 mr-2 inline-block" />
    利用者レビュー
  </h3>

  {/* ----- スマホ only ----- */}
  <div className="block md:hidden">
    <Swiper
      spaceBetween={16}
      slidesPerView={1.15}
      breakpoints={{
        640: { slidesPerView: 1.5, spaceBetween: 28 },
        768: { slidesPerView: 2.3, spaceBetween: 36 },
        1024: { slidesPerView: 2.6, spaceBetween: 36 },
        1280: { slidesPerView: 3.1, spaceBetween: 40 },
      }}
      centeredSlides
      loop
      className="w-full review-swiper"
    >
      {reviews.map((r, i) => (
        <SwiperSlide key={i}>
          <div className="review-card bg-white rounded-2xl shadow-2xl p-7 sm:p-8 md:p-10 flex flex-col items-center gap-4 transition-all duration-300 min-h-[280px] max-w-[330px] mx-auto">
            <img src={r.icon} alt="" className="w-16 h-16 rounded-full mb-2 border-2 border-yellow-400" />
            <div className="font-semibold text-gray-700">{r.name}</div>
            <div className="text-lg md:text-xl font-bold text-yellow-600 text-center">{r.title}</div>
            <div className="text-sm md:text-base text-gray-700 text-center">{r.content}</div>
            <div className="flex items-center gap-1 mt-2">
              <StarIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-sm text-gray-400">{r.stars} / 5</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <style jsx global>{`
      .review-swiper .swiper-slide {
        transition: transform 0.35s cubic-bezier(.42,.6,.4,1);
        opacity: 0.7;
        filter: blur(0.3px) grayscale(10%);
        height: auto !important;
        display: flex;
        align-items: stretch;
        justify-content: center;
      }
      .review-swiper .swiper-slide-active {
        transform: scale(1.08) !important;
        opacity: 1 !important;
        z-index: 2;
        filter: none;
      }
      .review-card {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    `}</style>
  </div>

  {/* ----- PC only ----- */}
  <div className="hidden md:block">
    <Swiper
      spaceBetween={36}
      slidesPerView={2.4}
      centeredSlides
      loop
      className="w-full review-swiper"
    >
      {reviews.map((r, i) => (
        <SwiperSlide key={i}>
          <div className="review-card bg-white rounded-2xl shadow-2xl p-12 flex flex-col items-center gap-4 transition-all duration-300 min-h-[280px]">
            <img src={r.icon} alt="" className="w-16 h-16 rounded-full mb-2 border-2 border-yellow-400" />
            <div className="font-semibold text-gray-700">{r.name}</div>
            <div className="text-xl font-bold text-yellow-600 text-center">{r.title}</div>
            <div className="text-base text-gray-700 text-center">{r.content}</div>
            <div className="flex items-center gap-1 mt-2">
              <StarIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-sm text-gray-400">{r.stars} / 5</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <style jsx global>{`
      .review-swiper .swiper-slide {
        transition: transform 0.35s cubic-bezier(.42,.6,.4,1);
        opacity: 0.7;
        filter: blur(0.3px) grayscale(10%);
      }
      .review-swiper .swiper-slide-active {
        transform: scale(1.08) !important;
        opacity: 1 !important;
        z-index: 2;
        filter: none;
      }
    `}</style>
  </div>
</section>




<span id="faq" className="block h-0 scroll-mt-28"></span>

<section className="py-16 px-4 max-w-3xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-10">よくある質問</h2>
  <div className="space-y-4">
    {[
      {
        q: "教授にバレる心配はありませんか？",
        a: "PureTextはAI特有の語彙や言い回しの「癖」を徹底的に研究し、自然な文章に自動変換します。AI検出ツールでも平均検出率5%以下を実現しており、教授にバレるリスクを限りなく抑えています。",
      },
      {
        q: "対応機種は何ですか？",
        a: "現在はWindowsのみの対応となっておりますが、今後Web上でスマホで動くようにする予定です。",
      },
      {
        q: "手書きの課題や写真にも対応していますか？",
        a: "はい。画像アップロード機能を使えば、手書きの課題や教材写真などから自動で内容を読み取り、解説や回答を行います。",
      },
      {
        q: "セキュリティやプライバシーは安全ですか？",
        a: "PureTextは日本人が開発・運営しており、データの取り扱いも国内基準で管理。個人情報の取扱いや送信内容はすべて暗号化され、安全に利用いただけます。",
      },
      {
        q: "無料のAIツールと何が違うんですか？",
        a: "無料ツールは精度が不安定だったり、画像非対応・処理が遅いなどの制限があります。PureTextはそれらの弱点を補い、自然さ・速さ・使いやすさをすべて高水準で実現しています。",
      },
      {
        q: "解約や返金はできますか？",
        a: "解約はいつでも可能です。返金に関しては原則行っておりませんが、万が一のトラブル時はLINEまたはお問い合わせフォームよりご相談いただけます。",
      },
      {
        q: "英語の課題にも使えますか？",
        a: "はい、日本語・英語のどちらにも対応しています。特に英検形式やフォーマルなレポート構成も選択できるので、英語課題でも自然な文章を生成できます。",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-lg shadow-sm"
      >
        <button
          className="w-full px-5 py-4 flex justify-between items-center text-left group"
          onClick={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        >
          <span className="flex items-center gap-2 text-base md:text-lg font-semibold text-gray-800">
            <span className="text-purple-600 font-bold text-lg">Q</span>
            {item.q}
          </span>
          <span className="text-purple-600 text-base group-hover:opacity-80 transition-all duration-200">
            {openIndex === index ? "▲" : "▼"}
          </span>
        </button>
        {openIndex === index && (
          <div className="px-5 pb-4 text-purple-800 text-sm md:text-base leading-relaxed">
            🟣 {item.a}
          </div>
        )}
      </div>
    ))}
  </div>
</section>



      {/* フッター */}
      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; 2025 puretext.jp - All rights reserved.
      </footer>
    </main>
  );
}
