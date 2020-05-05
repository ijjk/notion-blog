import React from 'react'
import './keypoint_card.scss'

export default ({ style, title, description }) => (
  <div className="column">
    <div className="keypoint_card" style={style}>
      <h3 className="a-title">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
)
