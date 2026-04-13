import { Card, CardBody, Col, Media } from 'reactstrap';
import { AssetsImagePath, Javascript, MoreComments, ELANA } from '@/Constant';
import AddComments from '../Post1/AddComment';
import Image from 'next/image';
import { TimelineParagraph } from '@/Data/SocialApp';
import LikeAndShare from '../Post1/LikeAndShare';
import { MoreVertical } from 'react-feather';
import Comments2 from './Comments2';

const Post2 = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardBody>
          <div className='new-users-social'>
            <div className='d-flex'>
              <img className='rounded-circle image-radius m-r-15' src={`${AssetsImagePath}/user/1.jpg`} alt='user' />
              <div className='flex-grow-1'>
                <h6 className='mb-0 f-w-700'>{ELANA}</h6>
                <p>January, 12,2023</p>
              </div>
              <span className='pull-right mt-0'>
                <MoreVertical />
              </span>
            </div>
          </div>
          <Image height={600} width={900} className='img-fluid' alt='user' src={`${AssetsImagePath}/social-app/timeline-2.png`} unoptimized/>
          <div className='timeline-content'>
            <p>{TimelineParagraph}</p>
            <LikeAndShare />
            <div className='social-chat'>
              <div className='text-center'>
                <a href={Javascript}>{MoreComments}</a>
              </div>
            </div>
            <Comments2 />
            <AddComments />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Post2;
