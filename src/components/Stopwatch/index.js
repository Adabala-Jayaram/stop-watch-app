import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {timeInSeconds: 0}
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalId)
  }

  onClickStartBtn = () => {
    this.intervalId = setInterval(this.runClock, 1000)
  }

  runClock = () => {
    this.setState(prevState => ({timer: prevState.timer + 1}))
  }

  onClickStopBtn = () => {
    clearInterval(this.intervalId)
  }

  onClickResetBtn = () => {
    clearInterval(this.intervalId)
    this.setState({timeInSeconds: 0})
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const displayTime = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="stopwatch-bg-container">
        <div className="stopwatch-card-container">
          <h1 className="stopwatch-title">Stopwatch</h1>
          <div className="stopwatch-card">
            <div className="stopwatch-card-title-sec">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="watch-icon"
              />
              <h1 className="card-title">Timer</h1>
            </div>
            <h1 className="stopwatch-time">{displayTime}</h1>
            <div className="stopwatch-btn-sec">
              <button
                className="start-btn stopwatch-button"
                type="button"
                onClick={this.onClickStartBtn}
              >
                Start
              </button>
              <button
                className="stop-btn stopwatch-button"
                type="button"
                onClick={this.onClickStopBtn}
              >
                Stop
              </button>
              <button
                className="reset-btn stopwatch-button"
                type="button"
                onClick={this.onClickResetBtn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
