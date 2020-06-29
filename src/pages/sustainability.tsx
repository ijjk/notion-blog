import Head from 'next/head'

import Title from '../components/primary/title'
import style from '../styles/sustainability.module.scss'

import Message from '../components/sections/message'

export default () => (
  <>
    <Head>
      <title>サスティナビリティ | アイカサ</title>
      <meta property="og:title" content="サスティナビリティ" />
      <meta property="og:image" content="https://www.i-kasa.com/ogp.jpg" />
      <meta
        property="description"
        content="アイカサの環境保全に対する考えかた"
      />
      <meta
        property="og:description"
        content="アイカサの環境保全に対する考えかた"
      />
      <meta property="og:url" content="https://www.i-kasa.com" />
      <meta property="og:type" content="website" />
      <meta
        data-hid="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta data-hid="twitter:site" name="twitter:site" content="@ikasa1111" />
      <meta
        data-hid="og:site_name"
        property="og:site_name"
        content="アイカサ | 傘のシェアリングサービス"
      />
      <meta data-hid="og:locale" property="og:locale" content="ja_JP" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <Title
      title="サスティナビリティ"
      description="アイカサの環境保全に対する考えかた"
      imgSrc="/assets/ikasa_background.png"
      category
      grey
    />
    <section
      className="section_center separate"
      style={{ backgroundColor: '#f8f8f8' }}
    >
      <div className="container">
        <h2>日本の年間ビニール傘消費量</h2>

        <div className={style.flex_wrapper}>
          <div className={style.flex_inner} style={{ textAlign: 'center' }}>
            <img
              src="/assets/sustainability_vinyl_umbrella_img.png"
              alt="日本の年間ビニール傘消費量"
              width="60%"
            />
          </div>

          <div className={style.flex_inner}>
            <h3 className={`${style.title} ${style.title_navy}`}>約8000万本</h3>
            <p>
              私たち日本人の一人あたりの傘所有本数、ビニール傘消費本数は共に世界で1位だと言われています。
              <br />
              毎年日本で消費される傘は年間約1.2億本～1.3億本。そのうちの6割にあたる約8,000万本(※)がビニール傘で
              <br />
              その多くは半年以内に地球に埋め捨てられ続けています。
              <br />
              地球環境のためにも、毎年約8000万本の消費を続けていいとは到底思えません。
            </p>
            <p
              style={{
                marginTop: '16px',
                fontSize: '14px',
              }}
            >
              (※)参照元：ビニール傘.com (
              <a
                href="http://xn--idkp7e1c706t.com/concept.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://xn--idkp7e1c706t.com/concept.html
              </a>
              )
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      className="section_center"
      style={{
        paddingBottom: 0,
        backgroundColor: '#fff',
      }}
    >
      <div className="container">
        <h2>アイカサの取り組み</h2>

        <div
          style={{
            maxWidth: '900px',
            margin: 'auto',
          }}
        >
          <div className={style.flex_wrapper} style={{ marginBottom: '72px' }}>
            <div className={style.flex_inner} style={{ textAlign: 'center' }}>
              <img
                src="/assets/sustainability_initiative01_img.png"
                alt="丈夫な作り"
                width="60%"
              />
            </div>

            <div className={style.flex_inner}>
              <h3 className={style.title}>
                <span
                  className={style.title_navy}
                  style={{ marginRight: '24px' }}
                >
                  01
                </span>
                <span className={style.title_blue}>丈夫な作り</span>
              </h3>
              <p className={style.initiative_text}>
                傘部分は暴風にも耐えられる
                <br />
                グラスファイバーを使用。
                <br />
                簡単には壊れない丈夫な素材で
                <br />
                無駄なゴミを作りません。
                <br />
                <br />
                <img
                  src="/assets/sustainability_initiative01_ico.jpg"
                  alt="日本の年間ビニール傘消費量"
                  width="72px"
                />
              </p>
            </div>
          </div>

          <div
            className={style.flex_wrapper}
            style={{
              marginBottom: '72px',
              flexDirection: 'row-reverse',
            }}
          >
            <div className={style.flex_inner} style={{ textAlign: 'center' }}>
              <img
                src="/assets/sustainability_initiative02_img.png"
                alt="CO2削減効果"
                width="60%"
              />
            </div>

            <div className={style.flex_inner}>
              <h3 className={style.title}>
                <span
                  className={style.title_navy}
                  style={{ marginRight: '24px' }}
                >
                  02
                </span>
                <span className={style.title_blue}>CO2削減効果</span>
              </h3>
              <p className={style.initiative_text}>
                アイカサを1回利用すると、
                <br />
                CO2約692g(※)の削減に貢献。
                <br />
                <br />
                <img
                  src="/assets/sustainability_initiative02_ico.jpg"
                  alt="CO2削減効果"
                  width="72px"
                />
                <br />
                <p
                  style={{
                    marginTop: '16px',
                    fontSize: '14px',
                  }}
                >
                  (※)参考元:環境省 3R原単位の算出方法 (
                  <a
                    href="https://www.env.go.jp/press/files/jp/19747.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.env.go.jp/press/files/jp/19747.pdf
                  </a>
                  )
                </p>
              </p>
            </div>
          </div>

          <div className={style.flex_wrapper}>
            <div className={style.flex_inner} style={{ textAlign: 'center' }}>
              <img
                src="/assets/sustainability_initiative03_img.png"
                alt="リペアラブル"
                width="60%"
              />
            </div>

            <div className={style.flex_inner}>
              <h3 className={style.title}>
                <span
                  className={style.title_navy}
                  style={{ marginRight: '24px' }}
                >
                  03
                </span>
                <span className={style.title_blue}>リペアラブル</span>
              </h3>
              <p className={style.initiative_text}>
                もしも骨が1本折れてしまっても、
                <br />
                一本だけ取り替えられる仕様に。
                <br />
                何度もリペアできれば、
                <br />
                使い捨てビニール傘を減らすことに
                <br />
                繋がります。
                <br />
                <br />
                <img
                  src="/assets/sustainability_initiative03_ico.jpg"
                  alt="リペアラブル"
                  width="72px"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="section_center"
      style={{
        paddingBottom: 0,
        backgroundColor: '#fff',
      }}
    >
      <div className="container">
        <h2>協力団体・個人一覧</h2>
        <p style={{ marginBottom: '48px' }}>
          アイカサクラウドファンディングにて支援してくださった
          <br />
          名簿一覧です。(順不同)
        </p>

        <div className={`${style.flex_wrapper} ${style.cooperation_wrapper}`}>
          <a
            href="https://goodluck.or.jp"
            target="_blank"
            rel="noopener noreferrer"
            className={style.flex_inner}
            style={{ textAlign: 'center' }}
          >
            <div className={style.cooperation_logo}>
              <img
                src="/assets/sustainability_cooperation01.png"
                alt="一般社団法人グッドラック"
                className={style.cooperation_img}
              />
            </div>
            一般社団法人グッドラック
          </a>
          <div className={style.flex_inner} style={{ textAlign: 'center' }}>
            <div className={style.cooperation_logo}>
              <img
                src="/assets/sustainability_cooperation02.png"
                alt="株式会社KAEN"
                className={style.cooperation_img}
              />
            </div>
            株式会社KAEN
          </div>
          <div className={style.flex_inner} style={{ textAlign: 'center' }}>
            <div className={style.cooperation_logo}>
              <img
                src="/assets/appicon_white.png"
                alt="yuzoshop"
                className={style.cooperation_img}
              />
            </div>
            yuzoshop
          </div>
          <div className={style.flex_inner} style={{ textAlign: 'center' }}>
            <div className={style.cooperation_logo}>
              <img
                src="/assets/appicon_white.png"
                alt="大塚　雄三"
                className={style.cooperation_img}
              />
            </div>
            大塚　雄三
          </div>
        </div>

        <div className={`${style.flex_wrapper} ${style.cooperation_wrapper}`}>
          <div className={style.flex_inner} style={{ textAlign: 'center' }}>
            <div className={style.cooperation_logo}>
              <img
                src="/assets/appicon_white.png"
                alt="竹松友子"
                className={style.cooperation_img}
              />
            </div>
            竹松友子
          </div>
          <div className={style.flex_inner} style={{ textAlign: 'center' }}>
            <div className={style.cooperation_logo}>
              <img
                src="/assets/appicon_white.png"
                alt="ラジャアンパット合同会社"
                className={style.cooperation_img}
              />
            </div>
            ラジャアンパット合同会社
          </div>
          <a
            href="https://entertain.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.flex_inner}
            style={{ textAlign: 'center' }}
          >
            <div className={style.cooperation_logo}>
              <img
                src="/assets/sustainability_cooperation03.png"
                alt="株式会社エンターテイン"
                className={style.cooperation_img}
              />
            </div>
            株式会社エンターテイン
          </a>
          <a
            href="https://www.jlg.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.flex_inner}
            style={{ textAlign: 'center' }}
          >
            <div className={style.cooperation_logo}>
              <img
                src="/assets/sustainability_cooperation04.png"
                alt="株式会社　ジェイトップ"
                className={style.cooperation_img}
              />
            </div>
            株式会社　ジェイトップ
          </a>
        </div>

        <div className={`${style.flex_wrapper} ${style.cooperation_wrapper}`}>
          <div className={style.flex_inner} style={{ textAlign: 'center' }}>
            <div className={style.cooperation_logo}>
              <img
                src="/assets/appicon_white.png"
                alt="鯵坂克哉"
                className={style.cooperation_img}
              />
            </div>
            鯵坂克哉
          </div>
          <div className={style.flex_inner} style={{ textAlign: 'center' }}>
            <div className={style.cooperation_logo}>
              <img
                src="/assets/appicon_white.png"
                alt="株式会社ミニマリスト"
                className={style.cooperation_img}
              />
            </div>
            株式会社ミニマリスト
          </div>
          <a
            href="https://tsfcm.jp"
            target="_blank"
            rel="noopener noreferrer"
            className={style.flex_inner}
            style={{ textAlign: 'center' }}
          >
            <div className={style.cooperation_logo}>
              <img
                src="/assets/sustainability_cooperation05.png"
                alt="Tech School for Change Makers「TSfCM」"
                className={style.cooperation_img}
              />
            </div>
            Tech School for Change Makers「TSfCM」
            <br />
            株式会社Fsharp
          </a>
          <a
            href="https://twitter.com/SNACK_Candy_o"
            target="_blank"
            rel="noopener noreferrer"
            className={style.flex_inner}
            style={{ textAlign: 'center' }}
          >
            <div className={style.cooperation_logo}>
              <img
                src="/assets/sustainability_cooperation06.png"
                alt="スナックキャンディ御徒町店"
                className={style.cooperation_img}
              />
            </div>
            スナックキャンディ御徒町店
          </a>
        </div>

        <div
          className={`${style.flex_wrapper} ${style.cooperation_wrapper}`}
          style={{ maxWidth: '500px' }}
        >
          <div className={style.flex_inner} style={{ textAlign: 'center' }}>
            <div className={style.cooperation_logo}>
              <img
                src="/assets/appicon_white.png"
                alt="正木商店"
                className={style.cooperation_img}
              />
            </div>
            正木商店
          </div>
          <div className={style.flex_inner} style={{ textAlign: 'center' }}>
            <div className={style.cooperation_logo}>
              <img
                src="/assets/appicon_white.png"
                alt="R65不動産"
                className={style.cooperation_img}
              />
            </div>
            R65不動産
          </div>
        </div>
      </div>
    </section>

    <Message />
  </>
)
