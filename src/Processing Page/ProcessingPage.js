import Cards from "./Criterias/Cards.js";
import CriteriaForm from "./Criterias/CriteriaForm.js"

import React, { useState } from 'react';


function ProcessingPage() {

  const [criteriaCards, setCriteriaCards] = useState([]);

  return (
    <div className="ProcessingPage" style={{backgroundColor:"cyan", minHeight:"100vh"}}>
      <CriteriaForm criteriaCards={criteriaCards} setCriteriaCards ={setCriteriaCards}/>
      <Cards criteriaCards={criteriaCards} setCriteriaCards ={setCriteriaCards}/>     

    </div>
  );
}

export default ProcessingPage;



