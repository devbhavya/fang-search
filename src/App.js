import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Getresults from "./components/getresults";
// import "./App.css";
import EmployeeDashboard from './components/EmployeeDashboard';
import Letters from './components/SearchPage/Search'
import Details from "./components/employeeprofilepage/Details";
import Blank2 from "./components/SearchResults/blank2";
import Error from "./components/employeeprofilepage/error";

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
          <Route path="/blank" element={<Blank2 />}></Route>
          <Route path="/profile/error" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
