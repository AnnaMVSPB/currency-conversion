import React from 'react';

function Card({currencie}) {
  return (
    <div>
   <p>{currencie.CharCode}</p>
   <p>{currencie.Name}</p>
   <p>{currencie.Nominal}</p>
   <p>{currencie.Value}</p>
    </div>
  );
}

export default Card;
