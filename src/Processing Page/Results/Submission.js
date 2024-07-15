import React, { useState } from 'react';


function Submission({products, criteriaCards}) {

  const generateDecisionMatrix = () => {
    let n = products.length, m = criteriaCards.length
    const decisionMatrix = Array.from({ length: n }, () => Array(m).fill(0)); // or any initial value
    
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < m; j++) {
        let criteriaCard = criteriaCards[j]
//        decisionMatrix[i][j] = (criteriaCard.dataType === 'Numerical')? products[i][criteriaCard.criteriaName]: criteriaCard.categories[products[i][criteriaCard.criteriaName]];
      }
    }
    console.log(criteriaCards)
  }
  generateDecisionMatrix()
  const calculate = () => {
    
  }

  return (
    <div className="Submission">
       <button onClick={() => {calculate()}}>Submit</button>


    </div>
  );
}

export default Submission;



