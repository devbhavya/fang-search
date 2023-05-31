import React from 'react';
import { Form, Link } from 'react-router-dom';
import Blank from './SearchResults/blank';
import './search.css'
import { useState } from 'react';
const Search = () => {  

  return (
    <>
      <form className="searchbar">
            <input className="searchbar_input" type="text"  name='search'/>
            <i className="bi bi-x-lg sb_cross_svg"></i>
            <i className="sb_line"></i>
            <i class="bi bi-mic-fill"></i>
            <i className="bi bi-camera-fill sb_camera_svg"></i>
            <Link to="/dashboard"><i className="bi bi-search sb_search_svg"></i></Link>
      </form>
    </>
  );
}

export default Search;