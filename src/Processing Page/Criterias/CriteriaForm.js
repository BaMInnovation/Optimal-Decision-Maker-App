// CriteriaForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CriteriaForm({criteriaCards, setCriteriaCards}) {
  const [criteriaName, setCriteriaName] = useState('');
  const [dataType, setDataType] = useState('Numerical');
  const [characteristic, setCharacteristic] = useState('Beneficial');
  const [criteriaPoint, setCriteriaPoint] = useState(1);



  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      criteriaName,
      dataType,
      characteristic,
      criteriaPoint,
    };
    setCriteriaCards([...criteriaCards, formData]);

    setCriteriaName('');
    setDataType('Numerical');
    setCharacteristic('Beneficial');
    setCriteriaPoint(1);

    handleCancelForm();
  };


  const handleCancelForm = () => {
    document.getElementsByClassName('overlay')[0].style.visibility = "hidden"
    setCriteriaName('');
    setDataType('Numerical');
    setCharacteristic('Beneficial');
    setCriteriaPoint(1);
  }


  return (
    <div className='overlay'>
      <div className="container" id='criteria-form'>
        <h2 style={{textAlign:"center"}}>Add New Criteria</h2>
        <form onSubmit={handleSubmit}>

          {/* Criteria Name */}
          <div className="mb-3">   
            <label htmlFor="criteriaName" className="form-label">Criteria Name</label>
            <input
              type="text"
              className="form-control"
              id="criteriaName"
              value={criteriaName}
              onChange={(e) => setCriteriaName(e.target.value)}
              required
            />
          </div>

          {/* Data type */}   
          <div className="mb-3">  
            <label htmlFor="dataType" className="form-label">Data Type</label>
            <select
              className="form-select"
              id="dataType"
              value={dataType}
              onChange={(e) => setDataType(e.target.value)}
              required
            >
              <option value="Numerical">Numerical</option>
              <option value="Categorical">Categorical</option>
            </select>
          </div>
          
          <div className='row mt-5'>
              <div className="mb-3 col-8">
                  <label className="form-label">Characteristic</label>
                  <div>
                      <div className="form-check form-check-inline">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="characteristic"
                          id="beneficial"
                          value="Beneficial"
                          checked={characteristic === 'Beneficial'}
                          onChange={(e) => setCharacteristic(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="beneficial">Beneficial</label>
                      </div>
                      <div className="form-check form-check-inline">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="characteristic"
                          id="cost"
                          value="Cost"
                          checked={characteristic === 'Cost'}
                          onChange={(e) => setCharacteristic(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="cost">Cost</label>
                      </div>
                  </div>
              </div>
              <div className="mb-3 col-4">
              <label htmlFor="criteriaPoint" className="form-label">Criteria Point</label>
              <input
                  type="number"
                  className="form-control"
                  id="criteriaPoint"
                  value={criteriaPoint}
                  onChange={(e) => setCriteriaPoint(parseInt(e.target.value))}
                  min="1"
                  required
              />
              </div>
          </div>
          
          <div className="row mt-5">
            <div className="col text-start">
              <button type="submit" className="btn btn-primary" style={{width:"120px", height:"50px"}}>Add Criteria</button>
            </div>
            <div className="col text-end">
              <button type="button" className="btn btn-secondary" style={{width:"120px", height:"50px"}} onClick={() => handleCancelForm()}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CriteriaForm;
