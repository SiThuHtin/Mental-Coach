import React from "react";

function DepressionSection({ readD, setReadD }) {
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
            {readD && (
              <p className="fs-5  text-center">
                Depression affects an estimated one in 15 adults 6.7% in any
                given year. And one in six people 16.6% will experience
                depression at some time in their life. Depression can occur at
                any time, but on average, first appears during the late teens to
                mid-20s. Women are more likely than men to experience
                depression. 
              </p>
            )}
            <button
              type="button"
              className="btn btn-dark my-2 b-color"
              onClick={() => setReadD(readD === true ? false : true)}
            >
              Read More
            </button>
          </div>
        </div>

        <div className="col-md-6 ">
          <img className="imageB d-height rounded " src="src\images\depression.png" />
        </div>
      </div>
    </div>
  );
}
export default DepressionSection;
