import React from "react";
import { Video } from "react-feather";

const Timeline2 = () => {
  return (
      <div className="cd-timeline-block">
        <div className="cd-timeline-img  cd-movie bg-secondary">
          <Video />
        </div>
        <div className="cd-timeline-content">
          <h4 className="vertical-timeline-element-subtitle">Title of section 2</h4>
          <div className="ratio ratio-21x9 m-t-20">
            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen />
          </div>
          <span className="cd-date">Jan 18</span>
        </div>
      </div>
  );
};

export default Timeline2;
