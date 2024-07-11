import Cards from "./Criterias/Cards.js";
import CriteriaForm from "./Criterias/CriteriaForm.js"



function ProcessingPage() {
  return (
    <div className="ProcessingPage" style={{backgroundColor:"cyan", minHeight:"100vh"}}>
      <CriteriaForm/>
      <Cards/>     


    </div>
  );
}

export default ProcessingPage;



