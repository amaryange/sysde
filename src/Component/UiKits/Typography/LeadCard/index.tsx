import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { LeadCardDescription } from '@/Data/CardHeaderCommonData';
import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const LeadCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={'Lead'} description={LeadCardDescription} />
        <CardBody>
          <p className='lead'>{'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.'}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeadCard;
