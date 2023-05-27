import React from "react";
import './Details.css';
import Loc from './Images/loc.png';
import Cal from './Images/calend.png';
import Letter from './Images/letters.jpg';
import Team from './Images/teami.png';
import Link from './Images/linkedin.png';
import Browse from './Images/browser.jpg';
import NA from './Images/na.jpg';
import BD from './Images/drop.png';
import Emp from './Images/employee.jpg';
import pro from './Images/profile.jpg';
import Logo from './Images/fanglogo.jpg';
function Details(){
    return (
        <div>
            <div className="rectangletwo">
                <rect/>
            </div>
            <div className="name">
                <text>Anusha</text>
            </div>
            <div className="locationone">
                <text>Location</text>
            </div>
            <div className="locationtwo">
                <text>Hyderabad, Telangana,
India.</text>
            </div>
            <div className="dob">
                <text>Date of Birth</text>
            </div>
            <div className="dobdate">
                <text>02/10/1997s</text>
            </div>
            <div className="type">
                <text>Type</text>
            </div>
            <div className="na">
                <text>N/A</text>
            </div>
            <div className="contact">
                <text>
                Contact
                </text>
            </div>
            <div className="number">
                <text>
                9876543210
                </text>
            </div>
            <div className="team">
                <text>
                Team
                </text>
            </div>
            <div className="domain">
                <text>UI/UX</text>
            </div>
            <div className="linked">
                <text>Linkedln</text>
            </div>
            <div className="blood">
                <text>Blood Group</text>
            </div>
            <div className="group">
                <text>B+ve</text>
            </div>
            <img src={Loc} alt=" "  className="imageone"></img>
            <img src={Cal} alt=""   className="imagetwo"></img>
            <img src={Letter} alt=" " className="imagethree"></img>
            <img src={Team}  alt=" "  className="imagefour"></img>
            <img src={Link} alt=""  className="imagefive"></img>
            <img src={Browse} alt=" " className="imagesix"></img>   
            <img src={NA}  alt=" "  className="imageseven"></img>
            <img src={BD} alt=" "   className="imageeight"></img>
            <img src={Emp} alt=" "   className="imageemp"></img>
            <div className="rectangleone">
            <rect/>
            </div>
            <div className="texting">
               <text>Employee Profile</text>
            </div>
            <img src={pro} alt=""  className="img"></img>
            <div className="boxx">
            <rect/>
            </div>
            <div className="company">
            <text>Companies</text>
            </div>
           <div className="fangg">
            <text> / Fang</text>
            </div>
           <div >
            <img src={Logo} alt="fang logo" className="image"></img>
           </div>
       
    
        </div>

    );
}

export default Details;