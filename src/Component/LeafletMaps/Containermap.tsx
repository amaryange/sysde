import React from "react";
import { Row } from "reactstrap";
import WorldMap from "./WorldMap";
import UKMap from "./UKMap";
import IndiaMap from "./IndiaMap";
import AustraliaMap from "./AustraliaMap";

const Containermap = () => {
  return (
    <Row>
      <WorldMap />
      <UKMap />
      <IndiaMap />
      <AustraliaMap />
    </Row>
  );
};

export default Containermap;
