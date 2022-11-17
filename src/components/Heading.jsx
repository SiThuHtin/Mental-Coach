import React from 'react'

import App from '../App';

function Heading() {
    return (
      <>
        <nav className="navbar navbar-expand-lg colo ">
          <div className=" container ">
            <a className="navbar-brand text-white" href="#">
              Mental Coach
            </a>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarNav">
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                <a className="nav-link text-white" href="#">
                    About Us
                  </a>
                </li>
               
                  
                  
                  
                
                
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 search-height"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
       </>
    );
  }

export default Heading