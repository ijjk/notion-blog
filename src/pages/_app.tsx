import Footer from '../components/footer'

import '../styles/global.css'
import 'spectre.css/dist/spectre.min.css'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
)
