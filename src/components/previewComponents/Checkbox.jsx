import React from 'react';

const Checkbox = ({ type, label, options }) => {
  return (
    <div className={`display ${(!type || !label || !options.length) && 'none'}`}>
      <h2>{ label }</h2>
      { options.map(option => <label>{ option }<input type={ type } value={ option } /></label>) }
    </div>
  )
}

export default Checkbox;