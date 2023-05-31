import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Header from "../ProfilePage/Header";
import './Details.css';
import Loc from './Images/loc.png';
import Cal from './Images/calend.png';
import Letter from './Images/letters.jpg';
import Team from './Images/teami.png';
import Link from './Images/linkedin.png';
import Browse from './Images/browser.jpg';
import NA from './Images/na.jpg';
import BD from './Images/drop.png';
import Emp from './Images/employee.jpg';
import pro from './Images/profile.jpg';
import Logo from './Images/fanglogo.jpg';
function Details(){
    const {userId} = useParams();
    const [details,setDetails] = useState("");
    useEffect(()=>{
      axios.get("http://localhost:8000/searchdata?searchdata="+userId).then(
        res => setDetails(res.data.data[0])
      )
    })
    return (
        <>
        <Header></Header>
        <div className="profile_page">
            <div className="emp_profile">
                <img src={pro} className="emp_img"></img>
                <p className="emp_heading">Employee Profile</p>
            </div>
            <div className="emp_details">
                <img src={pro} className="emp_pro_img"></img>
                <p className="emp_name">{details.Name}</p>
                {/* <p className="emp_name">{details[0].Fang_Email_Id}</p> */}
                {/* {details.map(item => <li key={item.id}>{item.Fang_Email_Id}</li>)} */}
                <ul className='emp_data'>
                    <li>
                        <img src={Loc} className='svgs'></img>
                        <p className='title'>Location</p>
                        <p className='value'>Hyderabad, Telangana, India</p>                    
                    </li>
                    <li>
                        <img src={Letter} className='svgs'></img>
                        <p className='title'>Contact</p>
                        <p className='value'>{details.Fang_Mail_Id}</p>
                        <p className='value'>{details.Fang_Email_Id}</p>                    
                    </li>
                    <li>
                        <img src={Link} className='svgs'></img>
                        <p className='title'>LinkedIn</p>
                        <p className='value'>linkedin.com/in/{details.Name}</p>                    
                    </li>
                    <li>
                        <img src={Cal} className='svgs'></img>
                        <p className='title'>DOB</p>
                        <p className='value'>{details.DOB_as_per_certificate}</p>                    
                    </li>
                    <li>
                        <img src={Team} className='svgs'></img>
                        <p className='title'>Team</p>
                        <p className='value'>FrontEnd</p>                    
                    </li>
                    <li>
                        <img src={BD} className='svgs'></img>
                        <p className='title'>BloodGroup</p>
                        <p className='value'>O+</p>                    
                    </li>
                    <li>
                        <img src={NA} className='svgs'></img>
                        <p className='title'>Type</p>
                        <p className='value'>N/A</p>                    
                    </li>
                </ul>
            </div>
            <div className="emp_details_mobile">
                <img src={pro} className="emp_pro_img_mobile"></img>
                <p className="emp_name_mobile">{details.Name}</p>
                <ul className='emp_data_mobile'>
                    <li>
                        <img src={Loc} className='svgs'></img>
                        <p className='title'>Location</p>
                        <p className='value'>Hyderabad, Telangana, India</p>                    
                    </li>
                    <li>
                        <img src={Letter} className='svgs'></img>
                        <p className='title'>Contact</p>
                        <p className='value'>{details.Fang_Mail_Id}</p>
                        <p className='value'>{details.Fang_Email_Id}</p>                    
                    </li>
                    <li>
                        <img src={Link} className='svgs'></img>
                        <p className='title'>LinkedIn</p>
                        <p className='value'>linkedin.com/in/{details.Name}</p>                    
                    </li>
                    <li>
                        <img src={Cal} className='svgs'></img>
                        <p className='title'>DOB</p>
                        <p className='value'>{details.DOB_as_per_certificate}</p>                    
                    </li>
                    <li>
                        <img src={Team} className='svgs'></img>
                        <p className='title'>Team</p>
                        <p className='value'>FrontEnd</p>                    
                    </li>
                    <li>
                        <img src={BD} className='svgs'></img>
                        <p className='title'>BloodGroup</p>
                        <p className='value'>O+</p>                    
                    </li>
                    <li>
                        <img src={NA} className='svgs'></img>
                        <p className='title'>Type</p>
                        <p className='value'>N/A</p>                    
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Details;