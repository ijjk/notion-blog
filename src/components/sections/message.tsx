import style from './message.module.scss'

export default () => {
  return (
    <section className={style.message}>
      <div className={`container ${style.message_content}`}>
        <h2 className="center">身近なライフスタイルから始めよう</h2>
        <p>
          地球のために、未来のために何かできないか？
          <br />
          そう考えている時は、
          <br />
          まず身近な傘から始めてみませんか？
          <br />
          アイカサは、私たちの豊かな生活を
          <br />
          守ることに貢献します。
        </p>
        <a href="/contact" className={style.message_btn}>
          アイカサの設置希望はこちら
        </a>
      </div>
    </section>
  )
}
