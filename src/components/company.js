import React from "react";
import map1 from "./images/map1.jpg";
import map2 from "./images/map2.png";
import "./company.css";
const Company = () => {
  return (
    <>
      <div className="company">
        <img className="map1" src={map1}></img>
        <img className="map2" src={map2}></img>
        <p className="company_name">Fang Technologies</p>
        <ul>
        <li><button className="about_button">Website</button></li>
        <li><button className="about_button">Directions</button></li>
        <li><button className="about_button">Save</button></li>
        </ul>
        <p className="street_address">Software company in Edison, New Jersey</p>
        <hr className="company_line"></hr>
        <p className="main_address">Address: 92 Stratford Cir, Edison, NJ 08820, United States</p>
        <p className="suggest_edit">Suggest an edit -Own this  business?</p>
        <p className="subtitle">Add missing information</p>
        <p className="sublinks">Add place's phone number</p>
        <p className="sublinks">Add business hurs</p>
        <br></br>
        <p className="subtitle">Question & Answers</p>
        <p className="sublinks">Be the first to ask any question</p>
        <button className="about_button aaq">Ask a question</button>
        <br></br>
        <i class="bi bi-box-arrow-in-right"></i>
        <p className="suggest_edit addphone">Send to your phone</p>
        <button className="about_button sendbtn">Send</button>
        <br></br>
        <i class="bi bi-exclamation-circle"></i>
        <p className="subtitle">Reviews</p>
        <p className="sublinks">Be the first to review</p>
        <button className="about_button war">Write a review</button>
        <button className="about_button aap">Add a photo</button>
      </div>
    </>
  );
};

export default Company;
