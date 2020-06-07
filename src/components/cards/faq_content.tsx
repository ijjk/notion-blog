import { useState } from 'react'
import style from './faq_content.module.scss'

export default ({ title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={style.faq_card}>
      <div className={style.title_card} onClick={() => setOpen(!open)}>
        <span>Q.</span>
        <span>{title}</span>
        <span>{open ? '－' : '＋'}</span>
      </div>

      {open ? (
        <div className={style.content_card}>
          <span>A.</span>
          <span>{children}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
