import React from "react";
import Grief from "../images/grief.png";
import ManageA from "../images/manageA.png";
import ManageD from "../images/manageD.png";
import Panic from "../images/panic.png";

const Services = () => {
  return (
    <div className="service">
      <div className="container  ">
        <div className="row container-services  ">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img src={ManageA} alt="anxietymanage" className="imageA mt-4"/>
            <div className="h3 my-5 font-weight-bold">Anxiety Management</div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ">
            <img src={ManageD} alt="depressionmanage" className="imageA mt-4" />
            <div className="h3 my-5 font-weight-bold">Depression Management</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row container-services">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img src={Panic} alt="panic" className="imageA" />
            <div className="h3 my-5">Management of Panic Attacks</div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img src={Grief} alt="grief" className="imageA" />
            <div className="h3 my-5">Management of Grief</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
