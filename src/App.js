import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Getresults from "./components/getresults";
// import "./App.css";
import EmployeeDashboard from './components/EmployeeDashboard';
import Letters from './components/SearchPage/Search'
import Details from "./components/employeeprofilepage/Details";
import Blank from "./components/SearchResults/blank";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Letters />}></Route>
          <Route path="/search" element={<Getresults />}></Route>
          <Route path="/dashboard" element={<EmployeeDashboard />}></Route>
          {/* <Route path="/profile" element={<Blank />}></Route> */}
          <Route path="/profile/:userId" element={<Details />}></Route>
          <Route path="/blank" element={<Blank />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
