import React from 'react';

const Radio = ({ type, label, options }) => {
  return (
    <div className={`display ${(!type || !label || !options.length) && 'none'}`}>
      <h2>{ label }</h2>
      { options.map(option => <label>{ option }<input type={ type } value={ option } /></label>) }
    </div>
  )
}

export default Radio;