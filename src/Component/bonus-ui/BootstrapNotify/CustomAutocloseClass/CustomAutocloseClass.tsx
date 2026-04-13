import { Col, Card, CardBody, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import AutoCloseDynamic from './AutoCloseDynamic';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CustomAutoclose } from '@/Constant';

const CustomAutocloseClass = () => {
  const autoCloseToaster = (toastName: string) => {
    switch (toastName) {
      case 'autoclose1Toast':
        toast.success("Success Notification !", {
          position: "top-right",
          autoClose: 15000,
        });
        break;
      case 'autoclose2Toast':
        toast.info("Info Notification !", {
          position: "top-right",
          autoClose: 5000,
        });
        break;
      case 'autoclose3Toast':
        toast.warn("Warning Notification !", {
          position: "top-right",
          autoClose: 1000,
        });
        break;
      case 'autoclose4Toast':
        toast.error("Danger Notification !", {
          position: "top-right",
          autoClose: 500,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={CustomAutoclose} />
        <CardBody>
          <div className='btn-showcase'>
            <Button color='success' onClick={() => autoCloseToaster('autoclose1Toast')}>
              AutoCloseIn15000Sec
            </Button>
            <AutoCloseDynamic />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomAutocloseClass;
