import React, { Fragment } from 'react';
import { Card, Col } from 'reactstrap';
import { APRIL, Admin, Like } from '@/Constant';
import { BlogDetailsGalleryData } from '@/Data/Blog';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';

const BottomSection = () => {
  return (
    <>
      {BlogDetailsGalleryData.map((item, i) => (
        <Col sm='6' xl='3' className='box-col-6 des-xl-50' key={i}>
          <Card>
            <div className='blog-box blog-grid'>
              <div className='blog-wrraper'>
                <Image height={200} width={200} className='img-fluid top-radius-blog' src={`${AssetsImagePath}/blog/${item.image}`} alt='' unoptimized/>
              </div>
              <div className='blog-details-second'>
                <div className='blog-post-date'>
                  <span className='blg-month'>{APRIL}</span>
                  <span className='blg-date'>{item.date}</span>
                </div>
                <h6 className='blog-bottom-details'>Perspiciatis unde omnis</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <div className='detail-footer'>
                  <ul className='sociyal-list  flex-row'>
                    <li>
                      <i className='fa fa-user-o'></i>
                      {Admin}
                    </li>
                    <li>
                      <i className='fa fa-comments-o'></i>5
                    </li>
                    <li>
                      <i className='fa fa-thumbs-o-up'></i>2 {Like}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default BottomSection;
