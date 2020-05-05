import React from 'react'
import './section.scss'

export default ({ type, className, container, style, title, children }) => (
  <section className={'section_' + type + ' ' + className} style={style}>
    <div className="container" style={{ maxWidth: container }}>
      <div className={'section_' + type + '_content'}>
        {title}
        {children}
      </div>
    </div>
  </section>
)
