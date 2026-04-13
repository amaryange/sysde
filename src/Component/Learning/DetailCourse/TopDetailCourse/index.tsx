import { AssetsImagePath } from '@/Constant';
import { TopDetailCourseHeading, TopDetailCourseParagraph } from '@/Data/Learning';
import Image from 'next/image';
import React from 'react';
import { Card, CardBody } from 'reactstrap';

const TopDetailCourse = () => {
  return (
    <div className='blog-box blog-details'>
      <Card>
        <Image height={400} width={800} className='img-fluid w-100' src={`${AssetsImagePath}/faq/learning-1.jpg`} alt='blog-main' unoptimized/>
      </Card>
      <Card>
        <CardBody>
          <div className='blog-details'>
            <ul className=' blog-social flex-row'>
              <li className='digits'>25 july 2023</li>
              <li>
                <i className='icofont icofont-user'></i>
                Mark <span>Jecno</span>
              </li>
              <li className='digits'>
                <i className='icofont icofont-thumbs-up'></i>
                02
                <span>Hits </span>
              </li>
              <li className='digits'>
                <i className='icofont icofont-ui-chat'></i>
                598 Comments
              </li>
            </ul>
            <h4>{TopDetailCourseHeading}</h4>
            <div className='single-blog-content-top'>{TopDetailCourseParagraph}</div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TopDetailCourse;
