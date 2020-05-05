import React from 'react'

export default ({ center, className, description, title }) => (
  <div>
    {description !== undefined && (
      <p className="h2_description">{description}</p>
    )}
    <h2 className={center !== undefined ? 'center ' + className : className}>
      {title}
    </h2>
  </div>
)
