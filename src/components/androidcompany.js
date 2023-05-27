import React from "react";
import map1 from "./images/map1.jpg";
import map2 from "./images/map2.png";
import "./androidcompany.css"
const Androidcompany = () => {
  return (
    <div className="androidcompany">
        <p className="company_name">Fang Technologies</p>
        <p className="street_address_android">Software company in Edison, New Jersey</p>
        <img className="map1" src={map1}></img>


        <div className="below">
        <ul>
          <li className="selected">OVERVIEW</li>
          <li>REVIEWS</li>
          <li>PHOTOS</li>
          <li>ABOUT</li>
        </ul>
        <hr className="horizontal"></hr>
        <ul>
          <li><i class="bi bi-sign-merge-left"></i></li>
          <li><i class="bi bi-share-fill"></i></li>
          <li><i class="bi bi-telephone-fill"></i></li>
          <li><i class="bi bi-globe-central-south-asia"></i></li>
        </ul>
        <ul>
          <li className="bi_below">DIRECTIONS</li>
          <li className="bi_below">SHARE</li>
          <li className="bi_below">CALL</li>
          <li className="bi_below">WEBSITE</li>
        </ul>
        </div>
        <hr></hr>
        <div className="map">
        <i class="bi bi-geo-alt-fill"></i>
        <p className="main_address">Address: 92 Stratford Cir, Edison, NJ 08820, United States</p>
        <img className="image_map" src={map2}></img>
        </div>
        <button className="more_button"><b>More about Fang Technologies..></b></button>
    </div>
  )
}

export default Androidcompany