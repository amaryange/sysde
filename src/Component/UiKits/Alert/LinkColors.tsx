import React from 'react';
import { Alert, Card, CardBody, Col } from 'reactstrap';
import { LinkColorData } from '@/Data/UiKitsData/Alert/LinkColorData';
import { Javascript } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { LinkColorsDescription } from '@/Data/CardHeaderCommonData';

const LinkColors = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={'Link color in theme-color'} description={LinkColorsDescription} />
        <CardBody>
          <Alert color={'primary dark'}>
            {'This is a primary alert with'}{' '}
            <a className='alert-link' href={Javascript}>
              {'an example link'}
            </a>
            {'.Click It'}
          </Alert>
          {LinkColorData.map((element, index) => (
            <Alert key={index} color={`${element.color} dark`}>
              {element.text}{' '}
              <a className='alert-link' href={Javascript}>
                {element.link}
              </a>
              {element.click}
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkColors;
