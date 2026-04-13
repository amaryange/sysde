import { Button, Card, CardBody, Row } from 'reactstrap';
import JobDescription from './jobDescription';
import { ApplyForThisJob, AssetsImagePath, Javascript, SimilarJobs, VihoUnitedStates } from '@/Constant';
import { Rating } from 'react-simple-star-rating';
import SimilarjobsCards from './SimilarjobsCards';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const MainCard = () => {
  const router = useRouter();
  return (
    <>
      <Card>
        <div className='job-search'>
          <CardBody>
            <div className='d-flex'>
              <Image height={40} width={40} className='  m-r-20' src={`${AssetsImagePath}/job-search/1.jpg`} alt='job-search' unoptimized/>
              <div className='flex-grow-1'>
                <h6 className='f-w-600'>
                  <a href={Javascript}>Product Designer (UI/UX Designer)</a>
                  <span className='pull-right'>
                    <Button color='primary' onClick={() => router.push(`/apps/job/apply`)}>
                      {ApplyForThisJob}
                    </Button>
                  </span>
                </h6>
                <p>
                  {VihoUnitedStates}
                  <Rating className=' ms-1' fillColor='#ff5f24' initialValue={Math.random() * 5} size={14} />
                </p>
              </div>
            </div>
            <JobDescription />
          </CardBody>
        </div>
      </Card>
      <div className='header-faq'>
        <h5 className='mb-0 f-w-600'>{SimilarJobs}</h5>
      </div>
      <Row>
        <SimilarjobsCards limit={5} jobClass={'col-xl-6 xl-100 box-col-12'} ribbion={false} col12={true} />
      </Row>
    </>
  );
};

export default MainCard;
