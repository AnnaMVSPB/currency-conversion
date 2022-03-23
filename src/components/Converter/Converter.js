import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertingAC } from '../../redux/actionCreators/converterAC'

function Converter() {
  const { courseRatio, exchangeRates } = useSelector(state => state)
  const dispatch = useDispatch()
  const inputRef = useRef();

  const inputValue = () => inputRef.current.value
  console.log(exchangeRates)

  return (
    <>
      <div>
        <h2>RUB</h2>
        <input ref={inputRef} type="number" />
        <select onChange={e => dispatch(convertingAC({ sum: inputValue(), currency: e.target.value }))}>
          {exchangeRates.map((currencie, i) => i < 10 && <option key={i}>{currencie.CharCode}</option>)}
        </select>
      </div>
      <div>{courseRatio}</div>
    </>
  );
}

export default Converter;
