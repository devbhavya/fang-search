import "./AllEmployee.css";
import { useState } from 'react';
// import Calendar from 'moedim';
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import  styled from "styled-components";
const AllEmployees = () =>{
    const desiredStartDate = new Date(2023, 4, 1); // May 1, 2023
  const desiredEndDate = new Date(2023, 4, 10); // May 10, 2023

  const tileContent = ({ date }) => {
    const isDesiredRange=date === desiredStartDate ;
    const tileStyle = {
        backgroundColor: isDesiredRange ? '#ffcccc' : 'transparent',
        // Add any other desired styles here
      };
    // Check if the current date falls within the desired range
    if (date === desiredStartDate ){
      return console.log(date);
    }
    if(date === desiredEndDate){
        return 'desired-end-date';
    }
    return null; // Return null for no custom class
  };
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
                       tileContent={tileContent}
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
const CalendarContainer=styled(Calendar)`

    // background-color:#d4f7d4;
    width:auto;
    border-radius:30px;
    background: #FFFBFB;
    border:0px;
    // height:280px;
    //  padding-left:50px;
    //  line-height:30px;
    // font-size:300px;
    // line-weight:100px;

    // .DayPicker {
    //     /* Adjust the size of the calendar container */
    //     width: 100px;
    //     height: 10px;
    //     color:yellow;
    //   }
    
    //   .DayPicker-Month {
    //     /* Adjust the size of each month within the calendar */
    //     width: 100%;
    //     height: 400px;
    //   }
    
    //   .DayPicker-Day {
    //     /* Adjust the size of each day within the calendar */
    //     width: 40px;
    //     height: 40px;
    //     font-size: 16px;
    //   }
    .desired-range {
        background-color: #ffcccc;
        color:Blue;
        /* Add any other desired styles */
      }
      
`;