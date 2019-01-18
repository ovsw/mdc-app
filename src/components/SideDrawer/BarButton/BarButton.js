import React from 'react'
import { relative } from 'path'

class BarButton extends React.Component {
  constructor(props) {
    super(props)

    const { onClick } = this.props

    this.keyUpHandler = () => {
      onClick()
    }

    this.getTransformValue = (isOpen, basePos, rotate, halfHeight) =>
      `translate3d(0,${isOpen ? `${halfHeight}px` : `${basePos}px`},0) rotate(${isOpen ? `${rotate}deg` : '0'})`
  }

  render() {
    const { props } = this

    const width = props.width || 35
    const height = props.height || 20

    const isOpen = props.isActive || false
    const strokeWidth = props.strokeWidth || 2
    const halfStrokeWidth = Math.round(strokeWidth / 2)
    const animationDuration = props.animationDuration || 0.4
    const borderRadius = props.radius || 0
    const padding = parseInt(props.padding, 10) || 0

    const finalHeight = parseInt(height, 10) + parseInt(padding, 10) * 2
    const halfHeight = Math.round(finalHeight / 2)
    const finalWidth = parseInt(width, 10) + parseInt(padding, 10) * 2

    const containerStyle = {
      width: `${width}px`,
      height: `${finalHeight}px`,
      position: 'relative',
      zIndex: '50',
    }
    const baseStyle = {
      display: 'block',
      height: `${strokeWidth}px`,
      width: '100%',
      background: props.color || '#fff',
      transitionTimingFunction: 'ease',
      transitionDuration: `${animationDuration}s`,
      transformOrigin: 'center',
      position: 'absolute',
      marginTop: -halfStrokeWidth,
      borderRadius: `${borderRadius}px`,
    }
    const firstLineStyle = {
      transform: this.getTransformValue(isOpen, padding, '45', halfHeight),
      background: isOpen ? 'white' : props.color,
    }
    const secondLineStyle = {
      transitionTimingFunction: 'ease-out',
      transitionDuration: `${animationDuration / 4}s`,
      opacity: isOpen ? 0 : 1,
      top: halfHeight,
    }
    const lowerBarPos = finalHeight - padding
    const thirdLineStyle = {
      transform: this.getTransformValue(isOpen, lowerBarPos, '-45', halfHeight),
      background: isOpen ? 'white' : props.color,
    }

    return (
      <div
        className="focus:outline-none"
        style={containerStyle}
        onClick={props.onClick}
        role="button"
        onKeyUp={this.handleKeyUp}
        tabIndex="-1"
      >
        <span style={Object.assign({}, baseStyle, firstLineStyle)} />
        <span style={Object.assign({}, baseStyle, secondLineStyle)} />
        <span style={Object.assign({}, baseStyle, thirdLineStyle)} />
      </div>
    )
  }
}

export default BarButton
