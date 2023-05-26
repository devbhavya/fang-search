import React from "react";
import './EmployeeDashboard.css';
import EmployeeDuties from "./EmployeeDuties";
import EmployeeList from "./EmployeeList";
import AllEmployees from "./AllEmployees";
import EmployeeDashboardHeader from "./EmployeeDashboardHeader";
const EmployeeDetails=[
        {
            id:'1',
            name:'Dhanush',
            schedule:'Morning Shift',
            dob:new Date(2002,8,28),
            status:'Inactive',
        },
        {
            id:'2',
            name:'Dulquer',
            schedule:'Night Shift',
            dob:new Date(2002,8,28),
            status:'Active',
        },
        {
            id:'3',
            name:'Raviteja',
            schedule:'morning',
            dob:new Date(2002,8,28),
            status:'Inactive',
        },
        {
            id:'4',
            name:'Ranbir',
            schedule:'morning',
            dob:new Date(2002,8,28),
            status:'Active',
        },
        {
            id:'5',
            name:'Sumanth',
            schedule:'morning',
            dob:new Date(2002,8,28),
            status:'Active',
        },
        {
            id:'4',
            name:'Ranbir',
            schedule:'morning',
            dob:new Date(2002,8,28),
            status:'Active',
        },
        {
            id:'5',
            name:'Sumanth',
            schedule:'morning',
            dob:new Date(2002,8,28),
            status:'Active',
        },
    ];
const EmployeeDashboard = () =>{
    return (
        <>
        
            <EmployeeDashboardHeader details={EmployeeDetails}></EmployeeDashboardHeader>
            <div className="Employee-Dashboard-Container">
                <div className="Child-Container">
                    <EmployeeDuties></EmployeeDuties>
                </div>
                <div className="Child-Container">
                    <EmployeeList details={EmployeeDetails}></EmployeeList>
                </div>
                <div className="Child-Container">
                    <AllEmployees></AllEmployees>
                </div>   
            </div>
        </>
    )
    
}
export default EmployeeDashboard;