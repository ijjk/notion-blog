import Link from 'next/link'
import styles from './index.module.css'
import Header from '../components/header'
import ExtLink from '../components/ext-link'

export default () => (
  <>
    <Header />
    <div className={styles.home}>
      <img src='/notion-and-zeit.png' height='174' width='439' alt='ZEIT + Notion' />
      <h1>My Notion Backed Site</h1>

      <p>
        This is a statically generated <ExtLink href='https://nextjs.org'>Next.js</ExtLink> site powered with <ExtLink href='https://notion.so'>Notion's</ExtLink> <strong>private</strong> API as the backend and deployed to the super fast <ExtLink href='https://zeit.co'>ZEIT Now</ExtLink>. It leverages some upcoming features in Next.js like <ExtLink href='https://github.com/zeit/next.js/issues/9524'>SSG support</ExtLink>, Catch-all routing, and <ExtLink href='https://github.com/zeit/next.js/issues/8626'>built-in CSS support</ExtLink>
      </p>

      <p>
        The index page (the current page) is a normal Next.js page but <Link href='[...slug]' as='/blog'>Blog</Link> and <Link href='[...slug]' as='/contact'>Contact</Link> are built from page data stored in Notion. Since this is using a <strong>private</strong> API and experimental features that could change at any time, it is only meant for demonstrating aka <strong>use at your own risk</strong>
      </p>
    </div>
  </>
)
