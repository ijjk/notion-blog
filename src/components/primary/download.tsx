export default () => {
  return (
    <section
      id="start"
      className="section_center"
      style={{ backgroundColor: '#03abd8' }}
    >
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2 className="center title_dark">アイカサを使ってみる!</h2>
        <div style={{ marginBottom: '100px' }}>
          <div className="download_link">
            <img className="appicon" src="/assets/appicon.jpg" />
          </div>
          <p
            style={{
              marginTop: '20px',
              color: 'white',
              textAlign: 'center',
              fontSize: '1.5rem',
            }}
          >
            アイカサアプリは6月上旬配信予定!
          </p>
        </div>
        <div className="download">
          <div>
            <h3>横浜・東京・大宮エリア</h3>
            <p className="app">
              現在システム入れ替えのため、サービスを停止しています。
            </p>
            <div className="download_link">
              {/* <img className="appicon" src="/assets/appicon.jpg" /> */}
              {/* <div className="download_link_store">
              <div className="download_link_store_img">
                <div>
                  <img src="/assets/appstore.svg" height="65px" />
                  <img src="/assets/playstore.svg" height="65px" />
                </div>
              </div>
              <div className="download_link_store_legal">
                Apple および Apple ロゴは米国その他の国で登録された Apple Inc.
                の商標です。App Store は Apple Inc. のサービスマークです。
                <br />
                Google Play および Google Play ロゴは Google LLC の商標です。
              </div>
            </div> */}
            </div>
          </div>
          <div>
            <h3>福岡・岡山・水戸エリア</h3>
            <p className="app">LINEからご使用になれます!</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <a
                className="button is-white"
                href="https://peraichi.com/landing_pages/view/ryggh"
                style={{ marginRight: '10px', marginBottom: '10px' }}
              >
                使い方詳細
              </a>
              <a
                className="button is-success"
                href="https://liff.i-kasa.com/login?prevurl=https://lin.ee/q43e0fr&no=1"
                style={{ border: '1px solid white' }}
              >
                LINE新規登録
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
