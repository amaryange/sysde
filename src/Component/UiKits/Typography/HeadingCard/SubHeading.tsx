import React from "react";
import { SubHeadingData } from "@/Data/UiKitsData/Typography/SubHeadingData";
import { SubHeading } from "@/Constant";
const SubHeadings = () => {
  return SubHeadingData.map((element, index) => (
    <p key={index} className={element.className}>
      {element.title}
      <span>{SubHeading}</span>
    </p>
  ));
};

export default SubHeadings;
