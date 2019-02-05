import React from 'react'

class Backdrop extends React.Component {
  constructor(props) {
    super(props)

    const { onClick } = this.props

    this.keyUpHandler = () => {
      onClick()
    }
  }

  render() {
    const { onClick } = this.props

    return (
      <div
        className="fixed h-full pin w-full"
        style={{ zIndex: '3', backgroundColor: 'rgba(0,0,0,0.5)', animationDuration: '.3s' }}
        onClick={onClick}
        onKeyUp={this.handleKeyUp}
        role="button"
        tabIndex="-1"
      />
    )
  }
}

export default Backdrop
