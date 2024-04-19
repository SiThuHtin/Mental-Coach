import React from "react";
import AnxietyImg from "../images/anxiety.png";
import { useNavigate } from "react-router-dom";

function AnxietySection({read}) {
  let navigate = useNavigate();
  
  const handleClick=()=>{
     navigate('/Anxiety')
  }

  return (
    <div className="container ">
      <div className="row my-5">
        <div className="col-md-6 ">
          <img className="imageA d-height rounded" src={AnxietyImg} />
        </div>
        <div className="col-md-6 ">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="display-4 mb-4 mt-4">What is Anxiety?</div>
            <p className="fs-5 mt-4 text-center">
              The American Psychological Association (APA) defines anxiety as
              “an emotion characterized by feelings of tension, worried thoughts
              and physical changes like increased blood pressure."
            </p>
            {
              read && <p className="fs-5 mt-4 text-center">
              Anxiety is a psychological and physiological state that causes
              temporary feelings of fear and worry. For the most part, feeling
              anxious is a normal response to stressful or tense situations.
              Anxiety can help motivate us to anticipate challenges, plan ahead
              and push through tough times.
            </p>
            }
            <button type="button" className="btn btn-dark my-2 " onClick={handleClick}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnxietySection;
