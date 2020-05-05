import React from 'react'
import './first.scss'

export default () => (
  <section className="section_first separate">
    <div className="section_first_message">
      <h1>
        もう、
        <br />
        カサを持ち歩かない
        <br />
        生活を。
      </h1>
      <div className="section_first_download">
        <div className="section_first_download_text">
          <p>今すぐダウンロード!</p>
        </div>
        <div className="section_first_download_icon">
          <img src="/assets/appstore.svg" height="65px" />
          <img src="/assets/playstore.svg" height="65px" />
        </div>
      </div>
    </div>
  </section>
)
