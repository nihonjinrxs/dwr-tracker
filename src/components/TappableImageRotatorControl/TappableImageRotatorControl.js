import React from 'react';

import './TappableImageRotatorControl.css'

function TappableImageRotatorControl(props) {
  const selectedClass = props.selected ? ' selected' : '';
  const sizeClass = `tap-control-${props.size}` || 'tap-control-md';
  const clickHandler = (_event) => {
    props.setImageIndex((props.imageIndex + 1) % props.imageUrls.length);
  };
  return (
    <img
      src={props.imageUrls[props.imageIndex]}
      alt={props.titles[props.imageIndex]}
      onClick={clickHandler}
      className={`tappable-image-control ${sizeClass}${selectedClass}`}
    />
  )
}



export default TappableImageRotatorControl;
