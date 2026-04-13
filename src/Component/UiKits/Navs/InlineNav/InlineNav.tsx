import { Box } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import DynamicNav from './DynamicNav';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Base, Javascript } from '@/Constant';
const InlineNav = () => {
  return (
    <Col xl='6' className='xl-40' lg='12'>
      <Card>
        <CardHeaderCommon title='Inline Nav' />
        <CardBody>
          <ul className='icon-lists simple-list border navs-icon inline-nav'>
            <li>
              <a href={Javascript}>
                <Box />
                <span> {Base}</span>
              </a>
            </li>
            <DynamicNav />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineNav;
