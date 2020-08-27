import DefaultHead from '../components/heads/default'
import { downloadUrl } from '../constants/urls'

export default () => {
  if (process.browser) {
    const redirectUrl: string = downloadUrl
    window.location.href = redirectUrl
  }

  return (
    <DefaultHead
      titlePre="リダイレクト"
      description="ダウンロードページへリダイレクト"
    ></DefaultHead>
  )
}
