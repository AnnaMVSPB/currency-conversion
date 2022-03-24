import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';
function Nav() {
  return (
    <div className={styles.nav}>
       <Link to="/"><h2>Конвертер валют</h2></Link>
       <Link to="/exchangeRates"><h2>Курсы валют</h2></Link>
    </div>
  );
}

export default Nav;
