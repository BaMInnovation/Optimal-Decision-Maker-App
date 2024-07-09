
// Cards.js
import React from 'react';
import './Cards.css';
import { useState } from 'react';

function Cards() {
  const [criteriaCards, setCriteriaCards] = useState([{
    criteriaName: "C1",
    dataType: "Categorical",
    categories: [{categoryName: "Cat1", categoryPoint: 15},
                 {categoryName: "Cat2", categoryPoint: 10},
                 {categoryName: "Cat3", categoryPoint: 32},
                 {categoryName: "Cat4", categoryPoint: 42}],
    characteristic: "Beneficial",
    criteriaPoint: 15
  },
  {
    criteriaName: "C1",
    dataType: "Numerical",
    characteristic: "Beneficial",
    criteriaPoint: 15
  }  
])
  return (
    <div className='criterias'>
      <button type="button" class="btn btn-primary" style={{marginTop:"110px", marginLeft:"10px", marginBottom: "10px"}}>Add Criteria</button>
      <div className="cards-container">

        {criteriaCards.map((card) => {
          return <div className="card">
            <h3 style={{textAlign: "center"}}>{card.criteriaName}</h3>
            <p><b>Data Type:</b> {card.dataType}</p>
            {card.categories && <p><b>Data Categories:</b> {card.categories.map((category, index) => {return  (<span key={index}>
                                                                                                          {category.categoryName}
                                                                                                          {index !== card.categories.length - 1 ? ", " : ""}
                                                                                                        </span>)
                                                                                                      })}</p>}
            <p><b>Characteristic:</b> {card.characteristic}</p>
            <p><b>Criteria Point:</b> {card.criteriaPoint}</p>
          </div>
  })}
        
        
        
        
      </div>
    </div>
  );
}

export default Cards;
