import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getRange } from '../../redux/actions';

const Range = ({ id, getRange }) => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [value, setValue] = useState('');
  const [step, setStep] = useState('');
  useEffect(() => {
    getRange(id, {
      min,
      max,
      value,
      step
    })
  })
  return (
    <div>
      Set range parameters
      <div>
        <label htmlFor="">
          Min
          <input type="number" min="1" max="100" value={min} onChange={e => setMin(e.target.value)}/>
        </label>
        <label htmlFor="">
          Max
          <input type="number" min="1" max="100" value={max} onChange={e => setMax(e.target.value)}/>
        </label>
      </div>
      <label>
        Initial value
        <input type="number" value={value} onChange={e => setValue(e.target.value)} />
      </label>
      <label>
        Step
        <input type="number" value={step} onChange={e => setStep(e.target.value)} />
      </label>
    </div>
  )
}

export default connect(null, { getRange })(Range);