import { Card, Col, CardHeader, CardBody, Row } from "reactstrap";
import { MoreVertical } from "react-feather";
import { HobbiesAndInterestsData } from "@/Data/SocialApp";

const HobbiesAndInterests = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="social-header">
          <h5>
            <span>Hobbies And Interests</span>
            <span className="pull-right">
              <MoreVertical />
            </span>
          </h5>
        </CardHeader>
        <CardBody>
          {HobbiesAndInterestsData.map((item, i) => (
            <Row className="details-about mb-3" key={i}>
              <Col sm="6">
                <div className="your-details">
                  <span className="f-w-600">{item.heading1}:</span>
                  <p>{item.paragraph1}</p>
                </div>
              </Col>
              <Col sm="6">
                <div className="your-details your-details-xs">
                  <span className="f-w-600">{item.heading2}</span>
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

export default HobbiesAndInterests;
