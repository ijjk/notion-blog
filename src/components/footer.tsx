import ExtLink from './ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'
import KeyBase from '../components/svgs/keybase'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/imdilick',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/ianmdilick',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/imdilick/',
  },
  {
    Comp: KeyBase,
    alt: 'keybase icon',
    link: 'https://keybase.io/imdilick',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:ian@iandilick.com',
  },
]

export default () => (
  <>
    <footer>
      <div className={sharedStyles.layout}>
        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
        Made out of ☕ by Ian Dilick, based on{' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          notion-blog.
        </ExtLink>
      </div>
    </footer>
  </>
)
