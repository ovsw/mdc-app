import React from 'react'

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

    console.log(toggleDatesRatesOverlay)

    return (
      <div
        className="container mx-auto 
      flex flex-col md:flex-row  
      py-6 px-8 sm:mt-20 sm:mb-4 
      bg-green-brand text-white font-primary justify-between align-middle"
        style={{ boxShadow: 'inset -5px 0 10px rgba(51, 50, 15, .23)' }}
      >
        <div className="flex flex-auto align-middle lg:justify-center mb-6  md:mb-0">
          <span className="mr-2  text-3xl text-right leading-tight inline-block font-bold text-yellow-brand-light text-shadow-blurry-green">
            {days} {days === 1 ? 'Day ' : 'Days '}
          </span>{' '}
          <span className="flex items-center text-xl pl-2 border-grey-lighter border-l-2 md:pt-0 lg:pb-1 text-shadow-blurry-green">
            <span>
              to <span className="text-yellow-brand-light">Summer Camp</span> Opening
            </span>
          </span>
        </div>
        <div className="flex-auto flex justify-center">
          <button className="btn btn-white-border" type="button" onClick={toggleDatesRatesOverlay}>
            Enroll Now!
          </button>
        </div>
      </div>
    )
  }
}

export default Countdown