import React from 'react';
import { Col, Media, Row } from 'reactstrap';
import { Designer, AssetsImagePath, JolioMark } from '@/Constant';
import Image from 'next/image';
import { DetailCourseComment } from '@/Data/Learning';
import { Comment1Props } from '@/Type/SideBarType';

const Comments1 = ({ Image3 }: Comment1Props) => {
  return (
    <>
      <li>
        <Media>
          {Image3 ? <Image height={100} width={100} src={`${AssetsImagePath}/blog/4.jpg`} alt='' unoptimized/> : <Image height={100} width={100} src={`${AssetsImagePath}/blog/comment.jpg`} alt='' unoptimized/>}
          <Media body>
            <Row>
              <Col md='4' className='xl-100'>
                <h6 className='mt-0'>
                  {JolioMark}
                  <span> {Designer} </span>
                </h6>
              </Col>
              <Col md='8' className='xl-100'>
                <ul className='flex-row comment-social learning-comment'>
                  <li className='digits'>
                    <i className='icofont icofont-thumbs-up'></i>
                    02 Hits
                  </li>
                  <li className='digits'>
                    <i className='icofont icofont-ui-chat'></i>
                    598 Comments
                  </li>
                </ul>
              </Col>
            </Row>
            <p>{DetailCourseComment}</p>
          </Media>
        </Media>
      </li>
    </>
  );
};

export default Comments1;
