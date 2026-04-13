import { Card, CardHeader, Col, CardBody, Row } from "reactstrap";
import { MoreVertical } from "react-feather";
import { EducationAndEmploymentData } from "@/Data/SocialApp";

const EducationAndEmployment = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="social-header ">
          <h5>
            <span>Education And Employment</span>
            <span className="pull-right">
              <MoreVertical />
            </span>
          </h5>
        </CardHeader>
        <CardBody>
          {EducationAndEmploymentData.map((item, i) => (
            <Row className="details-about mb-2" key={i}>
              <Col sm="6">
                <div className="your-details">
                  <span className="f-w-600">{item.heading1}</span>
                  <p>{item.date1}</p>
                  <p>{item.paragraph2}</p>
                </div>
              </Col>
              <Col sm="6">
                <div className="your-details your-details-xs">
                  <span className="f-w-600">{item.heading2}</span>
                  <p>{item.date2}</p>
                  <p>{item.paragraph2}</p>
                </div>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default EducationAndEmployment;
