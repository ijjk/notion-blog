import Head from 'next/head'

type DefaultHeadProps = {
  titlePre: string
  description: string
  ogpImage?: string
}

export default (props: DefaultHeadProps) => (
  <Head>
    <title>{props.titlePre} | アイカサ</title>
    <meta property="og:title" content={props.titlePre} />
    <meta
      property="og:image"
      content={props.ogpImage ?? 'https://www.i-kasa.com/ogp.jpg'}
    />
    <meta property="description" content={props.description} />
    <meta property="og:description" content={props.description} />
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
)
