import Head from 'next/head'

import Title from '../components/primary/title'
import style from '../styles/page.module.scss'
import FaqContent from '../components/cards/faq_content'
import FaqNavigation from '../components/cards/faq_navigation'

export default () => (
  <>
    <Head>
      <title>よくある質問 | アイカサ</title>
      <meta property="og:title" content="よくある質問" />
      <meta property="og:image" content="https://www.i-kasa.com/ogp.jpg" />
      <meta property="description" content="" />
      <meta property="og:description" content="" />
      <meta property="og:url" content="https://www.i-kasa.com" />
      <meta property="og:type" content="website" />
      <meta
        data-hid="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta data-hid="twitter:site" name="twitter:site" content="@ikasa1111" />
      <meta
        data-hid="og:site_name"
        property="og:site_name"
        content="アイカサ | 傘のシェアリングサービス"
      />
      <meta data-hid="og:locale" property="og:locale" content="ja_JP" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <Title
      title="よくある質問"
      description=""
      imgSrc="/assets/ikasa_background.png"
      category
      grey={false}
    />
    <div className={style.page}>
      <FaqNavigation />

      <div id="start" style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>はじめに</h2>

        <FaqContent title="アイカサってどんなサービス？">
          アイカサは、日本一の傘シェアリングサービスです。
          <br />
          駅や店頭にアイカサスポット（傘立て）があるので、そこから傘をレンタルして、使わなくなったら返却することができます。
        </FaqContent>

        <FaqContent title="どこに設置してありますか？">
          駅、商業施設、コンビニ、飲食店などに設置されています。
          <br />
          詳しい設置場所は<a href="/#map">こちら</a>
          から確認できます。（アプリでも確認できます）
        </FaqContent>

        <FaqContent title="利用料金は？">
          基本プランは、24時間で70円です。24時間を超えた場合は、24時間ごとに70円がかかります。ずっと借りっぱなしになっても420円
          <br />
          使い放題プランは、1ヶ月つかっても使わなくても280円かかるプランです。
          <br />
          <span style={{ fontSize: '13px' }}>
            ※傘を紛失してしまった場合は、合計864円の支払い義務が発生します。
          </span>
        </FaqContent>
      </div>

      <div id="howtouse" style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>使い方</h2>

        <FaqContent title="どうやって借りますか？">
          ご利用エリア　関東と関東以外で利用方法が異なります。
          <br />
          <br />
          【関東/中部/関西エリア】
          <br />
          ①アプリをダウンロードする（アプリストアで「アイカサ」を検索）
          <br />
          ②アプリにログイン
          <br />
          ③『アイカサを借りる』を選択
          <br />
          ④アイカサスポットに表示されているQRをスキャン
          <br />
          ⑤傘をロックの手前まで持ってくる
          <br />
          ⑥鍵が開くので、傘を受け取ってご利用ください
          <br />
          アプリ版レンタル方法は<a href="/#howtouse">こちら</a>
          から詳しく確認できます。
          <br />
          <br />
          【関東/中部/関西以外のエリア】
          <br />
          ①アプリをダウンロードする（アプリストアで「アイカサ」を検索）
          <br />
          ②アプリにログイン
          <br />
          ③『アイカサを借りる』を選択
          <br />
          ④借りたい傘の持ち手部分に表示されているQRをスキャン
          <br />
          ⑤傘の暗証番号3桁が届くので、そちらを合わせていただくと鍵が開くので、
          <br />
          そのままご利用ください
          <br />
          <br />
          ※もし暗証番号に合わせても開かない傘の場合、一旦その傘を返却いただき、スポットにある別の傘をご利用いただき、アイカサお問い合わせ窓口まで開かなかった傘のQRコード部分の写真と共にご連絡いただけますと幸いです。
        </FaqContent>

        <FaqContent title="どうやって返却しますか？">
          ご利用エリア　関東と関東以外で利用方法が異なります。
          <br />
          <br />
          【関東/中部/関西エリア】
          <br />
          ①アプリにログイン
          <br />
          ②『アイカサを返す』を選択
          <br />
          ③アイカサスポットに表示されているQRをスキャン
          <br />
          ④傘をロックの手前まで持ってくる
          <br />
          ⑤鍵が開くので、傘を奥まで戻してください
          <br />
          アプリ版返却方法は<a href="/#howtouse">こちら</a>
          から詳しく確認できます。
          <br />
          <br />
          【関東/中部/関西以外のエリア】
          <br />
          ①アプリにログイン
          <br />
          ②『アイカサを返す』を選択
          <br />
          ③アイカサスポットに表示されているQRをスキャン
          <br />
          ④傘を傘立てにかけて返却
          <br />
          <br />
          ※もし返却できているか不安な場合、アイカサユーザーIDと共にアイカサお問い合わせ窓口までご連絡いただけますと幸いです。
        </FaqContent>

        <FaqContent title="どこで返却できますか？">
          借りた場所と別の場所でも返却が可能です。返却可能な場所はアプリからご確認いただけます。
        </FaqContent>
      </div>

      <div id="place" style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>設置場所について</h2>

        <FaqContent title="現在の設置エリアを教えて欲しい">
          現在アイカサのサービスは東京、神奈川、愛知、大阪、兵庫、岡山、福岡にてサービスを導入しております。
        </FaqContent>

        <FaqContent title="アイカサスポットがない場合">
          スポット拡大に尽力致しておりますので、そちらのスポットにも導入できるよう頑張ります！お客様の方でもアイカサをオススメして頂けると導入がスムーズになりやすいので、よろしければぜひオススメして頂けると嬉しいです。
        </FaqContent>

        <FaqContent title="近くのスポットはどこにありますか？">
          アイカサ公式アプリのマップからお近くのスポットが検索できますのでそちらをご覧ください。
        </FaqContent>
      </div>

      <div id="payment" style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>支払い方法について</h2>

        <FaqContent title="支払い方法は？">
          現在、クレジットカード（Visa / MasterCard / JCB / Diners Club Card /
          American Express）、 LINE Payに対応しています。
          <br />
          その他の決済方法については、順次対応中です。
        </FaqContent>

        <FaqContent title="支払いに問題が発生したらどうすればいい？">
          アプリより、アイカサお問い合わせ窓口にご連絡ください。
        </FaqContent>

        <FaqContent title="支払いをLINE Payからクレカに変更したい。">
          アイカサ公式アプリのマイページより決済情報の登録の変更をお願いいたします。今月末までにクレジットカードの登録をお済ませいただけましたら、今月のご請求を来月のクレジットカードにご請求させていただきます。
        </FaqContent>
      </div>

      <div id="others" style={{ marginBottom: '' }}>
        <h2 style={{ marginBottom: '20px' }}>その他</h2>

        <FaqContent title="傘が壊れていました。">
          別の傘をレンタルしていただき、レンタル後にアイカサお問い合わせ窓口までご連絡ください。ご利用の傘のレンタル履歴を修正させていただきます。
          <br />
          <br />
          新たに傘のレンタルが難しい場合、傘の根元にあるID番号と、ご利用いただいたスポットの名前をお問い合わせ窓口へご連絡ください。
        </FaqContent>

        <FaqContent title="傘を（エリア外に）持って帰ってしまったため、しばらく返却できません。">
          返却できるタイミングで返却スポットにご返却をお願いいたします。
          <br />
          ご返却が難しい場合864円で買取りとなりますので、買取申請をお願いいたします。
          <br />
          また、ご料金は返却いただいた際にご連絡いただきました本日付けで処理させてただきますので、返却いたしましたらご一報ください。
        </FaqContent>

        <FaqContent title="正常に返却できているかわかりません。">
          アイカサ公式アプリのマイページを確認ください。
          <br />
          そちらにレンタル中の傘が表示されていなければ、正常に返却できております。
        </FaqContent>

        <FaqContent title="返却の際に傘がスロットを通りませんでした。">
          傘の番号と置いていただいた傘立ての場所をアイカサお問い合わせ窓口にご連絡いただき、傘はそのまま傘立てに傘をかけて帰っていただくことは可能でしょうか？
        </FaqContent>

        <FaqContent title="退会したい、利用停止したい。">
          退会につきまして、お問い合わせ窓口に『退会したい』とご連絡ください。
        </FaqContent>

        <FaqContent title="公式アプリが開けません。マップが正常に表示されません等">
          一度アプリを落としていただき、再度お試しください。
        </FaqContent>

        <FaqContent title="使い放題プランと420円プランはどう違いますか？">
          使い放題プランは利用するしないに関わらず毎月280円(税込)がかかりますが、返却を気にせず使い放題ができる格安プランになります。
          <br />
          420円は、同月内の課金上限になりまして、翌月まで傘を借りっぱなしですとまた翌月1日から日額70円のご料金が加算されますが、返却されましたら課金はストップいたします。ご利用スタイルに合わせてお選びください。
        </FaqContent>

        <FaqContent title="紛失してしましました。">
          大変お手数ですが、紛失の際は買取りとなりますので、アイカサ公式アプリのマイページより買取り手続きをお願いいたします。
        </FaqContent>

        <FaqContent title="領収書作成できますか？">
          可能です。月末に作成いたしますので、お問い合わせ窓口まで、領収証作成希望とメッセージの上、宛名をご連絡ください。
        </FaqContent>

        <FaqContent title="傘が盗まれた・盗難された">
          こちらの方で警察と連携をとらせていただきますので、
          <br />
          ・場所（例：ローソン池袋一丁目店）
          <br />
          ・日時（例：1/17,17:00頃）
          <br />
          ・状況（例：傘立てに入れてたら無くなってた）
          <br />
          などの状況をアイカサお問い合わせ窓口までご連絡ください。
        </FaqContent>
      </div>
    </div>
  </>
)
