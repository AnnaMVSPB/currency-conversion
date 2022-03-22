import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
       <Link to="/"><h2>Конвертер валют</h2></Link>
       <Link to="/exchangeRates"><h2>Курсы валют</h2></Link>
    </div>
  );
}

export default Nav;
