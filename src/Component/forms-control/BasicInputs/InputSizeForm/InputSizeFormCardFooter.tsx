import { Cancel, Submit } from '@/Constant';
import { Button, CardFooter } from 'reactstrap';

const InputSizeFormCardFooter = () => {
  return (
    <CardFooter>
      <Button color='primary' type='submit' className='me-2'>
        {Submit}
      </Button>
      <Button color='light' type='reset'>
        {Cancel}
      </Button>
    </CardFooter>
  );
};

export default InputSizeFormCardFooter;
