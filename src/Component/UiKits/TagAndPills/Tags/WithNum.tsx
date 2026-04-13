import React from 'react';
import { Badge, Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Javascript, TagsWithNumber } from '../../../../Constant';
import { TagsWithNumData } from '@/Data/UiKitsData/TagAndPills/TagsWithNumData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const TagWithNum = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={TagsWithNumber} />
        <CardBody className='digits'>
          {TagsWithNumData.map((element, index) => (
            <Badge key={index} color={element.color} href={Javascript}>
              {element.text}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithNum;
