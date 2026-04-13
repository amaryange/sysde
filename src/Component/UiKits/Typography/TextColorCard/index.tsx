import { TextColorCardData } from '@/Data/UiKitsData/Typography/TextColorCardData';
import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { TextColor } from '../../../../Constant/index';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const TextColorCard = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={TextColor} description={'You can Give text color by using txt-* className'} />
        <CardBody>
          {TextColorCardData.map((element, index) => (
            <p key={index} className={element.name}>
              {element.text} <code>{`.${element.name}`}</code>
              {' class'}
            </p>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColorCard;
