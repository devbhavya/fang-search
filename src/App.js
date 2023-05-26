import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Getresults from "./components/getresults";
import Links from "./components/links";
import "./App.css";
import UserList from "./components/result";
import Company from "./components/company";
import Andlinks from "./components/andlinks";
import EmployeeDashboard from './components/EmployeeDashboard';
// import SearchComp from './components/SearchPage/Search'

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <h1>hello</h1>
      </BrowserRouter> */}
      <BrowserRouter></BrowserRouter>
      <h1> hello </h1>
      <Getresults />
    </div>
  );
}

export default App;
