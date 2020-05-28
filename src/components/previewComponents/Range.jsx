import React from 'react';

const Range = ({ type, label, additional: { min, max, step } }) => {
  const validateDisplay = () => {
    if(type && label) {
      if(min && max && step && (min < max)) {
        return true;
      }
    }
    return false;
  }
  return (
    <div className={`${ !validateDisplay() && 'none' }`}>
      <label className="preview__label">{ label }</label>
      <input type={type} min={min} max={max} step={step} />
    </div>
  )
}

export default Range;