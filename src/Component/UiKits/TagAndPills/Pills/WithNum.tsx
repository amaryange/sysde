import React from 'react';
import { Badge, Card, CardBody, Col } from 'reactstrap';
import { PillsWithNumber } from '../../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ContextualBadgeData } from '@/Data/UiKitsData/TagAndPills/ContextualBadgeData';

const PillWithNum = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={PillsWithNumber} />
        <CardBody className='digits'>
          {ContextualBadgeData.map((element, index) => (
            <Badge key={index} className='badge rounded-pill' color={element.color}>
              {element.text}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithNum;
