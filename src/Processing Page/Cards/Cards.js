
// Cards.js
import React from 'react';
import './Cards.css';
import { useState } from 'react';

function Cards() {
  const [criteriaCards, setCriteriaCards] = useState([{
    criteriaName: "C1",
    dataType: "Numerical"
  }])

  return (
    <div className='criterias'>
      <button type="button" class="btn btn-primary" style={{marginTop:"110px", marginLeft:"10px", marginBottom: "10px"}}>Add Criteria</button>
      <div className="cards-container">

        {criteriaCards.map((card) => {
          return <div className="card">
            <h3>{card.criteriaName}</h3>
            <p>{card.dataType}</p>
          </div>
        })}
        
        
        
        
      </div>
    </div>
  );
}

export default Cards;
