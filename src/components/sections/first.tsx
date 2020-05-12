import Link from 'next/link'

import style from './first.module.scss'

export default () => {
  return (
    <section className={`${style.section_first} separate`}>
      <div className={`${style.section_first_message}`}>
        <div className="container">
          <div className={`${style.section_first_message_content}`}>
            <h1>
              <span>もう、</span>
              <br />
              <span>カサを持ち歩かない</span>
              <br />
              <span>生活を。</span>
            </h1>
            {/* <div className={`${style.section_first_download}`}>
              <div className={`${style.section_first_download_text}`}>
                <p>
                  <span>今すぐダウンロード!</span>
                </p>
              </div>
              <div className={`${style.section_first_download_icon}`}>
                <img src="/assets/appstore.svg" height="65px" />
                <img src="/assets/playstore.svg" height="65px" />
              </div>
            </div> */}
            <div
              className={`${style.note}`}
              style={{ backgroundColor: 'rgba(241, 165, 0, 0.7)' }}
            >
              <div className={`${style.note_message}`}>
                現在サービス入れ替えのため、横浜・東京・大宮でサービスを一時休止しています
              </div>
              <div className={`${style.note_button}`}>
                <Link href="/news/service_suspension">
                  <a>詳細を確認</a>
                </Link>
              </div>
            </div>
            <div className={`${style.note}`} style={{ marginTop: '10px' }}>
              <div className={`${style.note_message}`}>
                現在クラウドファウンディング実施中!
              </div>
              <div className={`${style.note_button}`}>
                <a href="https://www.makuake.com/project/i-kasa/">
                  今すぐチェック!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.background}></div>
    </section>
  )
}
