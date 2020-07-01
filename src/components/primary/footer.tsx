import style from './footer.module.scss'
import ExtLink from '../../components/ext-link'
import Link from 'next/link'

//利用可能エリア
const Links = [
  {
    title: 'アイカサ',
    link: [
      { title: 'サスティナビリティ', to: '/sustainability/' },
      { title: 'ニュース', to: '/news/' },
      { title: 'よくある質問', to: '/faq/' },
    ],
  },
  // {
  //   title: '企業様向け',
  //   link: [
  //     {
  //       title: 'オフィスプラン導入ご検討の方',
  //       to: 'https://peraichi.com/landing_pages/view/t5sxy',
  //     },
  //     {
  //       title: 'スポンサーご検討の方',
  //       to: 'https://peraichi.com/landing_pages/view/hjtyl',
  //     },
  //   ],
  // },
  {
    title: '企業情報',
    link: [
      { title: '会社情報', to: '/company/' },
      { title: '特定商取引法に基づく表記', to: '/company/sct/' },
      { title: 'お問い合わせ', to: '/contact/' },
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
                <ExtLink href="https://twitter.com/ikasa1111">
                  <a>
                    <img src="/assets/twitter-brands.svg" />
                  </a>
                </ExtLink>
              </div>
              <div className={`icon ${style.footer_company_links_icon}`}>
                <ExtLink href="https://liff.i-kasa.com/login?prevurl=https://lin.ee/q43e0fr&no=1">
                  <a>
                    <img src="/assets/line-brands.svg" />
                  </a>
                </ExtLink>
              </div>
              <div className={`icon ${style.footer_company_links_icon}`}>
                <ExtLink href="https://www.facebook.com/iKasaJapan/">
                  <a>
                    <img src="/assets/facebook-brands.svg" />
                  </a>
                </ExtLink>
              </div>
              <div className={`icon ${style.footer_company_links_icon}`}>
                <ExtLink href="https://instagram.com/ikasa1111">
                  <a>
                    <img src="/assets/instagram-brands.svg" />
                  </a>
                </ExtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
