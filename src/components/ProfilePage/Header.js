import React from "react";
import './Header.css';
import Logo from './fanglogo.jpg';
function Header() {
    return(
    <div>
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
export default Header;