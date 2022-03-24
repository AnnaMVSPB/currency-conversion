import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './exchangeRates.module.css';

function ExchangeRates() {
  const { exchangeRates } = useSelector(state => state)
  return (
    <div>
      <div className={styles.block}><p className={styles.p}>Наименование валюты</p><p className={styles.p}>Курс к рублю</p></div>
      {exchangeRates.map((currencie, i) => i < 10 && <Card key={currencie.ID} currencie={currencie} />)}
    </div>
  );
}

export default ExchangeRates;
