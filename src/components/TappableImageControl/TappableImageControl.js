import React from 'react';

import './TappableImageControl.css'

function TappableImageControl(props) {
  const selectedClass = props.selected ? ' selected' : '';
  const sizeClass = `tap-control-${props.size}` || 'tap-control-md';
  return (
    <img
      src={props.imageUrl}
      alt={props.title}
      onClick={props.handler}
      className={`tappable-image-control ${sizeClass}${selectedClass}`}
    />
  )
}

export default TappableImageControl;
