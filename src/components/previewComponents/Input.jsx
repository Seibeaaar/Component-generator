import React from 'react';

const Input = ({ type, label }) => {
  return (
    <div className={`display ${(!type || !label) && 'none'}`}>
      <label className="preview__label">{ label }</label>
      <input type={type} className="input" />
    </div>
  )
}

export default Input;