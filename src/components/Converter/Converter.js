import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertingAC } from '../../redux/actionCreators/converterAC'
import styles from './converter.module.css';

function Converter() {
  const { courseRatio, exchangeRates } = useSelector(state => state)
  const dispatch = useDispatch()
  const inputRef = useRef();

  const inputValue = () => inputRef.current.value
  console.log(courseRatio)

  return (
    <>
      <div className={styles.block} >
        <input ref={inputRef} type="number" />
        <select onClick={e => dispatch(convertingAC({ sum: inputValue(), currency: e.target.value }))}>
          {exchangeRates.map((currencie, i) => i < 10 && <option key={i}>{currencie.CharCode}</option>)}
        </select>
      </div>
      <div className={styles.block} >
      <p >Это</p><p>{courseRatio > 0 ? courseRatio : 0 }</p><p>рублей</p> 
      </div>
    </>
  );
}

export default Converter;
