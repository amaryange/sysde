import { Fragment } from 'react';
import { Card, Col, CardBody, Badge } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';
import Image from 'next/image';
import { jobData } from '@/Data/Job';
import Link from 'next/link';
import { AssetsImagePath } from '@/Constant';

const CardsClass = () => {
  return (
    <Fragment>
      {jobData &&
        jobData.map((item) => (
          <Col xl='6' className={'xl-100'} key={item.Id}>
            <Card className={`${item.ribbion ? 'ribbon-vertical-left-wrapper' : ''}`}>
              {item.ribbion ? (
                <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbion && 'd-none'}`}>
                  <i className='icofont icofont-love'></i>
                </div>
              ) : (
                ''
              )}
              <div className='job-search'>
                <CardBody>
                  <div className='d-flex'>
                    <Image width={40} height={40} className=' m-r-20' src={`${AssetsImagePath}/${item.logo}`} alt='job' unoptimized/>
                    <div className='flex-grow-1'>
                      <h6>
                        <Link href={`/apps/job/job-details`}>{item.job_name}</Link>
                        {item.type === 'new' ? <Badge color='primary' className='pull-right'>{item.badgeValue}</Badge> : <span className='pull-right'>{item.type}</span>}
                      </h6>
                      <p>
                        {item.job_area}, {item.job_city}
                        <Rating className=' ms-1' fillColor='#ff5f24' initialValue={Math.random() * 5} size={14} />
                      </p>
                    </div>
                  </div>
                  <p>{item.Job_description}</p>
                </CardBody>
              </div>
            </Card>
          </Col>
        ))}
    </Fragment>
  );
};
export default CardsClass;
