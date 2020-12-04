import React from 'react';

import './TrackerNavigation.css';

import TappableImageControl from '../TappableImageControl/TappableImageControl';

function TrackerNavigation(props) {
  const navItems = props.navItems.map((navItem) => {
    navItem.selected = props.selectedPane === navItem.paneIndex;
    return navItem;
  });
  return (
    <nav className='tracker-navigation'>
      {navItems.map((navItem) => getControl(navItem, props.handler))}
    </nav>
  )
}

function getControl(navItem, handler) {
  return (
    <TappableImageControl
      imageUrl={navItem.imageUrl}
      title={navItem.title}
      size="md"
      handler={(ev) => handler(navItem.paneIndex)}
      selected={navItem.selected}
      key={navItem.title}
    ></TappableImageControl>
  );
}

export default TrackerNavigation;
