import style from './index_usecase.module.scss'

export default ({ title, imgSrc }) => {
  return (
    <>
      <div className={style.card} style={{ width: '100%', padding: '0 15px' }}>
        <img
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: 'black',
            borderRadius: '15px',
            objectFit: 'cover',
          }}
          src={imgSrc}
        />
        <h3
          style={{
            color: '#32487b',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            marginTop: '10px',
          }}
        >
          {title}
        </h3>
      </div>
    </>
  )
}
