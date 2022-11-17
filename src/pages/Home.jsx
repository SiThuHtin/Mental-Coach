import React from "react";
import AnxietySection from "../components/AnxietySection";
import DepressionSection from "../components/DepressionSection";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import FormSection from "../components/FormSection";

import HeroSection from "../components/HeroSection";
import Quote from "../components/Quote";


function Home({read,setRead,handleReadmore,readD,setReadD}) {
  return (
    <>
      {/*<Heading />*/}
      <HeroSection />
      <Quote />

      <AnxietySection
        read={read}
        setRead={setRead}
        handleReadmore={handleReadmore}
      />
      <hr />
      <DepressionSection readD={readD} setReadD={setReadD} />
      <FormSection />
      <Faq/>
      <Footer/>
    </>
  );
}
export default Home;
