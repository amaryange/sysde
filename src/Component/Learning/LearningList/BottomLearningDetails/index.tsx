import { Javascript, AssetsImagePath } from '@/Constant';
import { BottomLearningListData, BottomLearningParagraph } from '@/Data/Learning';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Card, Col } from 'reactstrap';

const BottomLearningList = () => {
  const router = useRouter();
  return (
    <>
      {BottomLearningListData.map((item, i) => (
        <Col xl='4' sm='6' key={i} className=' box-col-6'>
          <Card>
            <div className='product-box learning-box'>
              <div className='product-img'>
                <Image height={500} width={500} className='img-fluid top-radius-blog' src={`${AssetsImagePath}/faq/${item.image}.jpg`} alt='' unoptimized/>
                <div className='product-hover'>
                  <ul>
                    <li>
                      <i className='icon-link' onClick={() => router.push('/learning/learning-detail')}></i>
                    </li>
                    <li>
                      <i className='icon-import'></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='details-main'>
                <a href={Javascript}>
                  <div className='bottom-details'>
                    <h6>{item.title}</h6>
                  </div>
                </a>
                <p>{BottomLearningParagraph}</p>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BottomLearningList;
