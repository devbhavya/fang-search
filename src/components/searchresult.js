import React from "react";
import "./searchresult.css";
const Searchresult = (props) => {
  return (
    <>
      <div className="group1">
        <img
          className="group_icon1"
          src={props.items[0].image}
          alt="icon1"
        ></img>
        <p className="group_title1">{props.items[0].title}</p>
        <p className="group_url1">{props.items[0].url}</p>
        <p className="group_title12">{props.items[0].title2}</p>
        <p className="group_desc1">{props.items[0].desc}</p>
        <p className="group_last_visited1">{props.items[0].last_visited}</p>
        <div className="sublink_group1">
          <p className="sublinks_style">{props.items[0].sublink1}</p>
          <p  className='sublinks_desc_style'>{props.items[0].sublink1_desc}</p>
          <p className="sublinks_style">{props.items[0].sublink2}</p>
          <p  className='sublinks_desc_style'>{props.items[0].sublink2_desc}</p>
          <p className="sublinks_style">{props.items[0].sublink3}</p>
          <p  className='sublinks_desc_style'>{props.items[0].sublink3_desc}</p>
          <p className="sublinks_style">{props.items[0].sublink4}</p>
          <p  className='sublinks_desc_style'>{props.items[0].sublink4_desc}</p>
          <p className="sublinks_style">{props.items[0].sublink5}</p>
        </div>
      </div>
      <div className="group2">
        <img
          className="group_icon2"
          src={props.items[1].image}
          alt="icon2"
        ></img>
        <p className="group_title2">{props.items[1].title}</p>
        <p className="group_url2">{props.items[1].url}</p>
        <p className="group_title22">{props.items[1].title2}</p>
        <p className="group_desc2">{props.items[1].desc}</p>
        <p className="group_last_visited2">{props.items[1].last_visited}</p>
        <p className="group_url22">{props.items[1].url2}</p>
        <p className="group_title23">{props.items[1].title3}</p>
        <p className="group_desc22">{props.items[1].desc2}</p>
      </div>
      <div className="group3">
        <img
          className="group_icon3"
          src={props.items[2].image}
          alt="icon3"
        ></img>
        <p className="group_title3">{props.items[2].title}</p>
        <p className="group_url3">{props.items[2].url}</p>
        <div className="sublinks_group3">
        <p className="sublinks_style">{props.items[2].sublink1}</p>
          <p  className='sublinks_desc_style'>{props.items[2].sublink1_desc}</p>
          </div>
      </div>
    </>
  );
};

export default Searchresult;
