import React from 'react';
import { Badge, Button, CardBody,  Col } from 'reactstrap';
import { ButtonPartData } from '@/Data/UiKitsData/TagAndPills/ButtonPartData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const ButtonPart = () => {
  return (
    <Col sm='12' xl='6'>
      <div className='card height-equal'>
        <CardHeaderCommon title='Badges as part buttons' />
        <CardBody>
          {ButtonPartData.map((element, index) => (
            <div key={index} className='mb-3'>
              <Button color={element.color}>
                {element.text}
                <Badge className='badge rounded-pill badge-light text-dark ms-1' color='light'>
                  {element.icon}
                </Badge>
              </Button>
            </div>
          ))}
        </CardBody>
      </div>
    </Col>
  );
};

export default ButtonPart;
