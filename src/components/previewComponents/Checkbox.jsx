import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Fieldset.scss';

const Checkbox = ({ type, label, additional: { options } }) => {
  return (
    <div className={`${(!type || !label || !options.length) && 'none'}`}>
      <p className="preview__label">{ label }</p>
      { options.map(option => <label 
        className="fieldset__label">
        <input 
          type={ type } 
          value={ option }
          className="fieldset__input"
        />
        { option }
      </label>) }
    </div>
  )
}

Checkbox.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default Checkbox;