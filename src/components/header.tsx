import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const ogImageUrl = 'https://notion-blog.now.sh/og-image.jpeg'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>omuomugin-pub</title>
        <meta name="description" content="blog" />
        <meta name="og:title" content="omuomuign-pub" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@omuomugin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
    </header>
  )
}
