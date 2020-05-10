import Head from 'next/head'

import Title from '../components/primary/title'
import style from '../styles/page.module.scss'

import Message from '../components/sections/message'

export default () => (
  <>
    <Head>
      <title>サスティナビリティ | アイカサ</title>
      <meta property="og:title" content="サスティナビリティ" />
      <meta property="og:image" content="https://i-kasa.com/ogp.jpg" />
      <meta
        property="description"
        content="アイカサの環境保全に対する考えかた"
      />
      <meta
        property="og:description"
        content="アイカサの環境保全に対する考えかた"
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
    <Title title="サスティナビリティ" description="🌍+❤️" imgSrc category />
    <div className={style.page} style={{ paddingBottom: 0 }}>
      <h2>溢れる使い捨て傘</h2>
      <p>
        現在国内で約8000万本消費されているビニール傘。
        <br />
        年間多くが半年以内で地球に埋め立てられ、 海に流され続けています。
        <br />
        日本人の一人あたりの傘所有本数、ビニール傘消費本数は
        <br />
        どちらも世界1位です。
      </p>
      <hr />
      <h2>カサを「シェア」する提案</h2>
      <p>
        この使い捨て文化を、
        <br />
        アイカサはみなさんと一緒に変えていきたいと考えています。
        <br />
        これまで個人が購入していた傘を 「シェア」することで、
        <br />
        余分な傘の製造・使い捨てを減らし、 持続可能な社会をつくっていきます。
        <br />
      </p>
    </div>
    <Message />
  </>
)
