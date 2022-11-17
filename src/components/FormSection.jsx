import React, { useState ,useEffect} from 'react'
import { v4 as uuid } from "uuid";




function FormSection() {
  const[booking,setBooking] = useState({
    id : uuid(),
    name : "",
    email : ""
  })
  const [formValue,setFormValue] =useState([]);

  useEffect(() => {
    const formJSON = localStorage.getItem("formValues");
    if (formJSON !== null )setFormValue(JSON.parse(formJSON))
  }, [])
  

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValue));
  }, [formValue]);

  const bookForm = () => {
    setFormValue( [...formValue, booking]);
  };

  function handleBookChange(e){
    setBooking({...booking,[e.target.name]:e.target.value})

  }


    return (
      
      <div className="form-img d-flex flex-column  align-items-center justify-content-center ">
        <div className=" form-con   d-flex flex-column  align-items-center justify-content-center">
          <form className="w-80">
            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                name="name"
                className="form-control"
                value={booking.name}
                onChange={handleBookChange}
                
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email Address
              </label>
              <input
                name="email"
                className="form-control"
                value={booking.email}
                onChange={handleBookChange}
                
              />
            </div>
            <div className="d-flex flex-column  align-items-center justify-content-center pt-4">
              <button type="submit" className="btn btn-primary "
              onClick={bookForm}>
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>


      
        
      
      
    );
  }
  
export default FormSection