import style from './footer.module.scss'

import Icon from '../../assets/svgs/icon.svg'

//利用可能エリア
const Links = [
  {
    title: '会社情報',
    link: [
      { title: 'サスティナビリティ', to: '/sustainability/' },
      { title: 'サスティナビリティ', to: '/sustainability/' },
    ],
  },
  {
    title: '会社情報',
    link: [{ title: 'サスティナビリティ', to: '/sustainability/' }],
  },
  {
    title: '会社情報',
    link: [{ title: 'サスティナビリティ', to: '/sustainability/' }],
  },
  {
    title: '会社情報',
    link: [{ title: 'サスティナビリティ', to: '/sustainability/' }],
  },
]

export default () => (
  <footer className={style.footer}>
    <div className={`${style.footer_container} container`}>
      <div className={`${style.footer_links} columns`}>
        {Links.map((data, index) => {
          var region = data.link.map((data, index) => {
            return (
              <li className={style.footer_links_list_column} key={index}>
                {data.title}
              </li>
            )
          })
          return (
            <div className="column" key={index}>
              <h4 className={style.footer_links_title}>{data.title}</h4>
              <ul
                className={style.footer_links_list}
                style={{ flexWrap: 'wrap' }}
              >
                {region}
              </ul>
            </div>
          )
        })}
      </div>
      <div className={style.footer_company}>
        <div className="columns">
          <div className={`column is-half`}>
            <Icon className={`${style.footer_company_logo}`} />
          </div>
          <div className="column">
            <div className={`${style.footer_company_links}`}>
              <div class={`icon ${style.footer_company_links_icon}`}>
                <Twitter />
              </div>
              <div class={`icon ${style.footer_company_links_icon}`}>
                <LINE />
              </div>
              <div class={`icon ${style.footer_company_links_icon}`}>
                <Facebook />
              </div>
              <div class={`icon ${style.footer_company_links_icon}`}>
                <Instagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
