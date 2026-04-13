import { InvalidFile } from '@/Constant';
import { Input } from 'reactstrap';

const FileElement = () => {
  return (
    <div className='mb-3'>
      <Input type='file' required />
      <div className='invalid-feedback'>{InvalidFile}</div>
    </div>
  );
};

export default FileElement;
