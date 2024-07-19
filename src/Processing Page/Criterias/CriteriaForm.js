import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CriteriaForm({ criteriaCards, setCriteriaCards, editCard, setEditCard }) {
  let [criteriaName, setCriteriaName] = useState('');
  const [dataType, setDataType] = useState('Numerical');
  const [characteristic, setCharacteristic] = useState('Beneficial');
  const [criteriaPoint, setCriteriaPoint] = useState(1);
  const [categories, setCategories] = useState({ '': '' });


  const [validInputs, setValidInputs] = useState({ validCriteriaName: true/*, validCategoryInputs: true*/ });

  const handleSubmit = (e) => {
    e.preventDefault();
    criteriaName = criteriaName.trim();

    let _validInputs = {};
    _validInputs.validCriteriaName = criteriaName !== ''
    //_validInputs.validCategoryInputs = criteriaName === ''
    setValidInputs(_validInputs);
    if(_validInputs.validCriteriaName) {
      const formData = {
        criteriaName,
        dataType,
        characteristic,
        criteriaPoint,
      };

      if (dataType === 'Categorical') formData.categories = categories;

      if(!editCard) setCriteriaCards([...criteriaCards, formData]);
      else {
        setCriteriaCards(criteriaCards.map((card, index) => {return (index === editCard.cardIndex)? formData: card}))
        setEditCard(null)
      }

      // Reset form fields
      setCriteriaName('');
      setDataType('Numerical');
      setCharacteristic('Beneficial');
      setCriteriaPoint(1);
      setCategories({ '': '' });

      handleCancelForm();
    }
  };

  const handleCancelForm = () => {
    document.getElementsByClassName('overlay')[0].style.visibility = "hidden";
    setCriteriaName('');
    setDataType('Numerical');
    setCharacteristic('Beneficial');
    setCriteriaPoint(1);
    setCategories({ '': '' });
  };

  const handleAddCategory = () => {
    setCategories({ ...categories, '': '' });
  };

  const handleCategoryChange = (index, field, value) => {
    let _categories = { ...categories };
    const keys = Object.keys(_categories);
    console.log(categories)
    if (field === 'categoryName') {
      const oldKey = keys[index];
      const oldValue = _categories[oldKey];
      delete _categories[oldKey];
      _categories[value] = oldValue;
    } else if (field === 'categoryPoint') {
      const key = keys[index];
      _categories[key] = parseInt(value);
    }
  
    setCategories(_categories);
  };

  const handleRemoveCategory = (category) => {
    let _categories = {...categories};
    delete _categories[category];
    setCategories(_categories);
 };


  useEffect(() => {
    if(editCard) {
      const cardData = editCard.cardData
      setCriteriaName(cardData.criteriaName);
      setDataType(cardData.dataType);
      setCharacteristic(cardData.characteristic);
      setCriteriaPoint(cardData.criteriaPoint);
      if(cardData.categories) setCategories(cardData.categories);
      document.getElementsByClassName('overlay')[0].style.visibility = "visible";
    }
  }, [editCard]);

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
             {!validInputs.validCriteriaName && <small className="p-error"><strong>Criteria name is required.</strong></small>}
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
          
          {/* Categories Table */}
          {dataType === 'Categorical' && (
            <div className="mt-5">
              <h5>Categories</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Category Name</th>
                    <th scope="col">Category Point</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(categories).map((category, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={category}
                          onChange={(e) => handleCategoryChange(index, 'categoryName', e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={categories[category]}
                          onChange={(e) => handleCategoryChange(index, 'categoryPoint', e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleRemoveCategory(category)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={handleAddCategory}
              >
                Add Category
              </button>
            </div>
          )}


          {/* Characteristic and Criteria Point */}
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
              <button type="submit" className="btn btn-primary" style={{width:"120px", height:"50px"}}  onClick={handleSubmit}>Submit</button>
            </div>
            <div className="col text-end">
              <button type="button" className="btn btn-secondary" style={{width:"120px", height:"50px"}} onClick={handleCancelForm}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CriteriaForm;


/*

categories.map((category, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={category.categoryName}
                          onChange={(e) => handleCategoryChange(index, 'categoryName', e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={category.categoryPoint}
                          onChange={(e) => handleCategoryChange(index, 'categoryPoint', e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleRemoveCategory(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
*/