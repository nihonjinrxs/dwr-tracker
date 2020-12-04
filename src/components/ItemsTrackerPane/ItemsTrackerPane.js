import React from 'react';
import TappableImageRotatorControl from '../TappableImageRotatorControl/TappableImageRotatorControl';

import './ItemsTrackerPane.css';

import trackables from '../../data/trackables.json'

function ItemsTrackerPane(props) {
  const itemKeys = [
    'weapons', 'armor', 'shields', 'scale', 'ring', 'necklace',
    'flute', 'keys', 'token', 'gps', 'harp', 'staff', 'stones',
    'rainbow_drop', 'ball_of_light',
  ];
  const trs = trackables;
  trs.gps = trs.gps[props.characterGender];
  return (
    <div id="items-pane" className="tracker-pane">
      <div className="trackable-items">
        {
          itemKeys.map((itemKey) => {
            console.log(itemKey, Array.isArray(trs[itemKey]))
            return ItemTrackerControl(
              itemKey,
              trs[itemKey],
              props.itemStates[itemKey],
              (itemKey, idx) => props.updateItemStates(itemKey, idx)
            );
          })
        }
      </div>
      <div className="trackable-spells">
        
      </div>
      <div className="spacer"></div>
    </div>
  );
}

function ItemTrackerControl(itemKey, options, index, updateFunction) {
  console.log(itemKey, index, options)
  return (
    <TappableImageRotatorControl
      key={itemKey}
      size="lg"
      imageUrls={options.map(entry => entry.imageUrl)}
      titles={options.map(entry => entry.title)}
      imageIndex={index}
      setImageIndex={(idx) => updateFunction(itemKey, idx)}
    ></TappableImageRotatorControl>
  )
}

export default ItemsTrackerPane;
