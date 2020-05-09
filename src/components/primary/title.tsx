import style from './title.module.scss'

export default ({ title, description, imgSrc, category }) => {
  return (
    <section className={`${style.title} separate`}>
      <div className={style.container}>
        <div className={style.category}>{category}</div>
        <h1 className={style.h1}>{title}</h1>
        <p className={style.p}>{description}</p>
      </div>
      <div
        className={style.background}
        style={{
          backgroundImage: `url(${
            imgSrc == '' ? imgSrc : '/assets/ikasa_background.png'
          })`,
        }}
      ></div>
    </section>
  )
}
