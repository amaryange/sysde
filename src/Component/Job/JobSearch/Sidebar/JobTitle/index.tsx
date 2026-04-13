import { useState } from 'react';
import { Button, Card, Col, Collapse } from 'reactstrap';
import JobTitleCheckBox from './JobTitleCheckBox';
import HeaderWithIcon from '@/CommonComponents/HeaderWithIcon';
import { AllJobTitle, JobTitle } from '@/Constant';

const JobTitleClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl='12'>
      <Card>
        <HeaderWithIcon Heading={JobTitle} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <JobTitleCheckBox />
          <Button className='btn-block text-center' color='primary'>
            {AllJobTitle}
          </Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default JobTitleClass;
