import React from 'react';
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

export default Checkbox;