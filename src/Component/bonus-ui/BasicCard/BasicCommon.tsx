import { BasicCardData } from '@/Data/BonusUiData/BasicCard';
import { Col, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';

const BasicCommon = () => {
  return BasicCardData.map((item) => (
    <Col sm='12' xl='6' key={item.id}>
      <Card className={item.flatclass}>
        <CardHeader className={item.colorClass ? item.colorClass : item.headerClass ? item.headerClass : ''}>
          <h5>
            {item.icon ? item.icon : ''}
            {item.title}
          </h5>
          {item.span ? <span>{item.span}</span> : ''}
        </CardHeader>
        <CardBody className={item.colorClass ? item.colorClass : item.bodyClass && item.bodyClass}>
          <p className='mb-0'>{item.pare}</p>
        </CardBody>
        {item.footer && (
          <CardFooter className={item.colorClass ? item.colorClass : item.footerClass && item.footerClass}>
            <h6 className='mb-0'>{item.footer}</h6>
          </CardFooter>
        )}
      </Card>
    </Col>
  ));
};

export default BasicCommon;
