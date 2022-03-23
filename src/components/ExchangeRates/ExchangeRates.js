import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

function ExchangeRates() {
  const { exchangeRates} = useSelector(state => state)
  return (
    <div>
      {exchangeRates.map(currencie =><Card key={currencie.ID} currencie={currencie}/> )}
    </div>
  );
}

export default ExchangeRates;
