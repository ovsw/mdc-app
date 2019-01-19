import React from 'react'
import { MobileNavToggleContext } from 'src/layouts'
import { CSSTransition } from 'react-transition-group'

import Backdrop from 'src/components/Backdrop/Backdrop'

import styles from './SideDrawer.module.css'

const SideDrawer = props => (
  <>
    <nav className={styles.sideDrawer} style={{ animationDuration: '.3s' }}>
      {/* Side Drawer Conttent */}
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
      {/* Side Drawer Conttent */}
    </nav>

    {/* Backdrop */}
    <MobileNavToggleContext.Consumer>
      {({ mobileNavVisible, toggleMobileNav }) => (
        <CSSTransition
          in={mobileNavVisible}
          timeout={300}
          classNames={{
            enter: 'animated',
            enterActive: 'fadeIn',
            exit: 'animated',
            exitActive: 'fadeOut',
          }}
          unmountOnExit
        >
          <Backdrop onClick={toggleMobileNav} />
        </CSSTransition>
      )}
    </MobileNavToggleContext.Consumer>
  </>
)

export default SideDrawer
