import React from 'react'
import { Link } from 'gatsby'

import styles from './Megamenu.module.css'

class Megamenu extends React.Component {
  constructor(props) {
    super(props)

    this.toggleMegaMenu = () => {
      this.setState(state => ({ megaMenuVisible: !state.megaMenuVisible }))
    }

    this.showMenu = () => {
      clearTimeout(this.menuTimeout)
      this.setState({ megaMenuVisible: true })
    }
    this.hideMenu = () => {
      this.menuTimeout = setTimeout(() => {
        this.setState({ megaMenuVisible: false })
      }, 50)
    }

    this.state = {
      megaMenuVisible: false,
    }
  }

  render() {
    const { menuTitle, menuModel } = this.props
    const { megaMenuVisible } = this.state

    return (
      <li className={styles.mainItem}>
        <a
          className="cursor-pointer font-bold py-6 px-8 mx-2 xl:mx-6 hover:text-green-dark"
          onTouchStart={this.toggleMegaMenu}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          onKeyUp={this.handleKeyUp}
          role="link"
          tabIndex="-1"
        >
          {menuTitle}
        </a>
        <div
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          className={megaMenuVisible ? styles.megaMenu : `hidden`}
          ref={megaMenuWrapper => {
            this._megaMenuWrapper = megaMenuWrapper
          }}
        >
          <div className="container mx-auto flex justify-center">
            {menuModel.map((column, index) => (
              <ul className={`${styles.menuColumn}`} key={index}>
                {column.map((item, key) => (
                  <li key={key}>
                    {item.url.indexOf('https') !== 0 ? (
                      <Link to={item.url}>{item.title}</Link>
                    ) : (
                      <a href={item.url} rel="noopener noreferrer" target="_blank">
                        {item.title}
                      </a>
                    )}
                    {item.children != undefined && item.children.length > 0 && (
                      <ul className="list-reset">
                        {item.children.map((child, key) => (
                          <li key={key}>
                            <a to={child.url}>{child.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </li>
    )
  }
}

export default Megamenu
