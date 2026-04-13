import { AssetsImagePath } from "@/Constant";
import Image from "next/image";
import React from "react";
import { PlayCircle } from "react-feather";

const Timeline5 = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-location bg-warning bounce-in ">
        <PlayCircle />
      </div>
      <div className="cd-timeline-content">
        <h4 className="vertical-timeline-element-subtitle">Title of section 5</h4>
        <Image className="img-fluid p-t-20" src={`${AssetsImagePath}/banner/3.jpg`} width={472} height={333} alt="timelineImg2" unoptimized/>
        <span className="cd-date">Feb 18</span>
      </div>
    </div>
  );
};

export default Timeline5;
