import React from 'react';
import { Link } from 'react-router-dom';
import './search.css'
const Search = () => {
  return (
    <>
      <div className="searchbar">
          <input className="searchbar_input" type="text" />
          <i className="bi bi-x-lg sb_cross_svg"></i>
          <i className="sb_line"></i>
          <i class="bi bi-mic-fill"></i>
          <i className="bi bi-camera-fill sb_camera_svg"></i>
          <Link to="/dashboard"><i className="bi bi-search sb_search_svg"></i></Link>
      </div>
    </>
  );
}

export default Search;