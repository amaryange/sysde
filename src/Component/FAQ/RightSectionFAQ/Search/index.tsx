import { SearchArticles } from "@/Constant";
import React from "react";
import { HelpCircle, Search } from "react-feather";
import { Card, CardBody, CardHeader, Col, Input,  } from "reactstrap";

const SearchArticle = () => {
  return (
    <Col lg="12">
      <Card className="card-mb-faq xs-mt-search">
        <CardHeader className="faq-header">
          <h5>{SearchArticles}</h5>
          <HelpCircle />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="faq-form">
            <Input type="text" placeholder="Search.." />
            <Search className="search-icon" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SearchArticle;
