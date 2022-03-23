import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Converter from '../Converter/Converter';
import ExchangeRates from '../ExchangeRates/ExchangeRates';
import { converterAT } from '../../redux/actionType/converterAT';
import Nav from '../Nav/Nav';
import './App.css';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch({type:converterAT.EXCHANGE_RATES_FETCH})
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Converter/>} />
          <Route path='/exchangeRates' element={<ExchangeRates/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
