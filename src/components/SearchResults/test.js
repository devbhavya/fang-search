import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:8000/searchdata?searchdata=";

const Test = () => {
    const history = useNavigate();
  const [value, setValue] = useState([]);
  const [data, setData] = useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.data);
    });
  }, []);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="name"
      ></input>
      {value == "" ? (
        <div></div>
      ) : (
        <div>
          {data
            .filter((item) =>
              item.Name.toLowerCase().includes(value.toLowerCase())
            )
            .map((item) => (
              <p onClick={()=> {history("/profile/"+item.Name);}}>{item.Name}</p>
            ))}
        </div>
      )}
    </div>
  );
};

export default Test;
