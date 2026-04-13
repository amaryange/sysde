import React, { Fragment, useState } from 'react';
import { Media, Col, Card, CardHeader, Collapse, CardBody, Button } from 'reactstrap';
import { UpcomingCourseData } from '@/Data/Learning';
import { CourseBy, Javascript, UpcomingCourses } from '@/Constant';

const UpcomingCourse = () => {
  const [isDevelopment, setIsDevelopment] = useState(true);
  return (
    <Fragment>
      <Col xl='12'>
        <Card>
          <CardHeader>
            <h5 className='mb-0'>
              <Button className=' btn-link' onClick={() => setIsDevelopment(!isDevelopment)} color='transperant'>
                {UpcomingCourses}
              </Button>
            </h5>
          </CardHeader>
          <Collapse isOpen={isDevelopment}>
            <CardBody className='upcoming-course'>
              {UpcomingCourseData.map((item, i) => (
                <Media key={i}>
                  <Media body>
                    <span className='f-w-600'>{item.title}</span>
                    <span className='d-block'>
                      {CourseBy}
                      <a href={Javascript}> Lorem ipsum</a>
                    </span>
                    <span className="d-block">
                      <i className="fa fa-star font-warning"></i>
                      <i className="fa fa-star font-warning"></i>
                      <i className="fa fa-star font-warning"></i>
                      <i className="fa fa-star font-warning"></i>
                      <i className="fa fa-star-half-o font-warning"></i>
                    </span>
                  </Media>
                  <div>
                    <h5 className='mb-0 font-primary'>{item.day}</h5>
                    <span className='d-block'>{item.month}</span>
                  </div>
                </Media>
              ))}
            </CardBody>
          </Collapse>
        </Card>
      </Col>
    </Fragment>
  );
};

export default UpcomingCourse;
