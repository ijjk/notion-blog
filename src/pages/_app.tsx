import '../styles/global.css'
import 'katex/dist/katex.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
