import style from './faq_navigation.module.scss'

export default () => {
  return (
    <div className={style.navbtn__wrapper}>
      <a href="#start" className={style.navbtn}>
        はじめに
      </a>
      <a href="#howtouse" className={style.navbtn}>
        使い方
      </a>
      <a href="#place" className={style.navbtn}>
        設置場所
      </a>
      <a href="#payment" className={style.navbtn}>
        支払い方法
      </a>
      <a href="#others" className={style.navbtn}>
        その他
      </a>
    </div>
  )
}
