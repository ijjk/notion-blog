import React from 'react'
import './howtouse_card.scss'

function DescriCompo(props) {
  return (
    <div className="column is-three-fifths">
      <div className="howtouse_card_content">
        <h4 className="howtouse_card_number">{props.number}</h4>
        <div className="howtouse_card_text">
          <h3 className="a-title">{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}
function ImageCompo(props) {
  return (
    <div className="column">
      <img src={props.imgSrc} />
    </div>
  )
}

function Type(props) {
  switch (props.type) {
    case 'right':
      return (
        <div className="columns">
          <DescriCompo
            number={props.number}
            title={props.title}
            description={props.description}
          />
          <ImageCompo imgSrc={props.imgSrc} />
        </div>
      )
    case 'left':
      return (
        <div className="columns">
          <ImageCompo imgSrc={props.imgSrc} />
          <DescriCompo
            number={props.number}
            title={props.title}
            description={props.description}
          />
        </div>
      )
  }
}

export default ({ type, number, title, description, imgSrc }) => (
  <div className="howtouse_card">
    <Type
      type={type}
      number={number}
      title={title}
      description={description}
      imgSrc={imgSrc}
    />
  </div>
)
