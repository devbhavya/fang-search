import React from "react";
import './Profile.css';
import pro from './profile.jpg';
function Profile(){
    return(
        <div>
        <div className="rectangleone">
            <rect/>
        </div>
        <div className="texting">
            <text>Employee Profile</text>
        </div>
        <img src={pro} alt=""  className="img"></img>
    
        </div>

    );

};

export default Profile;