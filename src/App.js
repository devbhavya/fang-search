import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Getresults from "./components/getresults";
import Links from "./components/links";
import "./App.css";

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
