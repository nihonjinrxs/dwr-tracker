import React from 'react';

import './App.css';

import DragonWarriorRandomizerTracker
  from './../DragonWarriorRandomizerTracker/DragonWarriorRandomizerTracker';

function App() {
  const keymap = {
    'timer': {
      'Space': 'start',
      'p': 'pause',
      'Escape': 'reset'  
    },
    'other': {
      'w': 'weapon',
      'a': 'armor',
      'o': 'shield',
      'h': 'harp',
      's': 'stones',
      '|': 'staff',
      'u': 'rainbowdrop',
      'n': 'necklace',
      'r': 'ring',
      'd': 'dragonscale',
      'g': 'gps'
    }
  }
  return (
    <div className="App">
      <DragonWarriorRandomizerTracker
        keymap={keymap.timer}
      ></DragonWarriorRandomizerTracker>
    </div>
  );
}

export default App;
