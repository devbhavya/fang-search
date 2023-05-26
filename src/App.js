import React from "react";
import Search from "./components/search";
import Logo from "./components/images/fang-logo.svg";
import Links from "./components/links";
import "./App.css";
import UserList from "./components/result";
import Company from "./components/company";
import Andlinks from "./components/andlinks";
import EmployeeDashboard from './components/EmployeeDashboard';

function App() {
  return (
    <div className="App">
      
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
      <EmployeeDashboard></EmployeeDashboard>
    </div>
  );
}

export default App;
