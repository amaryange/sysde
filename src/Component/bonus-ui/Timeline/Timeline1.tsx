import React from "react";
import { Edit } from "react-feather";

const Timeline1 = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-picture bg-primary">
        <Edit />
      </div>
      <div className="cd-timeline-content">
        <h4 className="vertical-timeline-element-subtitle">Title of section 1</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
        <span className="cd-date">Jan 14</span>
      </div>
    </div>
  );
};

export default Timeline1;
