import React from 'react';
import './Search.css';
import Logo from './fanglogo.jpg';
import { Link } from 'react-router-dom';
function Search() { 
    return(
        <div>
        <form>
        <input class="search_bar" type="text" title="Search"></input>
        <Link to="/search"><button class="button">Fang Search</button></Link>
        </form>
        <div >
            <img src={Logo} alt="fang logo" className="image"></img>
        </div>
       
        </div>
        );
    }
export default Search;