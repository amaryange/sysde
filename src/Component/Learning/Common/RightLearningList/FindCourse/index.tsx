import React, { Fragment, useState } from "react";
import { Col, Card, CardHeader, CardBody, Input, Button } from "reactstrap";
import { Collapse } from "reactstrap";
import { Search } from "react-feather";
import CheckBoxes from "./Checkboxes";
import { Filters, FindCourse } from "@/Constant";

const FindCourses = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
    <Fragment>
      <Col xl="12">
        <Card>
          <CardHeader>
            <h5 className= "mb-0" >
              <Button className=" btn-link ps-0" onClick={() => setIsFilter(!isFilter)} color="transperant" >
                {FindCourse}
              </Button>
            </h5>
          </CardHeader>
          <Collapse isOpen={isFilter}>
            <div className="collapse show" id="collapseicon" >
              <CardBody className="filter-cards-view animate-chk">
                <div className="job-filter">
                  <div className="faq-form">
                    <Input  type="text" placeholder="Search.." />
                    <Search className="search-icon" />
                  </div>
                </div>
                <CheckBoxes />
                <Button color="primary " className="text-center">
                  {Filters}
                </Button>
              </CardBody>
            </div>
          </Collapse>
        </Card>
      </Col>
    </Fragment>
  );
};

export default FindCourses;
