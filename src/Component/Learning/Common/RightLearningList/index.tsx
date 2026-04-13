import React, { Fragment, useContext, useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Javascript } from '@/Constant';
import FindCourses from './FindCourse';
import UpcomingCourse from './UpcomingCourses';
import CategoriesLearning from './Categories';

const RightLearning = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Col xl='3' className='box-col-4'>
      <div className='job-sidebar md-sidebar'>
        <Button color='primary' className='md-sidebar-toggle job-toggle' href={Javascript} onClick={onClickHandle}>
          Learning Filter
        </Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
          <div className='default-according style-1 faq-accordion job-accordion' id='accordionoc'>
            <Row>
              <FindCourses />
              <CategoriesLearning />
              <UpcomingCourse />
            </Row>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default RightLearning;
