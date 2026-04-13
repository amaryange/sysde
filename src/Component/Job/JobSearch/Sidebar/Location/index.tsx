import { useState } from 'react';
import { Col, Card, CardBody, Collapse, Button } from 'reactstrap';
import LocationCheckBox from './LocationCheckBox';
import HeaderWithIcon from '@/CommonComponents/HeaderWithIcon';
import { AllLocations, LocationHeading } from '@/Constant';
const Location = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl='12'>
      <Card>
        <HeaderWithIcon Heading={LocationHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className='animate-chk'>
            <LocationCheckBox />
          </CardBody>
          <Button className=' btn-block text-center' color='primary'>
            {AllLocations}
          </Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default Location;
