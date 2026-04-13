import React from "react";
import { Container, Row } from "reactstrap";
import AjaxSourcedData from "./AjaxSourceData";
import HtmlSourcedData from "./HtmlSourcedData";
import JavaScriptSourcedData from "./JavascriptSourceData";
import ServerSideProcessing from "./ServerSide";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";

const DataSources = () => {
  return (
    <>
      <Breadcrumbs parent='Data Table ' title='Data Sources' mainTitle='Data Sources' />
      <Container fluid>
        <Row>
          <HtmlSourcedData />
          <AjaxSourcedData />
          <JavaScriptSourcedData />
          <ServerSideProcessing />
        </Row>
      </Container>
    </>
  );
};

export default DataSources;
