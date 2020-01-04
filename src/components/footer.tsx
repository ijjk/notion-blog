import ExtLink from './ext-link'
import styles from '../styles/shared.module.css'

export default () => (
  <>
    <footer className={styles.footer}>
      Source code available{' '}
      <ExtLink
        href="https://github.com/ijjk/notion-backed-site"
        aria-label="link to source code"
      >
        here
      </ExtLink>
    </footer>
  </>
)
