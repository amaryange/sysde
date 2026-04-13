import { UIDesigner, Submit, Cancel, XoloEndless, Savethisjob, Href, PersonalDetails, YourEducation, YourExperience, UploadYourFiles, AssetsImagePath } from '@/Constant';
import PersonalDetail from './PersonalDetail';
import EducationClass from './Education';
import ExperienceClass from './Experience';
import UploadFileClass from './UploadFile';
import { Button, Card, CardBody, CardFooter } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';
import Image from 'next/image';

const JobApply = () => {
  return (
    <Card>
      <div className='job-search'>
        <CardBody className='pb-0'>
          <div className='d-flex '>
            <Image height={40} width={40} className='m-r-20' src={`${AssetsImagePath}/job-search/1.jpg`} alt='' unoptimized/>
            <div className='flex-grow-1'>
              <h6 className='f-w-600'>
                <a href={Href}>{UIDesigner}</a>
                <span className='pull-right'>
                  <Button color='primary'>
                    <span>
                      <i className='fa fa-check text-white' />
                    </span>
                    {Savethisjob}
                  </Button>
                </span>
              </h6>
              <p>
                {XoloEndless} <Rating className='rating ms-1' initialValue={Math.random() * 5} size={15} />
              </p>
            </div>
          </div>
          <div className='job-description'>
            <h6 className='mb-0'>{PersonalDetails}</h6>
            <PersonalDetail />
            <h6 className='mb-0'>{YourEducation}</h6>
            <EducationClass />
            <h6 className='mb-0'>{YourExperience}</h6>
            <ExperienceClass />
            <h6 className='mb-0'>{UploadYourFiles}</h6>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Button color='primary mx-1'>{Submit}</Button>
          <Button color='light'>{Cancel}</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobApply;
