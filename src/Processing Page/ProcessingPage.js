import Cards from "./Criterias/Cards.js";
import CriteriaForm from "./Criterias/CriteriaForm.js"
import DecisionMatrix from "./DecisionMatrix/DecisionMatrix.js"
import Submission from "./Results/Submission.js"

import React, { useState } from 'react';


function ProcessingPage() {

  const [criteriaCards, setCriteriaCards] = useState([]);
  const [editCard, setEditCard] = useState(null);

  const [products, setProducts] = useState([]);


  return (
    <div className="ProcessingPage" style={{backgroundColor:"cyan", minHeight:"100vh"}}>
      <CriteriaForm criteriaCards={criteriaCards} setCriteriaCards ={setCriteriaCards} editCard={editCard} setEditCard={setEditCard} />
      <Cards criteriaCards={criteriaCards} setCriteriaCards={setCriteriaCards} setEditCard={setEditCard} />    
      <DecisionMatrix criteriaCards={criteriaCards} products={products} setProducts={setProducts} /> 
      <Submission products={products}/>

    </div>
  );
}

export default ProcessingPage;



