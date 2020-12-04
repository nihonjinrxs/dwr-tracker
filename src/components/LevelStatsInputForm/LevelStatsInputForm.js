import React from 'react';

import './LevelStatsInputForm.css';

class LevelStatsInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.resetState(0);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ?
      target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setLevelStats(this.state);
    this.setState(this.resetState(this.state.level));
    this.stInput.focus();
  }

  resetState(currentLevel) {
    return {
      level: currentLevel + 1,
      st: '',
      ag: '',
      hp: '',
      mp: '',
    }
  }

  render() {
    return (
      <form
        id="level-stats-input"
        onSubmit={(ev) => this.handleSubmit(ev)}
      >
        <label>LV
          <input id="lv-input"
            ref={(input) => this.lvInput = input}
            placeholder="LEVEL"
            name="level"
            type="number"
            value={this.state.level}
            onChange={(ev) => this.handleChange(ev)}
          />
        </label>
        <label>ST
          <input id="st-input"
            ref={(input) => this.stInput = input}
            placeholder="STRENGTH"
            name="st"
            type="number"
            value={this.state.st}
            onChange={(ev) => this.handleChange(ev)}
            autoFocus={true}
          />
        </label>
        <label>AG
          <input id="ag-input"
            ref={(input) => this.agInput = input}
            placeholder="AGILITY"
            name="ag"
            type="number"
            value={this.state.ag}
            onChange={(ev) => this.handleChange(ev)}
          />
        </label>
        <label>HP
          <input id="hp-input"
            ref={(input) => this.hpInput = input}
            placeholder="HITS"
            name="hp"
            type="number"
            value={this.state.hp}
            onChange={(ev) => this.handleChange(ev)}
          />
        </label>
        <label>MP
          <input id="mp-input"
            ref={(input) => this.mpInput = input}
            placeholder="MAGIC"
            name="mp"
            type="number"
            value={this.state.mp}
            onChange={(ev) => this.handleChange(ev)}
          />
        </label>
        <button type="submit" value="Submit">
          Record Level
        </button>
      </form>
    );
  }
}

export default LevelStatsInputForm;
