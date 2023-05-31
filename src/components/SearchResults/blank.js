import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8000/interns";

const Blank = (props) => {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.data);
    });
  }, []);
  return (
    <div>
      <ul> 
        {data.map(item=><Link to="/profile"><li key={item.ID}>{item.Name}</li></Link>)}
      </ul>
    </div>
  );
};

export default Blank;
