import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/zeit-and-notion.png"
        height="85"
        width="250"
        alt="ZEIT + Notion"
      />
      <h1>My Notion Blog</h1>
      <div className="links">
        <ExtLink
          aria-label="Source code"
          href="https://github.com/ijjk/notion-blog"
        >
          <GitHub height={40} />
        </ExtLink>
      </div>

      <Features />

      <div className="explanation">
        <p>
          This is a statically generated{' '}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> site powered with{' '}
          <ExtLink href="https://notion.so">Notion's</ExtLink>{' '}
          <span style={{ borderBottom: '1px dashed black' }}>private</span> API
          as the backend and deployed to the super fast{' '}
          <ExtLink href="https://zeit.co">ZEIT</ExtLink>. It leverages some
          upcoming features in Next.js like{' '}
          <ExtLink href="https://github.com/zeit/next.js/issues/9524">
            SSG support
          </ExtLink>{' '}
          and{' '}
          <ExtLink href="https://github.com/zeit/next.js/issues/8626">
            built-in CSS support
          </ExtLink>
        </p>

        <p>
          The index page (the current page) is a normal Next.js page but the{' '}
          <Link href="/blog">
            <a>blog</a>
          </Link>{' '}
          is built from page data stored in Notion. Since this is using a{' '}
          unofficial API and experimental features that could change at any
          time, it is only meant for demonstrating aka{' '}
          <strong>use at your own risk</strong>
        </p>
      </div>
    </div>
  </>
)
