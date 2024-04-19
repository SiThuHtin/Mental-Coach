import React from "react";
import { Link, Route,Routes } from "react-router-dom";
import FormSection from "./FormSection";

function HeroSection() {
  return (
    <>
    
      <div className="hero">
        <div className="container py-5">
          <div className="row py-5">
            <div className="hero-content col-md-6 d-flex flex-column align-items-center justify-content-center py-3">
              <div className="display-3 my-4 ">
                You Deserve
                <br /> To Be Happy
              </div>
              <button
                type="button"
                className="btn btn-lg btn-dark my-4 w-40"
              >
                <Link to="/Form-section" className="nav-list">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/Form-section" element={<FormSection />} />
      </Routes>
      </>
    
  );
}

export default HeroSection;
