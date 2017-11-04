import React, { Component } from 'react';
import tomato from './tomato.png';
import './App.css';

class PomodoroTimer extends Component {
  constructor() {
    super();
    this.state = {
      timeElapsed: 0
    }
  }

  totalTime(timeOne, timeTwo) {
    return timeOne + timeTwo;
  }

  componentDidMount() {
    this.interval = setInterval(this.elapseTime.bind(this), 1000);
    this.setState({
      start: new Date(),
    })
  }

  componentWillUnMount() {
    clearInterval(this.interval)
  }

  elapseTime() {
    let timeElapsed = Math.floor((new Date() - this.state.start) / 1000);
    this.setState({
      timeElapsed: timeElapsed
    })

    if (this.state.timeElapsed >= this.props.workingTime * 60){
      alert('Time for a break!')
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
          <br/>There are {this.state.timeElapsed} secondes elapsed.
          <footer>
            <button className="btn btn-primary">Start</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default PomodoroTimer;
