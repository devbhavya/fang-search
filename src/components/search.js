import React from "react";
import { Link } from "react-router-dom";
import Blank from "./SearchResults/blank";
import { useNavigate } from "react-router-dom";
import "./search.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:8000/searchdata?searchdata=";

const Search = () => {
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
  const { userId } = useParams();
  console.log(userId);
  return (
    <>
      <form className="searchbar">
        <input
          className="searchbar_input"
          type="text"
          onChange={changeHandler}
          defaultValue={userId}
          autoFocus
          required
          placeholder="Enter Your Name / Email / Id"
        />
        <i className="bi bi-x-lg sb_cross_svg"></i>
        <i className="sb_line"></i>
        <i class="bi bi-mic-fill"></i>
        <i className="bi bi-camera-fill sb_camera_svg"></i>
        <i
          className="bi bi-search sb_search_svg"
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
        {value == "" ? (
          <div className="suggestions_main_page"></div>
        ) : (
          <div className="suggestions_main_page">
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
    </>
  );
};

export default Search;
