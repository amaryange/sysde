import React from "react";
import { Container, Row } from "reactstrap";
import BasicTabCard from "./BasicTabCard";
import BottomLeftAlignCard from "./BottomLeftAlignCard";
import PillDangerTab from "./PillDangerTab";
import PillDarkTab from "./PillDarkTab";
import PillInfoTab from "./PillInfoTab";
import PillPrimaryTab from "./PillPrimaryTab";
import PillSecondaryTab from "./PillSecondaryTab";
import PillSucessTab from "./PillSucessTab";
import PillTab from "./PillTab";
import PillTabWithIcon from "./PillTabWithIcon";
import PillWarningTab from "./PillWarningTab";
import RighhtAlign from "./RighhtAlign";
import Vertical from "./Vertical";
import WithIcon from "./WithIcon";

const BootstrapTabsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <BasicTabCard />
        <BottomLeftAlignCard />
        <WithIcon />
        <RighhtAlign />
        <Vertical />
        <PillTab />
        <PillTabWithIcon />
        <PillDarkTab />
        <PillPrimaryTab />
        <PillSecondaryTab />
        <PillSucessTab />
        <PillInfoTab />
        <PillWarningTab />
        <PillDangerTab />
      </Row>
    </Container>
  );
};

export default BootstrapTabsContainer;
