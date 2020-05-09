import style from './message.module.scss'

export default () => {
  return (
    <section className={style.message}>
      <div className={`container ${style.message_content}`}>
        <h2 className="center">100年続く雨の日のインフラを</h2>
        <p>
          アイカサは「傘」から現代の社会を変え、
          <br />
          未来に生まれてくる子供たちが快適になる社会や、地球環境を作っていきます。
        </p>
        <p>
          数年後には、 『昔の人たちって傘を買ってたんだね』
          <br />
          という会話が生まれるくらい、
          <br />
          傘をシェアするという概念が当たり前であるという社会を創り出します。
        </p>
      </div>
    </section>
  )
}
