import { Fragment } from 'react';
import { Badge, Card, CardBody } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';
import { jobData } from '@/Data/Job';
import Link from 'next/link';
import Image from 'next/image';
import { AssetsImagePath } from '@/Constant';

const ListViewCard = () => {
  return (
    <Fragment>
      {jobData &&
        jobData.slice(0, 8).map((item) => (
          <Card key={item.Id} className={`${item.ribbion ? 'ribbon-vertical-left-wrapper' : ''}`}>
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
                  <Image height={40} width={40} className=' m-r-20' src={`${AssetsImagePath}/${item.logo}`} alt='job logo' unoptimized/>
                  <div className='flex-grow-1'>
                    <h6>
                      <Link href={`/job/job-details`}>{item.job_name}</Link>
                      {item.type === 'new' ? (
                        <Badge color='primary' className='pull-right'>
                          {item.badgeValue}
                        </Badge>
                      ) : (
                        <span className='pull-right'>{item.type}</span>
                      )}
                    </h6>
                    <p>
                      {item.job_area}, {item.job_city}
                      <Rating className='ms-1' initialValue={Math.random() * 5} size={14} />
                    </p>
                  </div>
                </div>
                <p>{item.Job_description}</p>
              </CardBody>
            </div>
          </Card>
        ))}
    </Fragment>
  );
};
export default ListViewCard;
