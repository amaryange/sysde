import React from 'react';
import { Alert, Card, CardBody, Col } from 'reactstrap';
import { Javascript, LinkColor } from '../../../Constant';
import { lightLinkColorData } from '@/Data/UiKitsData/Alert/LightLinkColorData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { LightLinkColorDescription } from '@/Data/CardHeaderCommonData';

const LightLinkColor = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={LinkColor} description={LightLinkColorDescription} />
        <CardBody>
          {lightLinkColorData.map((element, index) => (
            <Alert key={index} color={element.color}>
              {element.text}
              <a className='alert-link' href={Javascript}>
                {element.example}
              </a>
              .Click It
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightLinkColor;
