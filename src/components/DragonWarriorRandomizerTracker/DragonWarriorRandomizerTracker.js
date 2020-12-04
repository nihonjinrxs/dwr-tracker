import React from 'react';

import './DragonWarriorRandomizerTracker.css';

import TrackerTitle from '../TrackerTitle/TrackerTitle';
import TrackerNavigation from '../TrackerNavigation/TrackerNavigation';
import SplitTimer from '../SplitTimer/SplitTimer';
import ItemsTrackerPane from '../ItemsTrackerPane/ItemsTrackerPane';
import ChecksTrackerPane from '../ChecksTrackerPane/ChecksTrackerPane';
import StatsTrackerPane from '../StatsTrackerPane/StatsTrackerPane';
import MapsTrackerPane from '../MapsTrackerPane/MapsTrackerPane';

class DragonWarriorRandomizerTracker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedPane: 0,
      itemStates: {
        weapons: 0, armor: 0, shields: 0, scale: 0, ring: 0, necklace: 0,
        flute: 0, keys: 0, token: 0, gps: 0, harp: 0, staff: 0, stones: 0,
        rainbow_drop: 0, ball_of_light: 0
      },
      checkStates: {},
      searchState: {},
      coordinates: {},
      playerCharacterGender: 'male',
      currentLevel: 1,
      levels: [],
      spells: []
    };
    this.navItems = [
      {
        paneIndex: 0,
        imageUrl: '/images/navigation/dw1_weapon.png',
        title: 'Items'
      },
      {
        paneIndex: 1,
        imageUrl: '/images/navigation/dw1-chest.png',
        title: 'Checks'
      },
      {
        paneIndex: 2,
        imageUrl: '/images/navigation/dw1-hero-swordshield.png',
        title: 'Stats'
      },
      {
        paneIndex: 3,
        imageUrl: '/images/navigation/dw1-cave-32.png',
        title: 'Maps'
      }
    ];
    this.navHandler = (paneIndex) => {
      this.setState({ ...this.state, selectedPane: paneIndex })
    };
    this.keymap = props.keymap;
  }

  render () {
    return (
      <div className="dwr-tracker">
        <div>
          <TrackerTitle></TrackerTitle>
          <SplitTimer keymap={this.keymap}></SplitTimer>
        </div>
        {this.getTrackerPane()}
        <TrackerNavigation
          selectedPane={this.state.selectedPane}
          handler={this.navHandler}
          navItems={this.navItems}
        ></TrackerNavigation>
      </div>
    )
  }

  getTrackerPane () {
    switch (this.state.selectedPane) {
      case 0:
        return <ItemsTrackerPane
          characterGender={this.state.playerCharacterGender}
          itemStates={this.state.itemStates}
          updateItemStates={(itemKey, index) => {
            const stateObj = {};
            stateObj[itemKey] = index;
            console.log('updating now', stateObj);
            this.setState({ stateObj });
          }}
        />;
      case 1:
        return <ChecksTrackerPane />;
      case 2:
        return <StatsTrackerPane
          currentLevel={this.state.currentLevel}
          levels={this.state.levels}
          spells={this.state.spells}
          updateLevels={(levels) => this.setState({ levels })}
          updateCurrentLevel={(currentLevel) => this.setState({ currentLevel })}
          updateSpells={(spells) => this.setState({ spells })}
        />;
      case 3:
        return <MapsTrackerPane />;
      default:
    }
  }
}

export default DragonWarriorRandomizerTracker;
