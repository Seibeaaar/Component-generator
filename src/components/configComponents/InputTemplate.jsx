import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeType, changeLabel, toggleOptions, toggleRange } from '../../redux/actions';
import RangeConfig from './RangeConfig';
import Options from './Options';

const InputTemplate = ({ id, changeLabel, changeType, toggleOptions, toggleRange }) => {
  const [type, setType] = useState('');
  const [label, setLabel] = useState('');
  useEffect(() => {
    changeLabel(id, label);
  }, [label])
  useEffect(() => {
    if(type === 'checkbox' || type === 'radio') {
      toggleOptions(id, true);
    } else if(type === 'range') {
      toggleRange(id, true);
    } else {
      toggleOptions(id, false);
      toggleRange(id, false);
    }
    changeType(id, type);
  }, [type])
  return (
    <>
      <div className="config__wrapper">
        <select onChange={ e => {
          setType(e.target.value);
        }} className="config__select input">
          <option disabled selected>Type</option>
          <option value="text">Text</option>
          <option value="password">Password</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio</option>
          <option value="range">Range</option>
        </select>
        <input type="text" placeholder="Message" onChange={e => setLabel(e.target.value)} className="config__input input"/>
      </div>
      { (type === 'radio' || type === 'checkbox' ) && <Options id={id} /> }
      { type === 'range' && <RangeConfig id={id} />}
    </>
  )
}

InputTemplate.propTypes = {
  id: PropTypes.number.isRequired,
  changeLabel: PropTypes.func.isRequired,
  changeType: PropTypes.func.isRequired,
  toggleOptions: PropTypes.func.isRequired
}

export default connect(null, { changeLabel, changeType, toggleOptions, toggleRange })(InputTemplate);