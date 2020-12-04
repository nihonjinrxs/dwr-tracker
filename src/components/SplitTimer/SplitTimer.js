import React from 'react';

import './SplitTimer.css';

import resetButton8bit from './assets/reset-button-8bit.png';
import pauseButton8bit from './assets/pause-button-8bit.png';
import startButton8bit from './assets/start-button-8bit.png';

class SplitTimer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      keymap: props.keymap,
      running: false,
      paused: false,
      startOffsetSeconds: props.startoffset || 0,
      currentTime: props.startOffset || 0,
      lastUpdatedAt: window.performance.now()
    };
  }

  componentDidMount() {
    this.updateLoop = setInterval(() => this.updateTimerValue(), 15);
  }

  componentWillUnmount() {
    clearInterval(this.updateLoop);
  }

  updateTimerValue() {
    const elapsed = window.performance.now() - this.state.lastUpdatedAt;
    this.setState({ lastUpdatedAt: window.performance.now() });
    if (this.state.running) {
      this.setState({ currentTime: this.state.currentTime + elapsed });
    }
  }

  render() {
    return (
      <div className="timer" onKeyDown={(ev) => this.handleKeyDown(ev)}>
        <button
          id="timer-reset"
          onClick={(ev) => this.resetHandler(ev)}
        >
          <img src={resetButton8bit} alt="Reset Timer"></img>
        </button>
        {this.displayTime()}
        <button
          id="timer-start-pause"
          className={this.state.running ? 'pause' : 'start'}
          onClick={(ev) => this.startPauseHandler(ev)}
        >
          <img
            src={this.state.running ? pauseButton8bit : startButton8bit}
            alt={this.state.running ? 'pause' : 'start'}
          ></img>
        </button>
      </div>
    );
  }

  handleKeyDown (event) {
    const cmd = this.state.keymap[event.key];
    if (cmd && ['start', 'pause', 'reset'].includes(cmd)) {
      this.trigger(cmd);
    }
  }

  startPauseHandler(event) {
    if (this.state.running) { this.trigger('pause'); }
    else { this.trigger('start'); }
  }

  resetHandler(event) {
    this.trigger('reset');
  }

  trigger (cmd) {
    switch (cmd) {
      case 'start':
        this.startTimer();
        return;
      case 'pause':
        this.pauseTimer();
        return;
      case 'reset':
        this.resetTimer();
        return;
      default:
        return;
    }
  }

  startTimer() {
    this.setState({
      running: true,
      paused: false
    });
  }

  pauseTimer() {
    this.setState({
      running: false,
      paused: true
    });
  }

  resetTimer() {
    this.setState({
      currentTime: this.state.startOffsetSeconds,
      running: false,
      paused: false
    })
  }

  displayTime () { // TODO: This is not doing what it's supposed to. Why?
    const t = this.state.currentTime;
    const m = 1000;
    const hours = Math.floor(t / (m * 60 * 60)).toFixed(0).padStart(2, '0');
    const minutes = (
      Math.floor(t / (m * 60)) - (hours * 60)
    ).toFixed(0).padStart(2, '0');
    const seconds = (
      Math.floor(t / m) - (hours * 60 * 60) - (minutes * 60)
    ).toFixed(0).padStart(2, '0');
    const millis = (
      Math.floor(t) - (hours * 60 * 60 * m) - (minutes * 60 * m) - (seconds * m)
    ).toFixed(0).padStart(3, '0');
    return (
      <p className="time">
        <span className="hours">{hours}</span>:
        <span className="minutes">{minutes}</span>:
        <span className="seconds">{seconds}</span>.
        <span className="millis">{millis}</span>
      </p>
    );
  }
}

export default SplitTimer;
