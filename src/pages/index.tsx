import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/noun-cute-335121.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>蘇蘇馬鈴薯</h1>
        <h2>
          大家好，我是蘇蘇馬鈴薯，是個妙齡女子。這裡是我的部落格，
          <br></br>分享一些我的日常和胡思亂想。歡迎逗留!
        </h2>

        <Features />
      </div>
    </>
  )
}
