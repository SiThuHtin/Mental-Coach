import React from "react";

const Services = () => {
  return (
    <div className="service">
      <div className="container  ">
        <div className="row container-services ">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img src="src\images\manageA.png" alt="anxietymanage" />
            <div className="h3 my-5 font-weight-bold">Anxiety Management</div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ">
            <img src="src\images\manageD.png" alt="depressionmanage" />
            <div className="h3 my-5 font-weight-bold">Depression Management</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row container-services">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img src="src\images\panic.png" alt="depressionmanage" />
            <div className="h3 my-5">Management of Panic Attacks</div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img src="src\images\grief.png" alt="depressionmanage" />
            <div className="h3 my-5">Management of Grief</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
