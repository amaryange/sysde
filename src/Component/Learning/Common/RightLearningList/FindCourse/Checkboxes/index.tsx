import React from "react";
import CatCheckBox from "./CheckBox/CatCheckBox";
import DurationCheckBox from "./CheckBox/DurationCheck";
import PriceCheck from "./CheckBox/PriceCheck";
import StatusCheck from "./CheckBox/StatusCheck";

const CheckBoxes = () => {
  return (
    <>
      <CatCheckBox />
      <DurationCheckBox />
      <PriceCheck />
      <StatusCheck />
    </>
  );
};

export default CheckBoxes;
