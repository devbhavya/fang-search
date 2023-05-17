import React from "react";
import map1 from './images/map1.jpg';
import map2 from './images/map2.png';
import map3 from './images/map3.jpg';
import User1 from "./images/user1.png";
import User2 from "./images/user2.png";

import "./about.css";
const About = () => {
  return (
    <div className="about_company">
      <div className="images">
      <img src={map1} className="map1"></img>
      <img src={map2} className="map2"></img>
      <img src={map3} className="map3"></img>
      </div>
      <div className="about_detail">
        <p className="about_detail_head">Fangs Technology Pvt Ltd(vivo-TN)</p>
        <button className="about_button_1">Website</button>
        <button className="about_button_2">Directions</button>
        <button className="about_button_3">Save</button>
        <div className="review">
            <p className="review_num">4.1</p>
            <i class="bi bi-star-fill star-yellow"></i>
            <i class="bi bi-star-fill star-yellow"></i>
            <i class="bi bi-star-fill star-yellow"></i>
            <i class="bi bi-star-fill star-yellow"></i>
            <i class="bi bi-star-fill star-grey"></i>
            <p className="review_after">75 Google Reviews</p>
        </div>
        <p className="c_o">Coorporate Office</p>
        <hr className="horizontal_line"></hr>
        <p className="address">
          <b>Adress:</b> 156,Mahalakshmi Building Nungambakkam High Road
          Nugambakkam Landmark:,next to Harrison Hotel,chennai,Tamil Nadu
          6000034
        </p>
        <p className="hours">
          <b>Hours:</b> <span style={{color: "green"}}>Open</span> - Closes 6:30 pm
          <br></br>
          <br></br>
          <b>phone:</b> <span style={{color: "blue"}}>044 4850 7171</span>
        </p>
        <a className="about_link1">Suggest an edit - Own this business?</a>
        <p className="q_a">Question & answers</p>
        <p className="s_a_q">see all questions(10)</p>
        <button className="a_a_q">Ask A Question</button>
        <p className="s_y_p">Send to your phone</p>
        <button className="send_btn">Send</button>
        <p className="reviews">Reviews</p>
        <i class="bi bi-exclamation-circle elipse"></i>
        <button className="w_a_r">Write A Review</button>
        <button className="a_a_p">Add a photo</button>
        <img src={User1} className="user1"></img>
        <p className="review_txt1">“Great place to work.”</p>
        <div className="review-usr1">
            <i class="bi bi-star-fill star-review-yellow"></i>
            <i class="bi bi-star-fill star-review-yellow"></i>
            <i class="bi bi-star-fill star-review-yellow"></i>
            <i class="bi bi-star-fill star-review-yellow"></i>
            <i class="bi bi-star-fill star-review-grey"></i>           
        </div>
        <img src={User2} className="user2"></img> 
        <p className="review_txt2">“Good environment to work”</p> 
        <div className="review-usr2">
            <i class="bi bi-star-fill star-review-yellow"></i>
            <i class="bi bi-star-fill star-review-yellow"></i>
            <i class="bi bi-star-fill star-review-yellow"></i>
            <i class="bi bi-star-fill star-review-yellow"></i>
            <i class="bi bi-star-fill star-review-grey"></i>           
        </div>   
        <p className="google_reviews">VIew all google reviews </p>   
      </div>
    </div>
  );
};

export default About;
