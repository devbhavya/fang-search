import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Getresults from "./components/getresults";
// import "./App.css";
import EmployeeDashboard from './components/EmployeeDashboard';
import Letters from './components/SearchPage/Letters'
import Details from "./components/employeeprofilepage/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Letters />}></Route>
          <Route path="/search" element={<Getresults />}></Route>
          <Route path="/dashboard" element={<EmployeeDashboard />}></Route>
          <Route path="/profile" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
