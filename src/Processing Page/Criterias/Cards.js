
// Cards.js
import React from 'react';
import './Criterias.css';
import { useState } from 'react';


function Cards({criteriaCards, setCriteriaCards}) {/*
  const [criteriaCards, setCriteriaCards] = useState([{
    criteriaName: "C1",
    dataType: "Categorical",
    categories: [{categoryName: "Cat1", categoryPoint: 15},
                 {categoryName: "Cat2", categoryPoint: 10},
                 {categoryName: "Cat3", categoryPoint: 375}],
    characteristic: "Beneficial",
    criteriaPoint: 15
  },
  {
    criteriaName: "C1",
    dataType: "Numerical",
    characteristic: "Beneficial",
    criteriaPoint: 15
  }  
])*/
  return (
    <div className='criterias'>
      <button type="button" className="btn btn-primary" onClick={() => document.getElementsByClassName('overlay')[0].style.visibility = "visible"} style={{marginTop:"110px", marginLeft:"10px", marginBottom: "10px"}}>Add Criteria</button>

      
      <div className="cards-container">
        {criteriaCards.map((card, index) => {
          return <div className="card" key={index}>
            <h3 style={{textAlign: "center"}}>{card.criteriaName}</h3>
            <p><b>Data Type:</b> {card.dataType}</p>
            {card.categories && <p><b>Data Categories:</b> {card.categories.map((category, index) => {return  (<span key={index}>
                                                                                                          {category.categoryName}
                                                                                                          {index !== card.categories.length - 1 ? ", " : ""}
                                                                                                        </span>)
                                                                                                      })}</p>}
            <p><b>Characteristic:</b> {card.characteristic}</p>
            <p><b>Criteria Point:</b> {card.criteriaPoint}</p>


            <div className="row mt-2">
              <div className="col text-start">
                <button type="submit" className="btn btn-primary" onClick={() => {setCriteriaCards(criteriaCards.filter((mapCard) => mapCard !== card))}}>Delete</button>
              </div>
              <div className="col text-end">
                <button type="button" className="btn btn-secondary" >Edit</button>
              </div>
            </div>

          </div>
  })}
        
      </div>
    </div>
  );
}

export default Cards;
