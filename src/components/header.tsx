import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './header.module.css'

const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Blog', link: '/blog' },
  { label: 'Contact', link: '/contact' }
]

export default () => {
  const { asPath } = useRouter()

  return (
    <header className={styles.header}>
      <ul>
        {navItems.map(({ label, link }) => (
          <li key={label}>
            <Link href='[...slug]' as={link}>
              <a className={asPath === link ? 'active' : undefined}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
