import React, { Component } from 'react';
import logo from './logo.svg';
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
      <div>This timer run for {this.props.workingTime} minutes, followed by rest of {this.props.restingTime} minutes.
        <br/>For a total of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
        <br/>There are {this.state.timeElapsed} secondes elapsed.
      </div>
    )
  }
}

export default PomodoroTimer;
