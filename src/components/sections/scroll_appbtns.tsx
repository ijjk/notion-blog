import React, { useEffect, useState } from 'react'

import style from './scroll_appbtns.module.scss'

export default () => {
  const [active, setActive] = useState(false)

  const scrollTop = () => {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
  }

  const watchCurrentPosition = () => {
    setActive(scrollTop() > 800)
  }

  useEffect(() => {
    window.addEventListener('scroll', event => watchCurrentPosition(), true)
  })

  return (
    <div
      className={`${active ? style.active : style.inactive} ${
        style.scroll_wrapper
      }`}
    >
      <div className="container">
        <div className={style.note}>
          <p>今すぐダウンロード!</p>
          <a
            href="https://ikasa.onelink.me/IdAp/hp" // ここにAppStoreリンクを入れる
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/appstore.svg" height="65px" />
          </a>
          <a
            href="https://ikasa.onelink.me/IdAp/hp" // ここにGooglePlayリンクを入れる
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/playstore.svg" height="65px" />
          </a>
        </div>
      </div>
    </div>
  )
}
