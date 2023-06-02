import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
const Blank2 = () => {
    const history = useNavigate();
    const [data,setData] = useState("");
    const changeHandler = (e) =>{
        setData(e.target.value);
    }   
  return (
    <div>
        <input type='text' onChange={changeHandler} ></input>
        <i className="bi bi-search sb_search_svg" onClick={()=>{history('/profile/'+data)}} ></i>
    </div>
  )
}

export default Blank2