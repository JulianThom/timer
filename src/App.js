import React, { Component } from 'react';
import tomato from './tomato.png';
import './App.css';
import moment from 'moment'

class PomodoroTimer extends Component {

  startWorkingTime = () => this.props.workingTime*60
  startRestingTime = () => this.props.restingTime*60

  state = {
    workingTime: this.startWorkingTime(),
    restingTime: this.startRestingTime(),
    disabled: false
  }

  reset() {
    this.setState({
      workingTime: this.startWorkingTime(),
      restingTime: this.startRestingTime(),
      disabled: false
    });
  }

  handleClickStart = () => {
    this.interval = setInterval(this.remainWorkingTime.bind(this), 1000)
    this.setState({
      disabled: true
    })
  }

  handleClickReset = () => {
    clearInterval(this.interval)
    this.reset()
  }

  remainWorkingTime = () => {
    let timeRemain = this.state.workingTime - 1
    this.setState({
      workingTime: timeRemain,
    })

    if (this.state.workingTime === 0) {
      clearInterval(this.interval)
      this.interval = setInterval(this.remainRestingTime.bind(this), 1000)
    }
  }

  remainRestingTime = () => {
    let timeRemain = this.state.restingTime - 1
    this.setState({
      restingTime: timeRemain,
    })

    if (this.state.restingTime === 0) {
      clearInterval(this.interval)
      this.reset()
      this.interval = setInterval(this.remainWorkingTime.bind(this), 1000)
      this.setState({
        disabled: true
      })
    }
  }

  totalTime = (timeOne, timeTwo) => timeOne + timeTwo

  render() {

    const formatedWorkingTime = moment(this.state.workingTime * 1000).format('mm:ss');
    const formatedRestingTime = moment(this.state.restingTime * 1000).format('mm:ss');
    const { disabled } = this.state

    return (
      <div className="
        col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4 wrapper">
        <div className="col-lg-12">
          <img src={tomato} alt="tomato" />
        </div>
        <div className="col-lg-12 wrapper-content">
          <p>This timer run for {this.props.workingTime} minutes,
            <br/>followed by rest of {this.props.restingTime} minutes.
            <br/>For a total of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
          </p>
          <h1>{formatedWorkingTime}</h1>
          <h1>{formatedRestingTime}</h1>
          <footer>
            <button
              className={`btn btn-primary ${disabled ? '' : 'active'}` }
              disabled={disabled ? "disabled" : ""}
              onClick={this.handleClickStart}>
              Start timer
            </button>
            <button
              className="btn btn-danger"
              onClick={ this.handleClickReset }>
              Reset timer
            </button>
          </footer>
        </div>
      </div>
    )
  }
}

export default PomodoroTimer;
