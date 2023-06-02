import React from 'react';
import { Link } from 'react-router-dom';
import Blank from './SearchResults/blank';
import {useNavigate} from 'react-router-dom'
import './search.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const Search = () => {  
  const history = useNavigate();
  const [data,setData] = useState("");
  const changeHandler = (e) =>{
      setData(e.target.value);
  }
  const {userId} = useParams();
  console.log(userId)
  return (
    <>
      <form className="searchbar">
            <input className="searchbar_input" type="text" onChange={changeHandler} defaultValue={userId} autoFocus required placeholder='Enter Your Name / Email / Id'/>
            <i className="bi bi-x-lg sb_cross_svg"></i>
            <i className="sb_line"></i>
            <i class="bi bi-mic-fill"></i>
            <i className="bi bi-camera-fill sb_camera_svg"></i>
            <i  className="bi bi-search sb_search_svg" onClick={()=>{history('/profile/'+data)}} ></i>
            <button class="fang_search_button" onClick={()=>{history('/profile/'+data)}} type='submit'>Fang Search</button>
      </form>  
    </>
  );
}

export default Search;