import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getOptions } from '../../redux/actions';

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
    <div>
      { options.length ? options.map(option => <p>{ option }</p>) : 'Add options' }
      { addMode ? <div>
        <input type="text"value={optionValue} onChange={e => setOptionValue(e.target.value)} />
        <button onClick={addOption}>Confirm</button>
      </div> : <button onClick={() => setAddMode(true)}>Ad options</button>}
    </div>
  )
}

export default connect(null, { getOptions })(Options);