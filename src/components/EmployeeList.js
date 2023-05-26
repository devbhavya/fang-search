import "./EmployeeList.css";
  import React from 'react';
import EmployeeListData from "./EmployeeListData";
// import profile from "./profile.png";
const EmployeeList = (props) =>{
  return(
    <div className="Employee-List-Container">
        <p id="Employee-List-Header">Employee List</p>
        <p id="Employee-List-Dob">DOB</p>
        <EmployeeListData></EmployeeListData>
        <EmployeeListData></EmployeeListData>
        <EmployeeListData></EmployeeListData>
        <EmployeeListData></EmployeeListData>
        <div className="Show-More-Container">
        <button id="Show-More-Button">Show More</button>
        </div>
        
    </div>
);
};
export default EmployeeList;