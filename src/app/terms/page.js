export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg font-sans text-gray-900 leading-relaxed">
      <h1 className="text-4xl font-extrabold mb-12 text-center">利用規約</h1>

      {/* 第1章 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-300 pb-2">第1章　総則</h2>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第1条（目的）</h3>
          <p>
            本規約は、ユーザーが本サービス「PureText」（以下「本サービス」といいます）を利用するにあたり、ユーザーと本サービス運営者（以下「運営者」といいます）との間の権利義務関係を定めることを目的とします。
          </p>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第2条（定義）</h3>
          <p>本規約において使用する用語の定義は、次の各号に定めるとおりとします。</p>
          <ol className="list-decimal pl-8 space-y-2 mt-3">
            <li>「ユーザー」とは、本規約に同意のうえ、本サービスを利用するすべての個人または法人をいいます。</li>
            <li>「アカウント」とは、ユーザーが本サービスを利用するために運営者が発行する識別情報をいいます。</li>
            <li>「コンテンツ」とは、本サービスを通じて提供される文章生成機能および画像認識機能などの一切のサービス内容を指します。</li>
            <li>「本規約」とは、本利用規約の全文をいいます。</li>
          </ol>
        </article>
      </section>

      {/* 第2章 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-300 pb-2">第2章　利用登録・アカウント管理</h2>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第3条（利用登録）</h3>
          <p>
            1. 本サービスの利用を希望する者は、本規約に同意のうえ、運営者所定の方法により利用登録を申請し、運営者がこれを承認した場合にユーザーとなります。
          </p>
          <p>
            2. 運営者は、利用登録の申請者が以下のいずれかに該当すると判断した場合、利用登録を拒否することがあります。
          </p>
          <ol className="list-decimal pl-8 space-y-2 mt-3">
            <li>登録申請に虚偽の事項が含まれている場合</li>
            <li>過去に本規約違反などにより利用停止処分を受けた者である場合</li>
            <li>その他運営者が利用登録を適当でないと判断した場合</li>
          </ol>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第4条（アカウント管理）</h3>
          <p>1. ユーザーは、自己の責任においてアカウントの管理を行うものとし、アカウント情報を第三者に利用させてはなりません。</p>
          <p>2. ユーザーは、アカウントの不正使用が判明した場合、速やかに運営者に通知するものとします。</p>
          <p>3. 運営者は、ユーザーの責に帰すべき事由によりアカウントが不正使用された場合、一切の責任を負いません。</p>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第5条（登録情報の変更）</h3>
          <p>ユーザーは、登録情報に変更があった場合、速やかに運営者所定の方法により変更手続きを行うものとします。</p>
        </article>
      </section>

      {/* 第3章 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-300 pb-2">第3章　サービスの提供と変更</h2>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第6条（サービス内容）</h3>
          <p>運営者は、本サービスにおいて以下のサービスを提供します。</p>
          <ol className="list-decimal pl-8 space-y-2 mt-3">
            <li>AIを用いた文章生成機能</li>
            <li>画像認識機能</li>
            <li>その他運営者が随時提供する関連サービス</li>
          </ol>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第7条（サービスの変更・停止）</h3>
          <p>1. 運営者は、システムの保守・点検、障害対応、法令遵守のため、必要に応じて本サービスの全部または一部を変更、停止または中断することがあります。</p>
          <p>2. 運営者は、サービスの変更・停止によってユーザーまたは第三者が被った損害について、一切責任を負わないものとします。</p>
        </article>
      </section>

      {/* 第4章 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-300 pb-2">第4章　料金および支払い</h2>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第8条（料金体系）</h3>
          <p>1. 本サービスの利用料金は、プランごとに当サイトに表示された金額とします。</p>
          <p>2. 運営者は、料金体系の変更を事前に告知した上で変更することができます。</p>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第9条（支払い方法）</h3>
          <p>1. ユーザーは、運営者が指定する支払い方法（PayPay送金など）によって利用料金を支払うものとします。</p>
          <p>2. 支払いは、当該支払い方法のルールに従って行うものとし、支払い遅延や不履行についてはユーザーの責任とします。</p>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第10条（支払い遅延等の措置）</h3>
          <p>1. 支払いの遅延または不履行があった場合、運営者はサービスの提供を一時停止または解除することができます。</p>
          <p>2. 運営者は、支払い遅延等による損害について、一切の責任を負いません。</p>
        </article>
      </section>

      {/* 第5章 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-300 pb-2">第5章　禁止事項</h2>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第11条（禁止行為）</h3>
          <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
          <ol className="list-decimal pl-8 space-y-2 mt-3">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>他のユーザー、第三者または運営者の権利や利益を侵害する行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>不正アクセスや不正プログラムの使用、配布等の行為</li>
            <li>虚偽の情報を提供する行為</li>
            <li>本サービスを利用した商業目的の不正な宣伝・勧誘行為</li>
            <li>その他、運営者が不適切と判断する行為</li>
          </ol>
        </article>
      </section>

      {/* 第6章 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-300 pb-2">第6章　免責事項</h2>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第12条（サービス利用のリスク）</h3>
          <p>1. ユーザーは自己の責任において本サービスを利用するものとし、運営者はサービスの利用によって生じるいかなる損害についても一切の責任を負いません。</p>
          <p>2. 本サービスの内容および品質について、運営者は保証を行いません。</p>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第13条（サービスの停止・中断・終了）</h3>
          <p>1. 運営者は、事前通知の有無にかかわらず、システムの保守、障害、天災その他不可抗力によりサービスを停止、中断または終了することがあります。</p>
          <p>2. 運営者は、サービスの停止等によってユーザーまたは第三者が被った損害について、一切責任を負いません。</p>
        </article>
      </section>

      {/* 第7章 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-300 pb-2">第7章　著作権・知的財産権</h2>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第14条（権利帰属）</h3>
          <p>1. 本サービスに関する著作権、商標権、特許権その他の知的財産権はすべて運営者または正当な権利者に帰属します。</p>
          <p>2. ユーザーは、運営者の許可なく、本サービスのコンテンツを複製、改変、配布、販売、出版、翻訳、公衆送信等してはなりません。</p>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第15条（ユーザーの投稿・生成物）</h3>
          <p>1. ユーザーが本サービスを通じて生成した文章やコンテンツの権利は原則としてユーザーに帰属します。</p>
          <p>2. 運営者は、サービス向上のために必要な範囲で当該生成物を利用する権利を有します。</p>
        </article>
      </section>

      {/* 第8章 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-300 pb-2">第8章　個人情報の取り扱い</h2>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第16条（個人情報の収集・利用）</h3>
          <p>
            運営者は、本サービスの提供にあたり、ユーザーの個人情報を適切に収集・管理し、以下の目的のために利用します。
          </p>
          <ol className="list-decimal pl-8 space-y-2 mt-3">
            <li>本サービスの提供・運営</li>
            <li>ユーザーサポートの実施</li>
            <li>不正利用防止およびサービス改善</li>
            <li>法令に基づく対応</li>
          </ol>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第17条（個人情報の第三者提供）</h3>
          <p>運営者は、法令に定める場合を除き、ユーザーの個人情報を第三者に提供しません。</p>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第18条（プライバシーポリシー）</h3>
          <p>個人情報の詳細な取り扱いについては、別途当運営者のプライバシーポリシーに定めます。ユーザーは本規約と併せてプライバシーポリシーを確認し、同意したものとみなされます。</p>
        </article>
      </section>

      {/* 第9章 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-300 pb-2">第9章　契約解除・利用停止</h2>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第19条（利用停止等）</h3>
          <p>
            運営者は、ユーザーが本規約に違反した場合や以下の事由があると判断した場合、事前の通知なくサービスの利用停止や契約解除を行うことができます。
          </p>
          <ol className="list-decimal pl-8 space-y-2 mt-3">
            <li>虚偽の登録情報の提供</li>
            <li>不正行為や迷惑行為の実施</li>
            <li>支払い遅延がある場合</li>
            <li>その他、運営者がサービス提供上不適切と判断した場合</li>
          </ol>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第20条（解除の効果）</h3>
          <p>利用停止または契約解除によりユーザーが被った損害について、運営者は一切責任を負いません。</p>
        </article>
      </section>

      {/* 第10章 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-300 pb-2">第10章　準拠法・管轄</h2>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第21条（準拠法）</h3>
          <p>本規約の解釈および適用は日本法を準拠法とします。</p>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-semibold mb-3">第22条（管轄裁判所）</h3>
          <p>本サービスに関して生じる紛争については、運営者の所在地を管轄する日本の裁判所を専属的合意管轄裁判所とします。</p>
        </article>
      </section>
    </main>
  )
}
