import React, { useState } from "react";
import "./Search.css";
import Logo from "./fanglogo.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:8000/searchdata?searchdata=";

function Search() {
  const history = useNavigate();
  const [value, setValue] = useState([]);
  const [data, setData] = useState("");
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.data);
    });
  }, []);
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="starting_page">
      <img src={Logo} alt="fang logo" className="search_bar_logo"></img>
      <br></br>
      <br></br>
      <form>
        <input
          class="search_bar"
          type="text"
          title="Search"
          value={value}
          onChange={changeHandler}
          required
          autoFocus
          placeholder="Enter Your Name / Email / Id"
        ></input>
        <br></br>
        <i
          className="bi bi-search starting_page_search"
          onClick={() => {
            history("/profile/" + value);
          }}
        ></i>
        <button
          class="fang_search_button"
          onClick={() => {
            history("/profile/" + value);
          }}
          type="submit"
        >
          Fang Search
        </button>
        <i class="bi bi-mic starting_page_mic"></i>
        <i class="bi bi-camera starting_page_camera"></i>
        {value == "" ? (
          <div className="suggestions"></div>
        ) : (
          <div className="suggestions">
            {data
              .filter((item) =>
                item.Name.toLowerCase().includes(value.toLowerCase())
              )
              .map((item) => (
                <p className="suggestions_value"
                  onClick={() => {
                    history("/profile/" + item.Name);
                  }}
                >
                  {item.Name}
                </p>
              ))}
          </div>
        )}
      </form>
      <br></br>
      <p className="fang_offerd_in">Fang offered in: </p>
      <ul className="desktop_languages">
        <li>Hindi</li>
        <li>
          <span style={{ color: "blue" }}>తెలుగు</span>
        </li>
        <li>বাংলা</li>
        <li>Marati</li>
        <li>ગુજરાતી</li>
        <li>ಕನ್ನಡ</li>
        <li>ગુજરાતી</li>
        <li>മലയാളം</li>
      </ul>
    </div>
  );
}
export default Search;
