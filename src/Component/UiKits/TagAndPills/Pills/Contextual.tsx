import React from 'react';
import { Badge, Card, CardBody, Col } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ContextualBadgeData } from '@/Data/UiKitsData/TagAndPills/ContextualBadgeData';
import { ContextualVariations } from '@/Constant';

const ContextualPills = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={ContextualVariations} />
        <CardBody>
          {ContextualBadgeData.map((element, index) => (
            <Badge className='rounded-pill' key={index} color={element.color}>
              {element.text}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualPills;
