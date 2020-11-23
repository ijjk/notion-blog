// import '../styles/global.css'
import '../styles/global.scss'
import '../components/primary/download.scss'
import '../styles/section.scss'
import '../components/cards/index_howtouse.scss'
import '../components/cards/index_keypoint.scss'

import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import Footer from '../components/primary/footer'
import Navbar from '../components/primary/navbar'
import Download from '../components/primary/download'

import * as gtag from '../lib/gtag'

export default ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  })
  return (
    <>
      <Navbar />
      <Component {...pageProps} />

      <Download />
      <Footer />
    </>
  )
}
