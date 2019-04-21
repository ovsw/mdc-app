import React from 'react'
import { Link } from 'gatsby'

import styles from './MobileNavDropDown.module.css'

class MobileNavDropDown extends React.Component {
  constructor(props) {
    super(props)

    this.toggleSubMenu = () => {
      this.setState(state => ({ subMenuVisible: !state.subMenuVisible }))
    }

    this.state = {
      subMenuVisible: false,
    }
  }

  render() {
    const { menuTitle, menuModel, toggleMobileNav } = this.props
    const { subMenuVisible } = this.state

    return (
      <li className={styles.mainItem}>
        <a
          className="cursor-pointer font-bold"
          onTouchStart={this.toggleSubMenu}
          onKeyUp={this.handleKeyUp}
          role="link"
          tabIndex="-1"
        >
          {menuTitle}
        </a>

        <ul className={subMenuVisible ? styles.subMenu : `hidden`}>
          {menuModel.map(item => (
            <li key={item.url}>
              {item.url.indexOf('https') !== 0 ? (
                <Link to={item.url} onClick={toggleMobileNav}>
                  {item.title}
                </Link>
              ) : (
                <a href={item.url} onClick={toggleMobileNav} rel="noopener noreferrer" target="_blank">
                  {item.title}
                </a>
              )}
              {item.children !== undefined && item.children.length > 0 && (
                <ul className="list-reset">
                  {item.children.map(child => (
                    <li key={child.url}>
                      <Link to={child.url} onClick={toggleMobileNav}>
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </li>
    )
  }
}

export default MobileNavDropDown
