import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Collapse, Button } from 'reactstrap';
import { SocialNetworks, Dribbble, Facebook, Twitter, ProfileIntro } from '@/Constant';
import { ProfileIntroData } from '@/Data/SocialApp';

const ProfileIntroduction = () => {
  const [isIntro, setIsIntro] = useState(true);
  return (
    <Col xl='12' className='box-col-6'>
      <Card>
        <CardHeader>
          <h5 className='mb-0'>
            <Button color='link ps-0' onClick={() => setIsIntro(!isIntro)}>
              {ProfileIntro}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isIntro}>
          <CardBody className='filter-cards-view'>
            {ProfileIntroData.map((item, i) => (
              <Fragment key={i}>
                <span className='f-w-600'>
                  {item.span}
                </span>
                <p>{item.paragraph}</p>
              </Fragment>
            ))}
            <div className='social-network theme-form'>
              <span className='f-w-600'>{SocialNetworks}</span>
              <Button color='social-btn btn-fb mb-2 text-center'>
                <i className='fa fa-facebook m-r-5'></i>
                {Facebook}
              </Button>
              <Button color='social-btn btn-twitter mb-2 text-center'>
                <i className='fa fa-twitter m-r-5'></i>
                {Twitter}
              </Button>
              <Button color='social-btn btn-google text-center'>
                <i className='fa fa-dribbble m-r-5'></i>
                {Dribbble}
              </Button>
            </div>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default ProfileIntroduction;
