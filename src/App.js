import React, { Component } from 'react';
import tomato from './tomato.png';
import './App.css';
import moment from 'moment'

class PomodoroTimer extends Component {

  startTime = () => this.props.workingTime * 60

  state = {
    time: this.startTime(),
    disabled: false,
  }

  handleClickStart = () => {
    this.interval = setInterval(this.remainTime.bind(this), 1000)
    this.setState({
      disabled: true
    })
  }

  handleClickReset = () => {
    clearInterval(this.interval)
    this.setState({
      time: this.startTime(),
      disabled: false,
    })
  }

  remainTime = () => {
    // si timeBreak- === a
    let timeRemain = this.state.time - 1
    this.setState({
      time: timeRemain,
    })
    console.log(this.state.time);
  }

  totalTime = (timeOne, timeTwo) => timeOne + timeTwo

  render() {

    const formatedTime = moment(this.state.time * 1000).format('mm:ss');

    const { disabled } = this.state


    return (
      <div className="
        col-xs-4 col-sm-4 col-md-4 col-lg-4
        col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4
        wrapper-img">
        <div className="col-lg-12 wrapper-img">
          <img src={tomato} alt="tomato" />
        </div>
        <div className="col-lg-12 wrapper-content">
          <p>This timer run for {this.props.workingTime} minutes,
            <br/>followed by rest of {this.props.restingTime} minutes.
            <br/>For a total of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
          </p>
          <br/>It remains <b>{formatedTime}</b> before the break.
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
