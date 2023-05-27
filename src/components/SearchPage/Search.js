import React from 'react';
import './Search.css';
import Logo from './fanglogo.jpg';
function Search() { 
    return(
        <div>
        <form>
        <input class="searchbar" type="text" title="Search"></input>
        <button class="button">Fang Search</button>
        </form>
        <div >
            <img src={Logo} alt="fang logo" className="image"></img>
        </div>
       
        </div>
        );
    }
export default Search;