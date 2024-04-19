import React from "react";
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg colo ">
      <div className=" container  ">
        <h3 className="text-white">Mental Coach</h3>

        <div className="collapse navbar-collapse   " id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item  ">
              <Link className="nav-list" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-list" to="/About-Us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-list" to="/Services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-list" to="/Contact-Us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
