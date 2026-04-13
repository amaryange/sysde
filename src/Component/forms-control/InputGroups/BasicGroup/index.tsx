import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import BacicGroupCardBody from './BasicGroupCardBody';
import { BasicInputGroups, Cancel, Submit } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const BasicGroup = () => {
  return (
    <Card>
      <CardHeaderCommon title={BasicInputGroups} />
      <CardBody>
        <BacicGroupCardBody />
      </CardBody>
      <CardFooter>
        <Button color='primary' type='submit' className='me-2'>
          {Submit}
        </Button>
        <Button color='light' type='reset'>
          {Cancel}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BasicGroup;
