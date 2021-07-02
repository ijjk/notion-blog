import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src="/avatar.jpg" alt="Photo of Ian Dilick" />
      </div>
      <h1>Ian Dilick</h1>
      <h2>
        Founded{' '}
        <ExtLink
          href="https://eschaton.tech"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          Eschaton,
        </ExtLink>{' '}
        searching for a full-time PM role!
      </h2>

      <Features />

      <div className="explanation">
        <p>
          I'm currently looking to take the skills I learned as a founder and
          apply them in a full-time PM role -- I am especially interested in
          companies working on hard/deep-tech products! You can always get in
          touch using any of the links below, or view my resume{' '}
          <ExtLink href="https://imdilick.keybase.pub/IanDilickResume04192021.pdf?dl=1">
            here!
          </ExtLink>
        </p>
        <p>
          I like to spend my time vibing with{' '}
          <ExtLink href="https://twitter.com/vikushavas">@vikushavas</ExtLink>{' '}
          and <ExtLink href="https://twitter.com/bhwags">@bhwags</ExtLink> at{' '}
          <ExtLink href="https://internetrevolution.co">
            Internet Revolution,
          </ExtLink>{' '}
          where we do lots of very serious business things and take ourselves
          extremely seriously, and simping for{' '}
          <ExtLink href="https://twitter.com/chiefgayofficer">
            @chiefgayofficer
          </ExtLink>
          's <ExtLink href="https://coupletcoffee.com">Couplet Coffee!</ExtLink>{' '}
        </p>
        <p>
          Previously at{' '}
          <ExtLink href="https://eschaton.tech">Eschaton,</ExtLink> which I
          founded to build a communication system for self-driving vehicles,{' '}
          <ExtLink href="https://itiswhatitis.fm">👁👄👁.fm,</ExtLink> where we
          raised $200k for charity in 48 hours,{' '}
          <ExtLink href="https://safestamp.com">SafeStamp,</ExtLink> solving the
          counterfeit drug crisis, and the{' '}
          <ExtLink href="https://medicalinteroperability.org/">
            Center for Medical Interoperability,
          </ExtLink>{' '}
          writing standards for medical devices to share data.
        </p>
        <p>
          I also previously studied Information Systems and Entrepreneurship at{' '}
          <ExtLink href="https://luc.edu">Loyola University Chicago.</ExtLink> I
          dropped out after my freshman year to pursue Eschaton full-time.
        </p>
      </div>
    </div>
  </>
)
