import { Facebook } from 'react-feather';
import { toast } from 'react-toastify';
import { Button } from 'reactstrap';

const FacebookCus = () => {
  const handlesubmit = () => {
    toast.error("This is only demo purpose, click on the Sign In button to login.");
  };
  return (
    <Button color='light' onClick={handlesubmit}>
      <Facebook className='txt-fb' />
    </Button>
  );
};

export default FacebookCus;
