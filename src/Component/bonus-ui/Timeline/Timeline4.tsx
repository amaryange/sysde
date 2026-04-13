import React from "react";
import { Activity } from "react-feather";

const Timeline4 = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-location bg-info bounce-in ">
        <Activity />
      </div>
      <div className="cd-timeline-content">
        <h4 className="vertical-timeline-element-subtitle">Title of section 4</h4>
        <audio controls preload="none">
          <source src={"./public/assets/audio/horse.ogg"} type="audio/ogg" />
          {"Your browser does not support the audio element."}
        </audio>
        <span className="cd-date">Feb 14</span>
      </div>
    </div>
  );
};

export default Timeline4;
