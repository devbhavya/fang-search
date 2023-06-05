import React from 'react'
import Search from "./search";
import Logo from "./images/fang-logo.svg";
import Links from "./links";
import "../App.css";
import UserList from "./result";
import Company from "./company";
import Andlinks from "./andlinks";
import {useNavigate} from 'react-router-dom'
import Test from './SearchResults/test';

const Getresults = () => {

  
  const history = useNavigate();
  return (
    <div>
  <div className="wrapper">
        <i class="bi bi-list" id='menu_svg'></i>
      <i class="bi bi-person-circle" id='profile_svg'></i>
        <Search></Search>
        <div className="logo">
          <img src={Logo} alt="" onClick={()=>{history('/')}}/>
        </div>
      </div>
      <Andlinks></Andlinks>
      <div className="desklinks">
        <Links></Links>
      </div>
      <hr></hr>
      <div className="results">
        <div classNameName="search_result">
          <UserList></UserList>
        </div>
        <div classNameName="about_result">
          <Company></Company>
        </div>
      </div>
    </div>
  )
}

export default Getresults