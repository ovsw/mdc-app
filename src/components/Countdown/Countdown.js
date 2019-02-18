import React from 'react'
import Button from 'src/components/common/Button'

class Countdown extends React.Component {
  calculateCountdown(endDate) {
    const diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      days: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
    }
    return timeLeft
  }

  constructor(props) {
    super(props)

    this.state = {
      days: 0,
    }
  }

  componentDidMount() {
    // update every second
    const {
      props: { date },
    } = this

    this.interval = setInterval(() => {
      const countdownDate = this.calculateCountdown(date)
      if (countdownDate) {
        this.setState(countdownDate)
      } else {
        this.stop()
      }
    }, 1000)
  }

  componentWillUnmount() {
    this.stop()
  }

  stop() {
    clearInterval(this.interval)
  }

  render() {
    const {
      state: { days },
      props: { toggleDatesRatesOverlay },
    } = this

    return (
      <>
        <div className="flex flex-col md:flex-row justify-between align-middle">
          <div className="flex flex-auto align-middle lg:justify-center mb-6  md:mb-0">
            <span className="mr-2 text-3xl text-right leading-tight inline-block font-bold text-yellow-brand-light text-shadow-blurry-green">
              {days} {days === 1 ? 'Day ' : 'Days '}
            </span>{' '}
            <span className="flex items-center text-xl pl-2 border-grey-lighter border-l-2 md:pt-0 lg:pb-1 text-shadow-blurry-green">
              <span>
                to <span className="text-yellow-brand-light">Summer Camp</span> Opening
              </span>
            </span>
          </div>
          <div className="flex-auto flex justify-center">
            <Button primary light onClick={toggleDatesRatesOverlay}>
              Enroll Now!
            </Button>
          </div>
        </div>
      </>
    )
  }
}

export default Countdown
