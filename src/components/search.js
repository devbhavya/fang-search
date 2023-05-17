import React from 'react';
import './search.css'
import Logo from './images/Logo.svg'

const Search = () => {
  return (
    <>
    <div className='search_bar'>
      <input type='text' className='search_bar_input'></input>
      <i class="bi bi-x-lg sb_cross_svg"></i>
      <i className='sb_line'></i>
      <i class="bi bi-camera-fill sb_camera_svg"></i>
      <i class="bi bi-search sb_search_svg"></i>
      <img src={Logo} className="fang_logo"></img>

    </div>
    </>
  );
}

export default Search;