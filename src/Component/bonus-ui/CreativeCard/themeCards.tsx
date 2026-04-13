import { Fragment } from 'react';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import { CreativeCardData } from '@/Data/BonusUiData/CreativeCard';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const CreativeCardsCommon = () => {
  return CreativeCardData.map((item) => (
    <Col sm='12' xl='6' key={item.id}>
      <Card className={item.cardClass && item.cardClass}>
        <CardHeader className={item.headerClass}>
          <h5>{item.title}</h5>
        </CardHeader>
        <CardBody>
          <p>{item.pare}</p>
        </CardBody>
      </Card>
    </Col>
  ));
};

export default CreativeCardsCommon;
