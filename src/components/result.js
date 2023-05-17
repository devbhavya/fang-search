import React from "react";
import Searchresult from "./searchresult";
import globe from './images/globe.svg'
import linkedin from './images/linkedin.svg'
import github from './images/github.svg'
import "./result.css";

const expenses = [
  {
    id: "e1",
    title: "Fang Technologies",
    url:"https://fangtechnologies.com/",
    image: globe,
    title2: "Fang Technologies",
    desc: "Fang Technologies is a leading of innovative software solutions for the IT  industry. founded in 2022 and based in hyderabad,our mission is to improve... ",
    last_visited: "You’ve visited this page 5 times.Lastvisit:18/4/23",
    sublink1: "Contact us",
    sublink1_desc: "Fang Technologies is a leading provider of innovative software...",
    sublink2: "Our services",
    sublink2_desc: "eCommerce.We build e- commerce platform where both...",
    sublink3: "About",
    sublink3_desc: "Take your business to the next level...Software publishing...",
    sublink4: "Our Products",
    sublink4_desc: "Ai Enabled Monitoring System.Monitor your user flow in...",
    sublink5: "More results from fangtechnologies.com >>"
  },
  {
    id: "e2",
    title: "Linkedin",
    url:"https://in.linkedin.com>company>fang-technologies ",
    image: linkedin,
    title2: "Fang Technologies",
    desc: "Fang Technologies is a leading of innovative software solutions for the IT  industry. founded in 2022 and based in hyderabad,our mission is to improve... ",
    last_visited: "You’ve visited this page 5 times.Lastvisit:18/4/23",
    url2: "https://in.linkedin.com>company>fang-technologies ",
    title3: "Fangs Technology Pvt Ltd (vivo-TN)",
    desc2: "vivo the brand  is owned by chinese electronic manufacturing giant BBK Electronics industry co., ltd.BBK factory was founded in 1995 and it is headed by MR."
  },
  {
    id: "e3",
    title: "GitHub",
    url:"https://github.com>company>fang-technologies-llc ",
    image: github,
    sublink1: "Fang Technologies LLCs",
    sublink1_desc: "GitHub is where  Fang Technologies LLC builds software.  ",
  },

];

const Result = () => {
  return (
    <div>
      <p className="results_count">About 18,20,00,000 results(0.47seconds) </p>
      <Searchresult items={expenses}></Searchresult>
    </div>
  );
};

export default Result;
