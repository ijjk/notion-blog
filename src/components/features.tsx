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
    text: 'Too many papers on his desk',
    icon: Jamstack,
  },
  {
    text: 'Spends too much time online',
    icon: Plus,
  },
  {
    text: 'May be a living WiFi hotspot',
    icon: Wifi,
  },
  {
    text: 'Accidentally shocks himself too often',
    icon: Lightning,
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
