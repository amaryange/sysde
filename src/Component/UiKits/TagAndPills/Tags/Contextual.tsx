import React from 'react';
import { Badge, Card, CardBody, Col } from 'reactstrap';
import { ContextualBadgeData } from '@/Data/UiKitsData/TagAndPills/ContextualBadgeData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ContextualVariations } from '@/Constant';

const ContextualBadge = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={ContextualVariations} />
        <CardBody>
          {ContextualBadgeData.map((element, index) => (
            <Badge key={index} color={element.color}>
              {element.text}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualBadge;
