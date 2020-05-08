import style from './footer.module.scss'
import Link from 'next/link'

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
            <img
              src="/assets/icon.svg"
              className={`${style.footer_company_logo}`}
              alt=""
            />
          </div>
          <div className="column">
            <div className={`${style.footer_company_links}`}>
              <div className={`icon ${style.footer_company_links_icon}`}>
                <Link href="/">
                  <img src="/assets/twitter-brands.svg" />
                </Link>
              </div>
              <div className={`icon ${style.footer_company_links_icon}`}>
                <Link href="/">
                  <img src="/assets/line-brands.svg" />
                </Link>
              </div>
              <div className={`icon ${style.footer_company_links_icon}`}>
                <Link href="/">
                  <img src="/assets/facebook-brands.svg" />
                </Link>
              </div>
              <div className={`icon ${style.footer_company_links_icon}`}>
                <Link href="/">
                  <img src="/assets/instagram-brands.svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
