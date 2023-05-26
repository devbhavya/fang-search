import React from "react";
import "./links.css";
const Links = () => {
  return (
    <div className="links">
    <ul className="links-header">
      <li className="selected_link">
        <i className="bi bi-search search_svg"></i> All
      </li>
      <li>
        <i className="bi bi-newspaper"></i> News
      </li>
      <li>
        <i className="bi bi-images"></i> Images
      </li>
      <li>
        <i className="bi bi-tag"></i> Shopping
      </li>
      <li>
        <i className="bi bi-geo-alt"></i> Maps
      </li>
      <li>
        <i className="bi bi-three-dots-vertical"></i> More
      </li>
    </ul>
  </div>
  );
};

export default Links;
