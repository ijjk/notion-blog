import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from './header.module.css'

const navItems: { label: string, href?: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
]

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} My Notion Site</title>
      </Head>
      <ul>
        {navItems.map(({ label, href }) => (
          <li key={label}>
            <Link href={href}>
              <a className={
                pathname === href ? 'active' : undefined
              }>
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
