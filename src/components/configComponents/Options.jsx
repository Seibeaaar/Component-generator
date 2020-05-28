import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AddCircleOutline, Check } from '@material-ui/icons';
import { getOptions } from '../../redux/actions';
import '../../styles/Options.scss';

const Options = ({ id, getOptions }) => {
  const [options, setOptions] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const [optionValue, setOptionValue] = useState('');
  useEffect(() => {
    getOptions(id, options);
  })
  const addOption = () => {
    if(optionValue) {
      setOptions(options.concat(optionValue));
      setOptionValue('');
      setAddMode(false);
    }
  }
  return (
    <div className="options__wrapper">
      { options.length ? options.map(option => <div className="options__item">{ option }</div>) : !addMode && 'Add options' }
      { addMode ? <div className="options__config">
        <input 
          type="text"
          value={optionValue} 
          onChange={e => setOptionValue(e.target.value)} 
          className="options__input"
        />
        <button onClick={addOption}><Check /></button>
      </div> : <button onClick={() => setAddMode(true)} className="options__add"><AddCircleOutline /></button>}
    </div>
  )
}

export default connect(null, { getOptions })(Options);