import React from 'react';
import './Search.css';
import Logo from './fanglogo.jpg';
import { Link } from 'react-router-dom';
function Search() { 
    return(
        <div className='starting_page'>
            <img src={Logo} alt="fang logo" className="search_bar_logo"></img>
        <form>
        <input class="search_bar" type="text" title="Search"></input><br></br>
        <Link to="/search"><i className="bi bi-search starting_page_search"></i></Link>
        <Link to="/search"><button class="fang_search_button">Fang Search</button></Link>
        <i class="bi bi-mic starting_page_mic"></i>
        <i class="bi bi-camera starting_page_camera"></i>
        </form>
        <ul className='desktop_languages'>
            <li><span style={{color:"orange"}}> Fang</span>  offered in: Hindi    </li>
            <li><span style={{color:"blue"}}>తెలుగు</span></li>
            <li>বাংলা</li>
            <li>Marati</li>
            <li>ગુજરાતી</li>
            <li>ಕನ್ನಡ</li>
            <li>ગુજરાતી</li>
            <li>മലയാളം</li>
        </ul>
        <div className='mobile_languages'></div>
        <br></br>
        <p className='fang_offered_in'>Fang offered in:</p>
        <ul id='mobile_languages_links'>
        <li id='mobile_languages_links_li'><span style={{color:"blue"}}>తెలుగు</span></li>
            <li id='mobile_languages_links_li'>বাংলা</li>
            <li id='mobile_languages_links_li'>Marati</li>
            <li id='mobile_languages_links_li'>ગુજરાતી</li>
            <li id='mobile_languages_links_li'>ಕನ್ನಡ</li>
            <li id='mobile_languages_links_li'>ગુજરાતી</li>
            <li id='mobile_languages_links_li'>മലയാളം</li> 
        </ul>
        </div>
        );
    }
export default Search;