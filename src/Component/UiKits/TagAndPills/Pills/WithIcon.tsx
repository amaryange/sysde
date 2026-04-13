import React from 'react';
import { Badge, Card, CardBody, Col } from 'reactstrap';
import { Javascript, PillsWithIcon } from '../../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { TagWithIconData } from '@/Data/UiKitsData/TagAndPills/TagWithIconData';

const PillWithIcon = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={PillsWithIcon} />
        <CardBody>
          {TagWithIconData.map((element, index) => (
            <Badge className='badge rounded-pill' key={index} color={element.color} href={Javascript}>
              {element.icon}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithIcon;
