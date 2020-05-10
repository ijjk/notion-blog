export default () => {
  return (
    <section className="section_center" style={{ backgroundColor: '#03abd8' }}>
      <div className="contaienr">
        <h2 className="center title_dark">ダウンロード</h2>
        <div className="download">
          <p>5月下旬より配信開始予定</p>
          <div className="download_link">
            <img className="appicon" src="/assets/appicon.jpg" />
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
      </div>
    </section>
  )
}
