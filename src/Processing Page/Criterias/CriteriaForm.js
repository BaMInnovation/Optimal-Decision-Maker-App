// CriteriaForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CriteriaForm() {
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
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="container mt-5">
      <h2>Add New Criteria</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-3">
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
        <div className="mb-3">
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
        <button type="submit" className="btn btn-primary">Add Criteria</button>
      </form>
    </div>
  );
}

export default CriteriaForm;
