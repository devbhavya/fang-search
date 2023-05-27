import React from 'react'
import Search from "./search";
import Logo from "./images/fang-logo.svg";
import Links from "./links";
import "../App.css";
import UserList from "./result";
import Company from "./company";
import Andlinks from "./andlinks";


const Getresults = () => {

  

  return (
    <div>
  <div className="wrapper">
        <button className="menu"><i className="bi bi-list menu"></i></button>
      <button className="profile"><i className="bi bi-person-circle profile"></i></button>
        <Search></Search>
        <div className="logo">
          <img src={Logo} alt="" />
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