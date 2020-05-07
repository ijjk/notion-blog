import styles from './normal_card.module.scss'

export default ({ number, title, description, imgSrc }) => (
  <div className={styles.card_normal}>
    <h3 className={styles.card_normal_number}>{number}</h3>
    <img className={styles.card_normal_img} src={imgSrc} />
    <h3 className={`${styles.card_normal_title} a-title`}>{title}</h3>
    <p className={styles.card_normal_description}>{description}</p>
  </div>
)
