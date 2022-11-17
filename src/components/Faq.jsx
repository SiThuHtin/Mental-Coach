import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";



const STORAGE_KEY= "question";

function Faq() {
  const [newQuestion, setNewQuestion] = useState({
    id: uuid(),
    name: "",
  });
  useEffect(() => {
    const questionJSON = localStorage.getItem(STORAGE_KEY);
    if (questionJSON !== null )setNewQuestion(JSON.parse(questionJSON))
  }, [])
  
 useEffect(() => {
  localStorage.setItem(STORAGE_KEY,JSON.stringify(newQuestion))
 }, [newQuestion]);
 

  function handleInputChange(e) {
    setNewQuestion({ ...newQuestion, name: e.target.value });
  }
  

  return (
    <>
      <div className="text-center py-5">
        <div className="display-6">Frequently Asked Questions</div>
      </div>
      <div className="container mb-5">
        <div className="row ">
          <div className="col-md-4 text-center ">
            <div className="my-3 h2">
              Q. Are there cures for mental health problems?
            </div>
            <div className="my-4 fs-5">
              It is often more realistic and helpful to find out what helps with
              the issues you face. Talking, counselling, medication,
              friendships, exercise, good sleep and nutrition, and meaningful
              occupation can all help.
            </div>
          </div>
          <div className="col-md-4 text-center ">
            <div className="my-3 h2">
              Q. What do I do if the support does not help?
            </div>
            <div className="my-4 fs-5">
              It can be difficult to find the things that will help you, as
              different things help different people. It is important to be open
              to a range of approaches and to be committed to finding the right
              help and to continue to be hopeful, even when some things do not
              work out.
            </div>
          </div>
          <div className="col-md-4 text-center ">
            <div className="my-3 h2">Your Question</div>
            <div className="my-4 fs-5">{newQuestion.name}</div>
            
            
          </div>
        </div>
      </div>
      {/*Faq form section*/}
      <div className="d-flex flex-column  align-items-center justify-content-center">
        <div className="my-3">
          Type anything you want to know
        </div>

        <div className="w-50 my-2">
          <textarea
            className="form-control w-100"
            id="exampleFormControlTextarea1"
            rows="3"
            value={newQuestion.name}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Faq;
