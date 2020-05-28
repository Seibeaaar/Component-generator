import React from 'react';
import '../../styles/Fieldset.scss';

const Checkbox = ({ type, label, additional: { options } }) => {
  return (
    <fieldset className={`${(!type || !label || !options.length) && 'none'}`}>
      <legend className="preview__label">{ label }</legend>
      { options.map(option => <label 
        className="fieldset__label">{ option }
        <input 
          type={ type } 
          value={ option }
          className="fieldset__input"
        />
      </label>) }
    </fieldset>
  )
}

export default Checkbox;