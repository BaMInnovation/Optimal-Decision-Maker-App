import React, { useState } from 'react';

import SAW from "./Saw.js"

function Submission({products, criteriaCards}) {

  const [results, setResults] = useState([])

  const [submitted, setSubmitted] = useState(false);

  const prepareForCalculation = () => {
    let n = products.length, m = criteriaCards.length

    //generate decision matrix
    let decisionMatrix = Array.from({ length: n }, () => Array(m).fill(0)); // or any initial value
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < m; j++) {
        let criteriaCard = criteriaCards[j]
        decisionMatrix[i][j] = (criteriaCard.dataType === 'Numerical')? products[i][criteriaCard.criteriaName]: criteriaCard.categories[products[i][criteriaCard.criteriaName]];
      }
    }

    //isBeneficial array
    const isBeneficial = criteriaCards.map((card) => card.characteristic === "Beneficial")

    const criteriaPoints = criteriaCards.map((card) => card.criteriaPoint)

    return {decisionMatrix: decisionMatrix, isBeneficial: isBeneficial, criteriaPoints: criteriaPoints}
  }


  console.log(criteriaCards.length)
  const calculate = () => {
    setSubmitted(true)
    if(criteriaCards.length !== 0) {
      let inputs = prepareForCalculation();
      let saw = new SAW();
      const result = saw.calculate(inputs.decisionMatrix, inputs.criteriaPoints, inputs.isBeneficial, "NthRoot");
      setResults(result)
    }
  }

  return (
    <>
      <button onClick={() => {calculate()}} style={{marginTop: "10px"}}>Submit</button>
      <div className="Submission" style={{backgroundColor: "purple", marginTop: "20px"}}>

        {submitted && 
        (criteriaCards.length && results.map((result, index) => {return (<div className='results' style={{backgroundColor: "pink"}}>
                                            <p>{products[index].alternativeName}: {result}</p>
                                          </div>)}) 
      || <h1 style={{color:"red"}}>First add some criterias</h1>) }

      </div>
    </>
  );
}

export default Submission;



