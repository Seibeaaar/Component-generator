import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Fieldset.scss';

const Radio = ({ type, label, additional: { options }  }) => {
  return (
    <div className={`${(!type || !label || !options.length) && 'none'}`}>
      <p className="preview__label">{ label }</p>
      { options.map((option, index) => <label 
        className="fieldset__label"
      >
        <input 
          type={ type } 
          value={ option }
          name="radio-group"
          className="fieldset__input"
        />
        { option }
      </label>) }
    </div>
  )
}

Radio.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default Radio;