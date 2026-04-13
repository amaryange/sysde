import { AssetsImagePath } from "@/Constant";
import Image from "next/image";
import React from "react";
import { PlayCircle } from "react-feather";

const Timeline3 = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img   cd-picture bg-success bounce-in">
        <PlayCircle />
      </div>
      <div className="cd-timeline-content">
        <h4 className="vertical-timeline-element-subtitle">Title of section 3</h4>
        <Image className="img-fluid p-t-20" src={`${AssetsImagePath}/banner/1.jpg`} alt="timelineImg1" width={472} height={333} unoptimized/>
        <span className="cd-date">Jan 24</span>
      </div>
    </div>
  );
};

export default Timeline3;
