import React from "react";
import "./links.css";
const Links = () => {
  return (
    <div className="links-header">
      <ul className="links">
        <li><i class="bi bi-search search_svg"></i> <span className="firstlink"> All</span></li>
        <li><i class="bi bi-newspaper"></i> News</li>
        <li><i class="bi bi-images"></i> Images</li>
        <li><i class="bi bi-tag"></i> Shopping</li>
        <li><i class="bi bi-geo-alt"></i> Maps</li>
        <li><i class="bi bi-three-dots-vertical"></i> More</li>
      </ul>
      <p className="tools">Tools</p>
      <svg className="blue_rectangle" width="35" height="5" viewBox="0 0 35 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="35" height="5" rx="1" fill="#2D1DDD" fill-opacity="0.88"/>
</svg>
<hr className="horizontal_line1"></hr>

    </div>
  );
};

export default Links;
