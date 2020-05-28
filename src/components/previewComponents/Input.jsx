import React from 'react';

const Input = ({ type, label }) => {
  return (
    <div className={`display ${(!type || !label) && 'none'}`}>
      <label>{ label }</label>
      <input type={type} />
    </div>
  )
}

export default Input;