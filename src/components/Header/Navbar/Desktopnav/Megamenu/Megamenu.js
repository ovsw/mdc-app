import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'
import { Link } from 'gatsby'

import styles from './Megamenu.module.css'

const ColumnsContainer = styled.div`
  ${tw`mx-auto flex`};
  ${media.lg`max-width: 1200px`};
  justify-content: ${props => (props.menuTitle === 'Staff' ? 'flex-end' : 'flex-start')};
`

class Megamenu extends React.Component {
  constructor(props) {
    super(props)

    const { closeAllOverlays } = props

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

    this.onNavClick = () => {
      this.hideMenu()
      closeAllOverlays()
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
          className="cursor-pointer font-bold py-6 px-8 mx-2 xl:mx-6 hover:text-green-brand-light"
          onTouchStart={this.toggleMegaMenu}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          role="link"
          tabIndex="-1"
        >
          {menuTitle}
        </a>
        <div
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          className={megaMenuVisible ? styles.megaMenu : `hidden`}
        >
          <ColumnsContainer menuTitle={menuTitle}>
            {menuModel.map((column, index) => (
              <ul className={`${styles.menuColumn}`} key={index}>
                {column.map((item, key) => (
                  <li key={key}>
                    {item.url.indexOf('https') !== 0 ? (
                      <Link to={item.url} onClick={this.onNavClick}>
                        {item.title}
                      </Link>
                    ) : (
                      <a href={item.url} onClick={this.onNavClick} rel="noopener noreferrer" target="_blank">
                        {item.title}
                      </a>
                    )}
                    {item.children != undefined && item.children.length > 0 && (
                      <ul className="list-reset">
                        {item.children.map((child, key) => (
                          <li key={key}>
                            <Link to={child.url} onClick={this.onNavClick}>
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </ColumnsContainer>
        </div>
      </li>
    )
  }
}

export default Megamenu
