import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

import Section from '../components/primary/section'
import First from '../components/sections/first'

import NormalCard from '../components/cards/index_normal'
import HowToUseCard from '../components/cards/index_howtouse'
import Keypoint from '../components/cards/index_keypoint'
import UsecaseCard from '../components/cards/index_usecase'

//利用可能エリア
const regions = [
  { name: '関東', regions: ['東京', '神奈川', '千葉', '埼玉', '茨城'] },
  {
    name: '近畿',
    regions: ['大阪', '京都', '奈良', '兵庫'],
  },
  {
    name: '中国',
    regions: ['三重', '岡山'],
  },
  {
    name: '東海',
    regions: ['三重', '愛知'],
  },
  { name: '九州', regions: ['福岡'] },
]

export default () => (
  <>
    <First />
    <section
      className="separate gray"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="container">
        <h2>アイカサの特徴!</h2>
        <div className="columns">
          <NormalCard
            number="01"
            title="いつでもつかえて便利!"
            description="傘を持ち歩かない生活の提案! どこでも借りられて好きなところで返せる"
            imgSrc="/"
          />
          <NormalCard
            number="02"
            title="ビニール傘を買うより安い!"
            description="ビニール傘よりも安くて、折りたたみ傘よりも丈夫で便利！"
            imgSrc="/"
          />
          <NormalCard
            number="04"
            title="環境にやさしい、シェアエコノミー!"
            description="カサをシェアして、ビニール傘の使い捨てを解決！"
            imgSrc="/"
          />
        </div>
      </div>
    </section>
    <section className="section_right" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="grid">
        <div
          className="section_right_region_map"
          style={{ backgroundImage: "url('/assets/map.png')" }}
        ></div>
        <div className="section_right_content">
          <h2>スポットは日本全国に拡大中</h2>
          {regions.map((data, index) => {
            var region = data.regions.map((data, index) => {
              return <li key={index}>{data}</li>
            })
            return (
              <div className="section_right_region_list" key={index}>
                <h4>{data.name}</h4>
                <ul style={{ flexWrap: 'wrap' }}>{region}</ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    <section
      className="section_normal separate reverse"
      style={{ backgroundColor: '#f8f8f8', marginTop: '-100px' }}
    >
      <div className="container">
        <h2>様々なシーンで使えます！</h2>
        <div className="columns">
          <UsecaseCard title="駅からはじめる!" imgSrc="/" />
          <UsecaseCard title="オフィス・学校ではじめる!" imgSrc="/" />
          <UsecaseCard title="おうちではじめる!" imgSrc="/" />
        </div>
      </div>
    </section>

    <section className="section_center separate gray">
      <div className="container">
        <h2 className="center">アイカサのつかいかた!</h2>

        <HowToUseCard
          number="01"
          title="スポットをさがす"
          description="アイカサアプリを開いて、マップから現在地周辺のアイカサスポットを探しましょう!
スポットではカサをかりることができます!"
          imgSrc="/assets/app_mock.png"
        />
        <HowToUseCard
          number="02"
          title="スポットでかりる"
          description="アイカサアプリのマップにある「かりる」を押して、カサをかりる画面へ！
かざすだけでかりることもできます!"
          imgSrc="/assets/rental.png"
        />
        <HowToUseCard
          number="03"
          title="カサをつかう!"
          description="ご自由にカサをお使いください！"
          imgSrc="/assets/use.png"
        />
        <HowToUseCard
          number="04"
          title="カサをスポットに返す"
          description="ご自由にカサをお使いください！"
          imgSrc="/assets/return.png"
        />
      </div>
    </section>

    <section
      className="section_center separate gray"
      style={{ backgroundColor: '#f8f8f8' }}
    >
      <div className="container" style={{ maxWidth: '1200px' }}>
        <p className="h2_description">利用者にきいた</p>
        <h2 className="center">アイカサのココが便利!</h2>

        <div className="columns">
          <Keypoint
            title="急に雨が降ってきたときに便利!"
            description="急に雨が降ってきたとき、もうビニール傘は買わなくて大丈夫！
アイカサがあれば、24時間 70円でカサをかりることができるので、経済的にもうれしい！"
          />
          <Keypoint
            title="天気を気にせず、手ぶらでお出かけ!"
            description="お近くにアイカサスポットがあれば、傘をわざわざ持っていかなくても大丈夫！雨が降ってきたときに、さっとアイカサスポットからカサを借りて、スマートに暮らそう!"
          />
        </div>
      </div>
    </section>

    <section className="section_center" style={{ backgroundColor: '#03abd8' }}>
      <div className="contaienr">
        <h2 className="center title_dark">ダウンロード</h2>
        <div className="download">
          <p>今すぐダウンロードしてはじめましょう!</p>
          <div className="download_link">
            <img
              className="appicon"
              src="data:image/jpeg;base64,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"
            />
            <div className="download_link_store">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
