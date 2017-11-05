import React, { Component } from 'react';
import tomato from './tomato.png';
import './App.css';
import moment from 'moment'

class PomodoroTimer extends Component {
  constructor() {
    super();
    this.state = {
      timeRemain: 3
    }
  }
  totalTime(timeOne, timeTwo) {
    return timeOne + timeTwo;
  }

  componentDidMount() {
    this.interval = setInterval(this.elapseTime.bind(this), 1000);
  }

  elapseTime() {
    var remain = this.state.timeRemain - 1
    this.setState({
      timeRemain: remain,
    })

    if (this.state.timeRemain == 0){
      clearInterval(this.interval)
      alert('Break!');
    }
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
          <br/>followed by rest of {this.props.restingTime} minutes.</p>
          <br/>For a total of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
          <br/>It remains {this.state.timeRemain} before the break.
          <footer>
            <button className="btn btn-primary">Start</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default PomodoroTimer;
