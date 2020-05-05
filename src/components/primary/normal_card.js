import React from 'react'
import './normal_card.scss'

export default ({ number, title, description, imgSrc }) => (
  <div className="card_normal">
    <h3 className="card_normal_number">{number}</h3>
    <img className="card_normal_img" src={imgSrc} />
    <h3 className="card_normal_title a-title">{title}</h3>
    <p className="card_normal_description">{description}</p>
  </div>
)
