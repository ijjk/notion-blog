import '../styles/global.css'
import ExtLink from '../components/ext-link'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <footer>
      <span>Deploy your own!</span>
      <ExtLink href="https://zeit.co/new/project?template=https://github.com/ijjk/notion-blog/tree/master">
        <img
          src="https://zeit.co/button"
          height={46}
          width={132}
          alt="deploy to ZEIT button"
        />
      </ExtLink>
      <span>
        or{' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          view source
        </ExtLink>
      </span>
    </footer>
  </>
)
