import React, { Fragment } from 'react';
import { Col, Card } from 'reactstrap';
import Image from 'next/image';
import { TourUseProfileIcon } from '@/Data/BonusUiData/Tour';
import { AssetsImagePath, FollowersConst, Following, Javascript, Like } from '@/Constant';

const UserProfile = () => {
  return (
    <Col sm='12'>
      <Card className='profile-header bg-size' style={{ backgroundImage: `url(${AssetsImagePath}/user-profile/bg-profile.jpg)`, backgroundRepeat: 'center center', backgroundPosition: 'cover' }}>
        <div className='profile-img-wrrap'>
          <Image width={100} height={100} className='img-fluid bg-img-cover' src={`${AssetsImagePath}/user-profile/bg-profile.jpg`} alt='' unoptimized/>
        </div>
        <div className='userpro-box'>
          <div className='img-wrraper'>
            <div className='avatar'>
              <Image width={86} height={86} className='step1' alt='' src={`${AssetsImagePath}/user/7.jpg`} unoptimized/>
            </div>
            <div className='icon-wrapper'>
              <i className='icofont icofont-pencil-alt-5 step2' data-intro='Change Profile image here'></i>
            </div>
          </div>
          <div className='user-designation'>
            <div className='title'>
              <a target='_blank' href={Javascript}>
                <h4>Emay Walter</h4>
                <h6>designer</h6>
              </a>
            </div>
            <div className='social-media step3' data-intro='This is your Social details'>
              <ul className='user-list-social flex-row simple-list'>
                {TourUseProfileIcon.map((item, i) => (
                  <li key={i}>
                    <a href={Javascript}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='follow'>
              <ul className='follow-list flex-row simple-list'>
                <li>
                  <div className='follow-num counter'>325</div>
                  <span>{FollowersConst}</span>
                </li>
                <li>
                  <div className='follow-num counter'>450</div>
                  <span>{Following}</span>
                </li>
                <li>
                  <div className='follow-num counter'>500</div>
                  <span>{Like}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default UserProfile;
