import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, label }) => {
  return (
    <div className={`display ${(!type || !label) && 'none'}`}>
      <label className="preview__label">{ label }</label>
      <input type={type} className="input" />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Input;