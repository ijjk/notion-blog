import '../styles/global.css'
import contactStyles from '../styles/contact.module.css'

import ExtLink from '../components/ext-link'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/omuomugin',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/omuomugin',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:omuomugin@out-box.dev',
  },
]

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <footer>
      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
      <div>
        Hosted using{' '}
        <ExtLink href="https://github.com/omuomugin/notion-blog">
          notion-blog
        </ExtLink>
      </div>
    </footer>
  </>
)
