import React,{useState} from 'react';
import './Search.css';
import Logo from './fanglogo.jpg';
import {useNavigate} from 'react-router-dom'
function Search() { 
    const history = useNavigate();
    const [data,setData] = useState("");
    const changeHandler = (e) =>{
        setData(e.target.value);
    }
    
    return(
        <div className='starting_page'>
        <img src={Logo} alt="fang logo" className="search_bar_logo"></img><br></br><br></br>
        <form>
        <input class="search_bar" type="text" title="Search" onChange={changeHandler} required placeholder='Enter Your Name / Email / Id'></input><br></br>
        <i className="bi bi-search starting_page_search" onClick={()=>{history('/profile/'+data)}} ></i>
        <button class="fang_search_button" onClick={()=>{history('/profile/'+data)}} type='submit'>Fang Search</button>
        <i class="bi bi-mic starting_page_mic"></i>
        <i class="bi bi-camera starting_page_camera"></i>
        </form>
        <br></br>
        <p className='fang_offerd_in'>Fang offered in: </p>
        <ul className='desktop_languages'>
            <li>Hindi</li>
            <li><span style={{color:"blue"}}>తెలుగు</span></li>
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