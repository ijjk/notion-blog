import Footer from '../components/footer'

import '../styles/global.css'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
)
