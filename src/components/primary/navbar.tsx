import React from 'react'
import Link from 'next/link'

import style from './navbar.module.scss'

const links = [
  { href: '/sustainability', title: 'サスティナビリティ' },
  { href: '/news', title: 'ニュース' },
  { href: 'a', title: '法人様向け案内' },
  { href: 'a', title: 'お問い合わせ' },
]

interface IState {
  isToggleOn: boolean
}

class Nav extends React.Component<{}, IState> {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <nav
        role="navigation"
        aria-label="main navigation"
        className={
          this.state.isToggleOn
            ? `navbar is-info is-spaced ${style.navbar} ${style.active}`
            : `navbar is-info is-spaced ${style.navbar}`
        }
        style={{
          letterSpacing: '0',
          borderBottom: 'solid 1px white',
        }}
      >
        <div className="container">
          <div className={`navbar-brand ${style.navbar_brand}`}>
            <Link href="/">
              <a className={`navbar-item ${style.logo}`}>
                <img src="/assets/icon.svg" style={{ height: '30px' }} />
              </a>
            </Link>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar_menu"
              onClick={this.handleClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            id="navbar_menu"
            className={
              this.state.isToggleOn
                ? `${style.mobile} navbar-menu is-active`
                : `navbar-menu`
            }
          >
            <div className="navbar-end">
              {links.map((data, index) => {
                return (
                  <Link href={data.href}>
                    <a>
                      <div className={`navbar-item ${style.navbar_link}`}>
                        {data.title}
                      </div>
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
