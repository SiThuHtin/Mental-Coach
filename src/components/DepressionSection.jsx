import React from "react";
import DepressionImg from "../images/depression.png";
import { useNavigate } from "react-router-dom";

function DepressionSection() {
   const navigate = useNavigate();

  function handleClick (){
    navigate('/Depression')
  }
  return (
    <div className="container ">
      <div className="row my-5 ">
        <div className="col-md-6 ">
          <div className="d-flex flex-column align-items-center justify-content-center  ">
            <div className="display-4 mb-4 mt-4">What is Depression?</div>
            <p className="fs-5 mt-4 text-center">
              Depression (also called major depressive disorder or clinical
              depression) is a common but serious mood disorder. It causes
              severe symptoms that affect how you feel, think, and handle daily
              activities, such as sleeping, eating, or working.
            </p>
            
            <button
              type="button"
              className="btn btn-dark my-2 b-color"
              onClick={handleClick}
            >
              Read More
            </button>
          </div>
        </div>

        <div className="col-md-6 ">
          <img className="imageB d-height rounded " src={DepressionImg} />
        </div>
      </div>
    </div>
  );
}
export default DepressionSection;
