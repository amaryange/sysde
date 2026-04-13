import React from "react";
import { Container, Row } from "reactstrap";
import AddRows from "./AddRows";
import ChildRows from "./ChildRows";
import RowSelectionAndDeletion from "./RowSelectionAndDeletion";
import CustomFiltering from "./CustomFiltering";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";

const APITables = () => {
  return (
    <>
      <Breadcrumbs parent='Data Table' title='API Data Tables' mainTitle='API Data Tables' />
      <Container fluid>
        <Row>
          <AddRows />
          <ChildRows />
          <RowSelectionAndDeletion />
          <CustomFiltering />
        </Row>
      </Container>
    </>
  );
};

export default APITables;
