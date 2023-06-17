import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EmployeeTable.css";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";


const baseURL = "http://localhost:8000/employees";
const EmployeeTable = (props) =>{
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      const history = useNavigate();
      const [data, setData] = useState([]);
        React.useEffect(() => {
            axios.get(baseURL).then((response) => {
            setData(response.data.data);
            });
        }, []);
        var count = 1;
    return(
        <div className="table-container">
            <table class="table">
            <thead>
                <tr>
                    <th>SI.No</th>
                    <th>Employee Name</th>
                    <th>Schedule</th>
                    <th>Date Of Birth</th>
                    <th id="status">Status</th>
                    <th id="Actions-Header">Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                        data.map((item) =>(
                            <tr onClick={()=>{history('/profile/'+item.Name)}}>
                                <td>{count++}</td>
                                <td><i class="bi bi-person-circle" ></i><p className="Table-Employee-Name">{item.Name}</p></td>
                                <td>Morning Shift</td>
                                <td>{item.DOB_as_per_certificate.slice(0,10)}</td>
                                <td >
                                <button className={`status-button active`} >Active</button>
                                </td>
                                <td>
                                <button className="actions-button"><i class="bi bi-pencil-fill"></i></button>
                                <button className="actions-button"><i class="bi bi-three-dots"></i></button>
                                </td>
                            </tr>

                        ))
                    }
            </tbody>
        </table>
        </div>
    
    );
};
export default EmployeeTable;