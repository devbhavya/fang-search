import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

import axios from "axios";
import { Link } from "react-router-dom";
import "./EmployeeListData.css";

const baseURL = "http://localhost:8000/interns";
const EmployeeListData = (props) =>{
    const history = useNavigate();
    const [data, setData] = useState([]);
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setData(response.data.data);
      });
    }, []);
    return(
        <>
            
            {
                data.map((eData)=>(
                    <div className="Employee_List-Data-Container" onClick={()=>{history('/profile/'+eData.Name)}}>
                        <i  id="EmployeeProfile" class="bi bi-person-circle fa-3x"></i>
                        <p id="Employee-List-Employee-Name">{eData.Name}</p>
                        <p id="Employee-List-Employee-Schedule">Morning Shift</p>
                        <p id="Employee-List-Employee-Dob">{eData.DOB_as_per_certificate.slice(0,10)}</p>
                        <hr id="Horizontal-Line"></hr>
                    </div>
                ))
            }
        </>
    )
};
export default EmployeeListData;