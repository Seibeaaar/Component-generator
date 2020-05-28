import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRange } from '../../redux/actions';
import '../../styles/Range.scss';

const RangeConfig = ({ id, getRange }) => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [step, setStep] = useState('');
  useEffect(() => {
    getRange(id, {
      min,
      max,
      step
    })
  })
  return (
    <div className="range__wrapper">
      Set range parameters
      <div className="range__config">
        <label className="range__label">
          Min
          <input type="number" min="1" max="50" value={min} onChange={e => setMin(e.target.value)} className="range__input" />
        </label>
        <label className="range__label">
          Max
          <input type="number" min="1" max="50" value={max} onChange={e => setMax(e.target.value)} className="range__input" />
        </label>
        <label className="range__label">
          Step
        <input type="number" min="1" max="50" value={step} onChange={e => setStep(e.target.value)} className="range__input" />
        </label>
      </div>
    </div>
  )
}

RangeConfig.propTypes = {
  id: PropTypes.number.isRequired,
  getRange: PropTypes.func.isRequired
}

export default connect(null, { getRange })(RangeConfig);