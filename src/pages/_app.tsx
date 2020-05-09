// import '../styles/global.css'
import '../styles/global.scss'
import '../components/primary/download.scss'
import '../styles/section.scss'
import '../components/cards/index_howtouse.scss'
import '../components/cards/index_keypoint.scss'

import ExtLink from '../components/ext-link'
import Footer from '../components/primary/footer'
import Navbar from '../components/primary/navbar'
import Download from '../components/primary/download'

export default ({ Component, pageProps }) => (
  <>
    <Navbar />
    <Component {...pageProps} />

    <Download />
    <Footer />
  </>
)
