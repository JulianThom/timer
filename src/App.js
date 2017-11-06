import React, { Component } from 'react';
import tomato from './tomato.png';
import './App.css';
import moment from 'moment'

class PomodoroTimer extends Component {
  state = {
    minute: this.props.workingTime,
    second: this.props.second
 }

  componentDidMount() {
    this.interval = setInterval(this.remainTime.bind(this), 1000);
  }

  remainTime() {
    var remainSecond = this.state.second - 1
    this.setState({
      second: remainSecond,
    })

    if (this.state.second < 0) {
      var remainMinute = this.state.minute - 1
      this.setState({
        minute: remainMinute,
        second: this.props.second
      })
    }

    if (this.state.minute === 0 && this.state.second === 0){
      clearInterval(this.interval)
    }
  }

  totalTime(timeOne, timeTwo) {
    return timeOne + timeTwo;
  }

  render() {
    return (
      <div className="
        col-xs-4 col-sm-4 col-md-4 col-lg-4
        col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4
        wrapper-img">
        <div className="col-lg-12 wrapper-img">
          <img src={tomato}></img>
        </div>
        <div className="col-lg-12 wrapper-content">
          <p>This timer run for {this.props.workingTime} minutes,
            <br/>followed by rest of {this.props.restingTime} minutes.
            <br/>For a total of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
          </p>
          <br/>It remains <b>{this.state.minute <= 9 ? '0'+this.state.minute : this.state.minute}
            :{this.state.second <= 9 ? '0'+this.state.second : this.state.second}</b> before the break.
          <footer>
            <button className="btn btn-primary">Start</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default PomodoroTimer;
