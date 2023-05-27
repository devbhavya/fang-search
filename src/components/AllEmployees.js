import "./AllEmployee.css";
import { useState } from 'react';
// import Calendar from 'moedim';
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import  styled from "styled-components";
import moment from 'moment';
const AllEmployees = () =>{
    const desiredStartDate = moment("05/15/2023");
    const desiredStartDate2= moment("05/22/2023");
    const desiredStartDate3= moment("05/29/2023");
    const desiredEndDate2= moment("05/21/2023");
    const desiredEndDate3= moment("05/28/2023");
  const desiredEndDate = moment("05/31/2023");
  const morningShiftDesiredStartDate = moment("05/09/2023");
  const morningShiftDesiredEndDate = moment("05/14/2023");
  console.log("sgddsg");
    return(
        <div className="All-Employees-Container">
            <div className="All-Employees-Data">
                <p id="All-Employees-Header-Text">All Employees</p>
                <p id="All-Employees-Attendance-Percentage">90.26%</p>
                <p id="All-Employees-Attedance-Demo-Text">Attendance %YTD</p>
                <button id="All-Employees-ViewMore-Button"><i class="bi bi-chevron-right"></i></button>
            </div>
            <div className="All-Employees-Calender">
                {/* <CalendarContainer> */}
                    <Calendar
                        
                        tileClassName={({date}) =>{
                        const currentDate = moment(date);
                        if (desiredStartDate.isSame(currentDate)) return 'middle-date first-date';
                        if (desiredStartDate2.isSame(currentDate)) return 'middle-date first-date';
                        if (desiredStartDate3.isSame(currentDate)) return 'middle-date first-date';
                        if (desiredEndDate.isSame(currentDate) ) return 'middle-date last-date';
                        if (desiredEndDate2.isSame(currentDate) ) return 'middle-date last-date';
                        if (desiredEndDate3.isSame(currentDate) ) return 'middle-date last-date';
                        if (morningShiftDesiredStartDate.isSame(currentDate) ) return 'morningShift-middle-date mornningShift-start-date';
                        if (morningShiftDesiredEndDate.isSame(currentDate) ) return 'morningShift-middle-date mornningShift-end-date';
                        if (moment(date).isBetween(desiredStartDate, desiredEndDate)) return 'middle-date';

                        
                        if (moment(date).isBetween(morningShiftDesiredStartDate, morningShiftDesiredEndDate)) return 'morningShift-middle-date';
                        else return 'null-days';
                       }}
                    />
                    
                {/* </CalendarContainer> */}
                <p id="Calendar-Schedule-Text">Schedules</p>
                <p id="Schedule-MorningShift">MorningShift</p>
                <p id="Schedule-NightShift">NightShift</p>
            </div>
        </div>
    );
};
export default AllEmployees;
