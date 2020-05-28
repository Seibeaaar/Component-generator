import React from 'react';
import PropTypes from 'prop-types';

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

Range.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired
}

export default Range;