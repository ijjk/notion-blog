import Head from 'next/head'
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
  {
    name: '関東',
    regions: ['東京', '神奈川', '埼玉', '茨城'],
  },
  { name: '九州', regions: ['福岡'] },
  { name: '中国・四国', regions: ['岡山'] },
]

export default () => (
  <>
    <Head>
      <title>アイカサ | カサのシェアリングサービス</title>
      <meta property="og:title" content="アイカサ" />
      <meta property="og:image" content="https://i-kasa.com/ogp.jpg" />
      <meta
        property="description"
        content="カサはシェアする時代へ。カサのシェアリングサービス「アイカサ」は使い捨てのような傘の在り方を一新します！"
      />
      <meta
        property="og:description"
        content="カサはシェアする時代へ。カサのシェアリングサービス「アイカサ」は使い捨てのような傘の在り方を一新します！"
      />
      <meta property="og:url" content="https://i-kasa.com" />
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
        content="アイカサ | カサのシェアリングサービス"
      />
      <meta data-hid="og:locale" property="og:locale" content="ja_JP" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
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
            imgSrc="/assets/feature_1.svg"
          />
          <NormalCard
            number="02"
            title="ビニール傘を買うより安い!"
            description="24時間70円で使えるので、ビニール傘より安く、折りたたみ傘よりも丈夫で便利！"
            imgSrc="/assets/feature_2.svg"
          />
          <NormalCard
            number="03"
            title="環境にやさしい、シェアエコノミー!"
            description="カサをシェアして、ビニール傘の使い捨てを解決！"
            imgSrc="/assets/feature_3.svg"
          />
        </div>
      </div>
    </section>
    <section
      className="section_right"
      style={{ backgroundColor: '#f8f8f8', paddingBottom: '20px' }}
    >
      <div className="grid">
        <div
          className="section_right_region_map"
          style={{ backgroundImage: "url('/assets/map.svg')" }}
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
          <p style={{ color: 'gray', fontSize: '80%' }}>
            現在福岡・水戸エリアにつきましては、首都圏・岡山エリアとの互換性がありません。
          </p>
        </div>
      </div>
    </section>
    <iframe
      src="https://ikasa-test.info/kasa_share_spot_corporate/index.html"
      style={{ width: '100%', height: '500px' }}
    ></iframe>
    <section
      className="section_normal separate reverse"
      style={{
        backgroundColor: '#f8f8f8',
        paddingTop: '50px',
        marginTop: '-5px',
      }}
    >
      <div className="container">
        <h2>様々なシーンで使えます！</h2>
        <div className="columns">
          <UsecaseCard
            title="駅からはじめる!"
            imgSrc="/assets/use_station.jpg"
          />
          <UsecaseCard
            title="オフィス・学校ではじめる!"
            imgSrc="/assets/use_office.png"
          />
          <UsecaseCard
            title="おうちではじめる!"
            imgSrc="/assets/use_home.jpg"
          />
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
          description="目的の場所についたら、近くのアイカサスポットでカサをかえしましょう!
お近くにアイカサスポットがあれば、カサを持って歩かなくても大丈夫!"
          imgSrc="/assets/return.png"
        />
      </div>
    </section>

    <section
      className="section_center separate gray"
      style={{ backgroundColor: '#f8f8f8', paddingBottom: '0px' }}
    >
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2>利用料金</h2>
        <img src="/assets/fee.png" alt="アイカサ利用料金" />
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
  </>
)
