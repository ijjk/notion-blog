import Head from 'next/head'
import Title from '../../components/primary/title'
import style from '../../styles/page.module.scss'

export default () => (
  <>
    <Head>
      <title>特定商取引法に基づく記載 | アイカサ</title>
      <meta property="og:title" content="お問い合わせ" />
      <meta property="og:image" content="https://www.i-kasa.com/ogp.jpg" />
      <meta property="description" content="特定商取引法に基づく記載" />
      <meta property="og:description" content="特定商取引法に基づく記載" />
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
      title="特定商取引法に基づく記載"
      description
      imgSrc="/assets/ikasa_background.png"
      category
    />
    <div className={style.page}>
      <table className="table">
        <tbody>
          <tr>
            <td>サービス提供者</td>
            <td>株式会社Nature Innovation Group</td>
          </tr>
          <tr>
            <td>住所</td>
            <td>東京都渋谷区代々木３丁目１番１０号代々木中央ビル４０２</td>
          </tr>
          <tr>
            <td>運営統括責任者</td>
            <td>丸川照司</td>
          </tr>
          <tr>
            <td>連絡先</td>
            <td>電話　050-3188-7642</td>
          </tr>
          <tr>
            <td>お問い合わせ時間</td>
            <td>9:00-18:00</td>
          </tr>
          <tr>
            <td>役務の対価</td>
            <td>
              ユーザーに貸し出した傘の利用料金として、一日(24時間)70円（税込み）を頂きます。
              <br />
              同月内であれば420円で課金がストップします。
            </td>
          </tr>
          <tr>
            <td>役務の提供時間</td>
            <td>傘のレンタル開始から傘のレンタル終了までとなります。</td>
          </tr>
          <tr>
            <td>商品以外の費用</td>
            <td>消費税</td>
          </tr>
          <tr>
            <td>商品の引き渡し時期</td>
            <td>傘のレンタル開始時に提供いたします。</td>
          </tr>
          <tr>
            <td>お支払い方法</td>
            <td>
              クレジットカード支払い　VISA/MASTER/AMEX/JCB
              <br />
              LINE Pay支払い
            </td>
          </tr>
          <tr>
            <td>お支払い時期</td>
            <td>
              利用料金は月末に一ヶ月分をまとめて、登録して頂いた
              <br />
              クレジットカードまたはLINE Payに請求させて頂きます。
            </td>
          </tr>
          <tr>
            <td>返品・キャンセルに関して</td>
            <td>
              レンタルを開始した後にユーザー様の都合による
              <br />
              レンタルのキャンセル（中止）をすることはできません。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
)
