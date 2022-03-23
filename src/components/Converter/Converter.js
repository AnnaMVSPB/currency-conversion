import React,{ useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {convertingAC} from '../../redux/actionCreators/converterAC'

function Converter() {
  const {currencies,courseRatio} = useSelector(state=>state)
  const dispatch = useDispatch()
  const inputRef = useRef();

  const inputValue = () => inputRef.current.value
  

  return (
    <>
    <div>
     <h2>RUB</h2>
      <input ref={inputRef} type="number"/>
      <select onChange={e=>dispatch(convertingAC({sum:inputValue(),currency:e.target.value}))}>
        {currencies.map((currencie,i)=><option key={i}>{currencie}</option>)}
      </select>
    </div>
    <div>{courseRatio}</div>
    </>
  );
}

export default Converter;
