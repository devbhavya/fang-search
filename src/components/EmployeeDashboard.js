import React from "react";
import {useNavigate} from 'react-router-dom'
import './EmployeeDashboard.css';
import EmployeeDuties from "./EmployeeDuties";
import EmployeeList from "./EmployeeList";
import AllEmployees from "./AllEmployees";
import EmployeeDashboardHeader from "./EmployeeDashboardHeader";
import Header from './ProfilePage/Header'
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
    const history = useNavigate()
    return (
        <>
            <Header></Header>
            <EmployeeDashboardHeader details={EmployeeDetails}></EmployeeDashboardHeader>
            <div className="Employee-Dashboard-Container"  onClick={()=>{history('/profile')}}>
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