import React from 'react'
import ReactDOM from 'react-dom'

import styles from './AccordionPanel.module.css'

class AccordionPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      const height = this.panelInner.scrollHeight
      this.setState({
        height,
      })
    }, 333)
  }

  render() {
    const { label, content, activeTab, index, activateTab } = this.props
    const { height } = this.state
    const isActive = activeTab === index
    const innerStyle = {
      height: `${isActive ? height : 0}px`,
    }

    return (
      <div className={styles.panel} role="tabpanel" aria-expanded={isActive}>
        <button type="button" className={styles.panel__label} role="tab" onClick={activateTab}>
          {label}
        </button>
        <div
          className={styles.panel__inner}
          style={innerStyle}
          aria-hidden={!isActive}
          ref={node => {
            this.panelInner = node
          }}
        >
          <p className={styles.panel__content}>{content}</p>
        </div>
      </div>
    )
  }
}

export default AccordionPanel
