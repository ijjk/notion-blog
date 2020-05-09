import style from './footer.module.scss'
import Link from 'next/link'

//利用可能エリア
const Links = [
  {
    title: 'アイカサ',
    link: [{ title: 'サスティナビリティ', to: '/sustainability/' }],
  },
  {
    title: '会社情報',
    link: [
      { title: '企業情報', to: '/company/' },
      { title: 'ニュース', to: '/news/' },
    ],
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
                <Link href={data.to}>{data.title}</Link>
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
                  <a>
                    <img src="/assets/twitter-brands.svg" />
                  </a>
                </Link>
              </div>
              <div className={`icon ${style.footer_company_links_icon}`}>
                <Link href="/">
                  <a>
                    <img src="/assets/line-brands.svg" />
                  </a>
                </Link>
              </div>
              <div className={`icon ${style.footer_company_links_icon}`}>
                <Link href="/">
                  <a>
                    <img src="/assets/facebook-brands.svg" />
                  </a>
                </Link>
              </div>
              <div className={`icon ${style.footer_company_links_icon}`}>
                <Link href="/">
                  <a>
                    <img src="/assets/instagram-brands.svg" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
