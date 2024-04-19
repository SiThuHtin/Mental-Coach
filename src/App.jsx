import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import ContactUs from "./pages/Contact Us";
import Services from "./pages/Services";
import Home from "./pages/Home";
import AboutUs from "./pages/About Us";
import "./App.css";

import FormSection from "./components/FormSection";
import Anxiety from "./pages/Anxiety";
import Depression from "./pages/Depression";

function App() {
  const [read, setRead] = useState(false);
  const [readD, setReadD] = useState(false);
  const handleReadmore = () => {
    setRead(read === true ? false : true);
  };
  return (
    <>
     
      
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
        <Route path="/Anxiety" element={<Anxiety/>}/>
        <Route path="/Depression" element={<Depression/>}/>
        
      </Routes>
    </>
  );
}

export default App;
