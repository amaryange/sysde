import { toast } from 'react-toastify';
import { Button } from 'reactstrap';
import { autoCloseDynamicDatas } from '@/Data/BonusUiData/Boostrap notify/AutoCloseDynamic';

const AutoCloseDynamic = () => {
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
  return autoCloseDynamicDatas.map((data, index) => (
    <Button
      key={index}
      name={data.tittle}
      color={data.color}
      onClick={() => {
        autoCloseToaster(data.tittle);
      }}>
      {data.heading}
    </Button>
  ));
};

export default AutoCloseDynamic;
