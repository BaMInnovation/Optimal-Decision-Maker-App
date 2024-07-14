import React, { useState } from 'react';


function Submission({products}) {

  const calculate = () => {
    const array = Array.from({ length: 5 }, () => Array(4).fill(0)); // or any initial value
    console.log("sadf: ", array)
}

  return (
    <div className="Submission">
       <button onClick={() => {calculate()}}>Submit</button>


    </div>
  );
}

export default Submission;



