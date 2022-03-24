import React from 'react';
import styles from './card.module.css'

function Card({currencie}) {
  return (
    <div className={styles.flex}>
   <p className={styles.p}>{currencie.CharCode} {currencie.Name}</p>
   <p className={styles.p}>{currencie.Value}</p>
    </div>
  );
}

export default Card;
