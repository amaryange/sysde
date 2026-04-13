import { Fragment } from 'react';
import { AgencyExperience, JobDescriptionHeading, JobDetaildec, Perks, Qualifications, Savethisjob, share } from '@/Constant';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { AgencyExperienceData, PerksData, QualificationsData } from '@/Data/Jobs';

const JobDescription = () => {
  return (
    <Fragment>
      <div className='job-description'>
        <h6>{JobDescriptionHeading}</h6>
        <p className='text-start'>{JobDetaildec}</p>
      </div>
      <div className='job-description'>
        <h6>{Qualifications}</h6>
        <ListGroup>
          {QualificationsData.map((data, index) => (
            <ListGroupItem key={index}>{data}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className='job-description'>
        <h6>{AgencyExperience}</h6>
        <ListGroup>
          {AgencyExperienceData.map((data, index) => (
            <ListGroupItem key={index}>{data}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className='job-description'>
        <h6>{Perks}</h6>
        <ListGroup>
          {PerksData.map((data, index) => (
            <ListGroupItem key={index}>{data}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className='job-description'>
        <Button color='primary' className='mx-1'>
          <span>
            <i className='fa fa-check'></i>
          </span>
          {Savethisjob}
        </Button>
        <Button color='primary'>
          <span>
            <i className='fa fa-share-alt'></i>
          </span>
          &nbsp;{share}
        </Button>
      </div>
    </Fragment>
  );
};

export default JobDescription;
