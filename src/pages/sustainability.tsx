import Title from '../components/primary/title'
import style from '../styles/page.module.scss'

import Message from '../components/sections/message'

export default () => (
  <>
    <Title title="サスティナビリティ" description="🌍+❤️" imgSrc category />
    <div className={style.page} style={{ paddingBottom: 0 }}>
      <h2>溢れる使い捨て傘</h2>
      <p>
        現在国内で約8000万本消費されているビニール傘。
        <br />
        年間多くが半年以内で地球に埋め立てられ、 海に流され続けています。
        <br />
        日本人の一人あたりの傘所有本数、ビニール傘消費本数は
        <br />
        どちらも世界1位です。
      </p>
      <hr />
      <h2>傘を「シェア」する提案</h2>
      <p>
        この使い捨て文化を、
        <br />
        アイカサはみなさんと一緒に変えていきたいと考えています。
        <br />
        これまで個人が購入していた傘を 「シェア」することで、
        <br />
        余分な傘の製造・使い捨てを減らし、 持続可能な社会をつくっていきます。
        <br />
      </p>
    </div>
    <Message />
  </>
)
