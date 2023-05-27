import React from "react";
import './Letters.css';
import { Link } from 'react-router-dom';
import Logo from './fanglogo.jpg';
function Letters(){
    return(
        <div>
            <form>
        <input class="search-bar" type="text" title="Search"></input>
        <Link to="/search"><button class="button">Fang Search</button></Link>
        </form>
        <div >
            <img src={Logo} alt="fang logo" className="image-fang"></img>
        </div>
            <div className="textings">
                <text>Fang</text>
            </div>
            <div className="textingss">
                <text>offered in: Hindi</text>
            </div>
            <div className="telugu">
                <text>తెలుగు</text>
            </div>
            <div className="langtwo">
                <text>മലയാളം</text>
            </div>
            <div className="langthree">
                <text>ગુજરાતી</text>
            </div>
            <div className="langfour">
                <text>ಕನ್ನಡ</text>
            </div>
            <div className="langfive">
                <text>ગુજરાતી</text>
            </div>
            <div className="langsix">
                <text>Marati</text>
            </div>
            <div className="langseven">
                <text>বাংলা</text>
            </div>
        </div>

    );

}

export default Letters;