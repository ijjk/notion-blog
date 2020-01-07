import Lightning from './svgs/lightning'
import Jamstack from './svgs/jamstack'
import Wifi from './svgs/wifi'
import Lighthouse from './svgs/lighthouse'
import Plus from './svgs/plus'
import Notion from './svgs/notion'
import Edit from './svgs/edit'
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
    text: 'Customizable',
    icon: Edit,
  },
  {
    text: 'Incremental SSG',
    icon: Plus,
  },
  {
    text: 'MIT Licensed',
    icon: Scroll,
  },
  {
    text: 'Edit via Notion',
    icon: Notion,
  },
  {
    text: 'Great scores',
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
