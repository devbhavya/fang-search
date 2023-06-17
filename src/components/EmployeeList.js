import "./EmployeeList.css";
  import React from 'react';
import { useState } from "react";
import EmployeeListData from "./EmployeeListData";
// import profile from "./profile.png";
const EmployeeList = (props) =>{
  const [showMoreIdName,setShoMoreIdName]=useState("showMoreContent")
  const showMoreHandlar=()=>{
    setShoMoreIdName("showMoreUpdatedContent");
  }
  return(
    <>
    <div className="Employee-List-Container">
        <p id="Employee-List-Header">Employee List</p>
        <p id="Employee-List-Dob">DOB</p>
        <div className="showMoreUpdatedContent">
        <EmployeeListData data={props.details}></EmployeeListData>
        </div>
        {/* <div className="Show-More-Container">
        <button id="Show-More-Button" onClick={showMoreHandlar}>Show More</button>
        </div> */}
    </div>
    </>
    
);
};
export default EmployeeList;