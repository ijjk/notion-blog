import Head from 'next/head'
import Title from '../../components/primary/title'
import style from '../../styles/page.module.scss'

import Message from '../../components/sections/message'
export default () => (
  <>
    <Head>
      <title>会社情報 | アイカサ</title>
      <meta property="og:title" content="会社情報" />
      <meta property="og:image" content="https://i-kasa.com/ogp.jpg" />
      <meta
        property="description"
        content="アイカサの運営会社、株式会社Nature Innovation Groupに関する情報"
      />
      <meta
        property="og:description"
        content="アイカサの運営会社、株式会社Nature Innovation Groupに関する情報"
      />
      <meta property="og:url" content="https://i-kasa.com" />
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
        content="アイカサ | カサのシェアリングサービス"
      />
      <meta data-hid="og:locale" property="og:locale" content="ja_JP" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <Title title="会社情報" description imgSrc category />
    <div className={style.page} style={{ paddingBottom: 0 }}>
      <h2>アイカサの世界観</h2>
      <p>
        急な雨で傘を購入したことはありませんか？
        <br />
        その時はどんな気持ちでしたか？
      </p>
      <p>
        決してポジティブな感情ではなかったと思います。
        <br />
        「雨か、仕方ないな：と思いながら家に5,6本もあるビニール傘。
        <br />
        もったいないしなんか後悔のような悔しい気持ち。それにまた不要な傘が増えてしまう。
        <br />
        そのビニール傘の消費本数は日本だけで年間8000万本になります。
        <br />
        8000万回「雨か、仕方ない」と思いながら傘を購入しているのです。
      </p>
      <p>
        私たちは本来「ただ濡れたくない」だけなのです。
        <br />
        新しい傘が欲しいわけではありません。
      </p>
      <p>
        だからこそ「濡れない」体験を
        <br />
        より安くより便利に届けて移動を快適にしたい。
      </p>
    </div>
    <Message />
    <div className={style.page}>
      <div style={{ textAlign: 'center' }}>
        <h2>Mission</h2>
        <p>雨の日を快適にハッピーに</p>
        <h2>Vision</h2>
        <p>1日10万人が使う、雨の日のインフラに</p>
        <h2>Value</h2>
        <p>徹底的に、視座高く、相思相愛</p>
      </div>

      <hr />

      <h2>会社概要</h2>
      <table className="table" style={{ marginTop: '20px' }}>
        <tbody>
          <tr>
            <th>会社名</th>
            <td>株式会社Nature Innovation Group</td>
          </tr>
          <tr>
            <th>住所</th>
            <td>
              151-0053
              <br />
              東京都渋谷区代々木３丁目１番１０号代々木中央ビル４０２
            </td>
          </tr>
          <tr>
            <th>電話番号</th>
            <td>050-3188-7642</td>
          </tr>
          <tr>
            <th>代表取締役</th>
            <td>丸川照司</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>所在地</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.927226092165!2d139.70339211525814!3d35.65416458020054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5b6e402423%3A0xa98d5b2351d48ea2!2z44CSMTUwLTAwMDIg5p2x5Lqs6YO95riL6LC35Yy65riL6LC377yT5LiB55uu77yS77yW4oiS77yR77yW!5e0!3m2!1sja!2sjp!4v1588997571647!5m2!1sja!2sjp"
        width="100%"
        height="450"
        style={{ border: '0' }}
      ></iframe>
    </div>
  </>
)
