import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Converter from '../Converter/Converter';
import ExchangeRates from '../ExchangeRates/ExchangeRates';
import Nav from '../Nav/Nav';
import './App.css';

function App() {
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
