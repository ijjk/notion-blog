import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import Link from 'next/link'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src="/avatar.jpg" alt="Photo of Ian Dilick" />
      </div>
      <h1>Ian Dilick</h1>

      <div className="explanation">
        <h2>
          Hey! If you're seeing this page, it means that we're neighbors. Great
          to meet you!
        </h2>
        <p>
          I figured this would be a fun way to introduce myself. Right now I'm
          on the hunt for a job (specifically a Product Management role!), but I
          generally work in tech, having previously started a company to build a
          communication system for self-driving cars. You can read more about
          that on the <Link href="/"> main page.</Link>
        </p>
        <p>
          Outside of work, I'm a big motorsports fan (especially F1), a coffee
          enthusiast, and I love to cook! Feel free to knock and introduce
          yourself -- I'd be happy to make you a coffee (with beans supplied by
          my friend's company{' '}
          <ExtLink href="https://coupletcoffee.com">Couplet!</ExtLink>
          ).
        </p>
        <p>
          Thanks for taking the time to read this! Should you ever need to, you
          can get in touch with me by clicking any of the icons at the bottom of
          the page. Maybe go give me a follow on{' '}
          <ExtLink href="https://twitter.com/imdilick">Twitter</ExtLink> while
          you're at it :)
        </p>
        <p>Have a great day!</p>
      </div>
    </div>
  </>
)
