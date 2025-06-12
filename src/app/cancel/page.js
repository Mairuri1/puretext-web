export default function CancelPage() {
  return (
    <div className="max-w-xl mx-auto mt-16 px-6 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">解約手続きについて</h1>
      <p className="text-gray-700 mb-6">
        解約をご希望の場合は、現在の契約内容に応じた手続きが必要となります。<br />
        以下のいずれかの方法でご対応をお願いいたします。
      </p>

      <div className="bg-gray-100 p-4 rounded text-left text-sm text-gray-800">
        <p className="mb-2 font-semibold">【PayPay決済をご利用の方】</p>
        <ul className="list-disc pl-6 mb-4">
          <li>公式LINEから「解約希望」とメッセージをお送りください。</li>
          <li>24時間以内に運営より手続きをご案内いたします。</li>
        </ul>

        <p className="mb-2 font-semibold">【その他の決済方法】</p>
        <ul className="list-disc pl-6">
          <li>現在ご利用の決済方法を確認の上、個別に対応いたします。</li>
        </ul>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        ご不明な点がある場合は <a href="/contact" className="underline">お問い合わせページ</a> よりご連絡ください。
      </p>
    </div>
  )
}
