import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactUs from "./pages/Contact Us";
import Services from "./pages/Services";
import Home from "./pages/Home";
import AboutUs from "./pages/About Us";
import "./App.css";




import FormSection from "./components/FormSection";


function App() {
  const [read, setRead] = useState(false);
  const [readD, setReadD] = useState(false);
  const handleReadmore = () => {
    setRead(read === true ? false : true);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg colo ">
        <div className=" container  ">
          <h3 className="text-white">Mental Coach</h3>
          
          <div className="collapse navbar-collapse   " id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item  ">
                <Link className="nav-list" to="/">Home</Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-list" to="/About-Us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-list" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-list" to="/Contact-Us">Contact Us</Link>
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
      
      <Routes>
        <Route
          path="/"
          element={
            <Home
              read={read}
              setRead={setRead}
              handleReadmore={handleReadmore}
              readD={readD}
              setReadD={setReadD}
            />
          }
        />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Form-section" element={<FormSection />} />
      </Routes>
    </>
  );
}

export default App;
