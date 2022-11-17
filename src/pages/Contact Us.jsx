import React from 'react'
import { FaFacebook, FaFacebookMessenger, FaGoogle } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="mt-5 footer text-white">
    <div className="d-md-flex flex-row justify-content-around ">
      <div className="d-flex flex-column align-items-center justify-content-center pt-3 ">
        <div className="h3">Mental Coach</div>

        <div className="d-flex flex-row justify-content-between gap-3 py-3">
          <FaFacebook />
          <FaFacebookMessenger />
          <FaGoogle />
        </div>
      </div>
      <div className=" d-flex flex-column align-items-center justify-content-center d-md-block py-5">
        <div className="h5">Contact us</div>
        <div className="">
          Address: City,Country <br />
          Phone: (111) 000-0000
          <br />
          Fax: (222) 333-4444
          <br />
          Email:
          <br />
          mentalcoaching@gmail.com
        </div>
      </div>
      <div className=" d-flex flex-column align-items-center justify-content-center d-md-block py-5">
        <div className="h5">Our Services</div>
        <div>
          Anxiety
          <br />
          Trauma <br />
          Depression
          <br />
          Panic Attacks
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs