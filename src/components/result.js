import React from "react";
import {useNavigate} from 'react-router-dom'
import './result.css'
import Globe from './images/globe.svg'
import Linkedin from './images/linkedin.svg'
import Github from './images/github.svg'
// import Company from "./company";
import Androidcompany from "./androidcompany";
const data = [
  {
    id: 1,
    logo: Globe,
    title1: "Fang Technologies",
    url1: "https://fangtechnologies.com",
    title2: "Fang Technologies",
    description: "Fang Technologies is a leading of innovative software solutions for the IT  industry founded in 2022 and based in hyderabad,our mission is to improve... ",
    lastvisited: "You’ve visited this page 5 times.Lastvisit:18/4/23",
    url2: "",
    sublinks: [{ 
      id:1,
      title: "Contact Us",
      description: "Fang Technologies is a leading provider of innovative software...", 
    },
    {
      id:2,
      title: "Our servicess",
      description: "Take your business to the next level...Software publishing...", 
    },
    {
      id:3,
      title: "Our Products",
      description: "Ai Enabled Monitoring System.Monitor your user flow in...",
    },
    {
      id:4,
      title: "More results from fangtechnologies.com >>",
      description: "",
    },
  ],
  },
  {
    id: 2,
    logo: Linkedin,
    title1: "Linkedin",
    url1: "https://in.linkedin.com>company>fang-technologies ",
    title2: "Fang Technologies",
    description: "Fang Technologies is a leading of innovative software solutions for the IT  industry founded in 2022 and based in hyderabad,our mission is to improve... ",
    lastvisited: "You’ve visited this page 5 times.Lastvisit:18/4/23",
    url2: "https://in.linkedin.com>company>fang-technologies ",
    sublinks: [{ 
      id:1,
      title: "Fangs Technology Pvt Ltd (vivo-TN)",
      description: "vivo the brand  is owned by chinese electronic manufacturing giant BBK Electronics industry co.,ltd.BBK factory was founded in 1995 and it is headed by MR.", 
    },
  ],
  },
  {
    id: 3,
    logo: Github,
    title1: "GitHub",
    url1: "https://github.com>company>fang-technologies-llc ",
    title2: "",
    description: "",
    lastvisited: "",
    url2: "",
    sublinks: [{ 
      id:1,
      title: "Fang Technologies LLC",
      description: "GitHub is where  Fang Technologies LLC builds software.", 
    },
  ],
  },
  {
    id: 4,
    logo: Globe,
    title1: "Fang Technologies",
    url1: "https://fangtechnologies.com",
    title2: "Fang Technologies",
    description: "Fang Technologies is a leading of innovative software solutions for the IT  industry founded in 2022 and based in hyderabad,our mission is to improve... ",
    lastvisited: "You’ve visited this page 5 times.Lastvisit:18/4/23",
    url2: "",
    sublinks: [{ 
      id:1,
      title: "Contact Us",
      description: "Fang Technologies is a leading provider of innovative software...", 
    },
    {
      id:2,
      title: "Our servicess",
      description: "Take your business to the next level...Software publishing...", 
    },
    {
      id:3,
      title: "Our Products",
      description: "Ai Enabled Monitoring System.Monitor your user flow in...",
    },
    {
      id:4,
      title: "More results from fangtechnologies.com >>",
      description: "",
    },
  ],
  },
];
// var count = 0;
function UserList() {
  const history = useNavigate()
  return (
    <>
    <div className="search_count">About 18,20,00,000 results(0.47seconds) </div>
    <div className="search_results" onClick={()=>{history('/dashboard')}}>
      {data.map((group) => (
        <div key={group.id}>
          <img className="group_logo" src={group.logo} alt="group-logo"></img>
          {group.title1!=="" && <p className="group_title">{group.title1}</p>}
          {group.url!=="" && <p className="group_url">{group.url1}</p>}
          {group.title2!=="" && <p className="group_title2">{group.title2}</p>}
          {group.description!=="" && <p className="group_desc">{group.description}</p>}
          {group.lastvisited!=="" && <p className="group_lastvisited">{group.lastvisited}</p>}
          {group.url2!=="" && <p className="group_url2">{group.url2}</p>}
          <ul className="sublinks">
            {group.sublinks.map((subdata) => (
              <li key={subdata.id}>
                {subdata.title!=="" && <p className="subtitle">{subdata.title}</p>}
                {subdata.description!=="" && <p className="subdesc">{subdata.description}</p>}
              </li>
            ))}
          </ul>
          {group.id===1 && <Androidcompany></Androidcompany>}
        </div>
      ))}
    </div>
    </>
  );
}

export default UserList;
