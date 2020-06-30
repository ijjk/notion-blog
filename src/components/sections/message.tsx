import style from './message.module.scss'

export default ({ children, title, is_displayed_btn }) => {
  return (
    <section className={style.message}>
      <div className={`container ${style.message_content}`}>
        <h2 className="center">{title}</h2>
        {children}
        {is_displayed_btn ? (
          <a href="/contact" className={style.message_btn}>
            アイカサの設置希望はこちら
          </a>
        ) : null}
      </div>
    </section>
  )
}
