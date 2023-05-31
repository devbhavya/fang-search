import React from "react";
import './Header.css';
import Logo from './fanglogo.jpg';
function Header() {
    return(
    <div className="header_bar">
        <p className="comapanies_txt">Companies <span style={{color:"black"}}>/ Fang</span></p>
        <img className="header_logo" src={Logo}></img>
    </div>
    );
}
export default Header;