import { Badge, Card, CardBody, Col, Row } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';
import { jobData } from '@/Data/Job';
import Image from 'next/image';
import Link from 'next/link';
import { SimilarjobsCardsType } from '@/Type/SideBarType';
import { AssetsImagePath } from '@/Constant';

const SimilarjobsCards = ({ limit, jobClass, ribbion, col12 }: SimilarjobsCardsType) => {
  return (
    <Row>
      {jobData.slice(0, 5).map((item) => (
        <Col className={`col-auto ${limit === item.Id && col12 ? 'col-xl-12 xl-100 box-col-12' : jobClass}`} key={item.Id}>
          <Card className={`${item.ribbion && ribbion ? 'ribbon-vertical-left-wrapper' : ''}`}>
            {item.ribbion ? (
              <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!ribbion && 'd-none'}`}>
                <i className='icofont icofont-love'></i>
              </div>
            ) : (
              ''
            )}
            <div className='job-search'>
              <CardBody>
                <div className='d-flex '>
                  <Image width={40} height={40} className=' m-r-20' src={`${AssetsImagePath}/${item.logo}`} alt='' unoptimized/>
                  <div className='flex-grow-1'>
                    <h6>
                      <Link href={`${process.env.PUBLIC_URL}/apps/job/job-details`}>{item.job_name}</Link>
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
    </Row>
  );
};

export default SimilarjobsCards;
