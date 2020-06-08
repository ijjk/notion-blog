import Head from 'next/head'
import Title from '../components/primary/title'
import style from '../styles/page.module.scss'

import Message from '../components/sections/message'

export default () => (
  <>
    <Head>
      <title>お問い合わせ | アイカサ</title>
      <meta property="og:title" content="お問い合わせ" />
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
      title="お問い合わせ"
      description
      imgSrc="/assets/ikasa_background.png"
      category
    />
    <div className={style.page}>
      <p>
        アイカサに興味を持っていただき、誠にありがとうございます。
        <br />
        私たちは、新しいことが大好きです。
        <br />
        様々な提携希望、ここにスポットを置いて欲しい、取材したい等、大歓迎です！
        <br />
        下記のお問い合わせよりお待ちしております。
      </p>

      <hr />
      <h3>ご利用者様お問い合わせ</h3>
      <p>
        お問い合わせにつきましては、アイカサお問い合わせLINE窓口からご連絡ください！
      </p>
      <div
        style={{
          width: '100%',
          padding: '10px',
          border: '2px solid whitesmoke',
          textAlign: 'center',
          borderRadius: '10px',
          marginTop: '20px',
        }}
      >
        <a href="https://lin.ee/ekNY9Zk">お問い合わせLINEアカウント</a>
      </div>

      <hr />

      <h3>法人様お問い合わせ</h3>
      <p>
        アイカサに関するお問い合わせは、下記のメールアドレスよりお願いいたします。
      </p>
      <div
        style={{
          width: '100%',
          padding: '10px',
          border: '2px solid whitesmoke',
          textAlign: 'center',
          borderRadius: '10px',
          marginTop: '20px',
        }}
      >
        info@i-kasa.com
      </div>

      {/* <form>
        <div className="field">
          <label className="label">お問い合わせ種別</label>
          <div className="control">
            <div className="select">
              <select style={{ width: '100%' }}>
                <option>未選択</option>
                <option>取材</option>
                <option>提携</option>
                <option>その他</option>
              </select>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
          }}
        >
          <div className="field">
            <label className="label">お名前 (性)</label>
            <div className="control">
              <input className="input" type="text" placeholder="" />
            </div>
          </div>
          <div className="field">
            <label className="label">お名前 (名)</label>
            <div className="control">
              <input className="input" type="text" placeholder="" />
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">会社名</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="株式会社Narture Innovation Group"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">メールアドレス</label>
          <div className="control">
            <input className="input" type="text" placeholder="" />
          </div>
        </div>
        <div className="field">
          <label className="label">電話番号</label>
          <div className="control">
            <input className="input" type="text" placeholder="" />
          </div>
        </div>
        <div className="field">
          <label className="label">住所(都道府県)</label>
          <div className="control">
            <input className="input" type="text" placeholder="東京都" />
          </div>
        </div>
        <div className="field">
          <label className="label">住所(都道府県以降)</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="渋谷区●-●-● ●●ビル2階"
            />
          </div>
        </div>
        <hr />
        <div className="field">
          <label className="label">お問い合わせ内容</label>
          <div className="control">
            <textarea className="textarea" placeholder=""></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="button is-primary is-fullwidth"
          style={{ fontWeight: 'bold', marginTop: '50px' }}
        >
          送信
        </button>
      </form> */}
    </div>
  </>
)
