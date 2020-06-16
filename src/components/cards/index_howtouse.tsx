function DescriCompo(props) {
  return (
    <div className="element is-three-fifths">
      <div className="howtouse_card_content">
        <h4 className="howtouse_card_number">{props.number}</h4>
        <div className="howtouse_card_text">
          <h3 className="a-title">{props.title}</h3>
          <p>{props.description}</p>
          {props.number == '02' ? (
            <small
              style={{ display: 'block', paddingTop: '20px', color: 'gray' }}
            >
              ・NFCタッチは現在準備中のため、QRコードスキャンをご利用ください。
              {/* <br /> */}
              {/* ・福岡・水戸エリアでは現在かざしてかりる機能は利用することができません。 */}
              <br />
              ・福岡・水戸エリアではエリアを跨いでカサを返却することはできません。
            </small>
          ) : (
            ''
          )}
          {props.number == '04' ? (
            <small
              style={{ display: 'block', paddingTop: '20px', color: 'gray' }}
            >
              ・NFCタッチは現在準備中のため、QRコードスキャンをご利用ください。
            </small>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
function ImageCompo(props) {
  return (
    <div
      className="element howtouse_card_image"
      style={{ backgroundImage: 'url(' + props.imgSrc + ')' }}
    ></div>
  )
}

function Type(props) {
  return (
    <div className="grid">
      <ImageCompo imgSrc={props.imgSrc} />
      <DescriCompo
        number={props.number}
        title={props.title}
        description={props.description}
      />
    </div>
  )
}

export default ({ number, title, description, imgSrc }) => (
  <div className="howtouse_card">
    <Type
      number={number}
      title={title}
      description={description}
      imgSrc={imgSrc}
    />
  </div>
)
