import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
