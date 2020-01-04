import Lightning from './svgs/lightning'
import Jamstack from './svgs/jamstack'
import Wifi from './svgs/wifi'
import Lighthouse from './svgs/lighthouse'
import Plus from './svgs/plus'
import Notion from './svgs/notion'
import Pencil from './svgs/pencil'
import Scroll from './svgs/scroll'

const features = [
  {
    text: 'Blazing fast',
    icon: Lightning,
  },
  {
    text: 'JAMstack based',
    icon: Jamstack,
  },
  {
    text: 'Always available',
    icon: Wifi,
  },
  {
    text: 'Incremental SSG',
    icon: Plus,
  },
  {
    text: 'Edit via Notion',
    icon: Notion,
  },
  {
    text: 'Customizable',
    icon: Pencil,
  },
  {
    text: 'MIT Licensed',
    icon: Scroll,
  },
  {
    text: '100 Lighthouse',
    icon: Lighthouse,
  },
]

export default () => (
  <div className="features">
    {features.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {Icon && <Icon height={24} width={24} />}
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)
