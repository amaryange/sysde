import { ELANA, AssetsImagePath } from '@/Constant';
import { TimelineParagraph } from '@/Data/SocialApp';
import Image from 'next/image';
import { MoreVertical } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import AddComments from './AddComment';
import SocialChat from './Comments';
import LikeAndShare from './LikeAndShare';

const Post1 = () => {
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
          <Image height={500} width={900} className='img-fluid' alt='timeline' src={`${AssetsImagePath}/social-app/timeline-1.png`} unoptimized/>
          <div className='timeline-content'>
            <p>{TimelineParagraph}</p>
            <LikeAndShare />
            <SocialChat />
            <AddComments />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Post1;
