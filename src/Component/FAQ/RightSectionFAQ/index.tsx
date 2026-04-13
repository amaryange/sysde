import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import SearchArticle from './Search';
import NavigationFAQ from './Navigation';
import LatestUpdate from './LatestUpdate';

const RightSectionFAQ = () => {
  return (
    <Col xl='4' lg='6' md='5' className='box-col-5'>
      <Row>
        <SearchArticle />
        <NavigationFAQ />
        <LatestUpdate />
      </Row>
    </Col>
  );
};

export default RightSectionFAQ;
