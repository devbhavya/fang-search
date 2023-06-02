import React from "react";
import {useNavigate} from 'react-router-dom'
import './Header.css';
import Logo from './fanglogo.jpg';
function Header() {
    const history = useNavigate();
    return(
    <div className="header_bar">
        <p className="comapanies_txt" onClick={()=>{history('/search')}}>Companies <span style={{color:"black"}}>/ Fang</span></p>
        <img className="header_logo" src={Logo} onClick={()=>{history('/')}}></img>
    </div>
    );
}
export default Header;