import { BackendDevelopment, Categories, Design, Development, FrontendDevelopment, Javascript } from '@/Constant';
import { CategoriesLearningData } from '@/Data/Learning';
import React, { useState } from 'react';
import { Badge, Button, Card, CardHeader, Col, Collapse } from 'reactstrap';

const CategoriesLearning = () => {
  const [isDesign, setIsDesign] = useState(true);
  return (
    <Col xl='12'>
      <Card>
        <CardHeader>
          <h5 className='mb-0'>
            <Button className='btn-link ps-0' onClick={() => setIsDesign(!isDesign)} color='transperant'>
              {Categories}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isDesign}>
          <div className='collapse show' id='collapseicon1'>
            <div className='categories'>
              <div className='learning-header'>
                <span className='f-w-600'>{Design}</span>
              </div>
              <ul>
                {CategoriesLearningData.map((item, i) => (
                  <li key={i}>
                    <a href={Javascript}>{item.title}</a>
                    <Badge color='primary' className='pull-right'>
                      {item.number}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div className='categories pt-0'>
              <div className='learning-header'>
                <span className='f-w-600'>{Development}</span>
              </div>
              <ul>
                <li>
                  <a href={Javascript}>{FrontendDevelopment}</a>
                  <Badge color='primary' className='pull-right'>
                    {'48'}
                  </Badge>
                </li>
                <li>
                  <a href={Javascript}>{BackendDevelopment}</a>
                  <Badge color='primary' className='pull-right'>
                    {'19'}
                  </Badge>
                </li>
              </ul>
            </div>
          </div>
        </Collapse>
      </Card>
    </Col>
  );
};

export default CategoriesLearning;
