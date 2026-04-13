import React from 'react';
import { CardBody, Card } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import Slider from 'react-slick';
import Image from 'next/image';
import { AssetsImagePath } from '@/Constant';
import { SlickSliderType } from '@/Type/SideBarType';

const SlickSlider = ({ slides, rtl, title, lazyLoad, autoplay, focusOnSelect }: SlickSliderType) => {
  const data = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 6];

  var settings = {
    dots: true,
    infinite: true,
    autoplay: autoplay,
    speed: 100,
    arrows: false,
    slidesToShow: slides,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoPlay: true,
    centerPadding: '10px',
    centerMode: false,
    rtl: rtl,
    focusOnSelect: focusOnSelect,
    lazyLoad: lazyLoad,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Card>
      <CardHeaderCommon title={title} />
      <CardBody>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className='item' key={index}>
              <Image src={`${AssetsImagePath}/slider/${item}.jpg`} alt='Carousel image' width={503} height={334} className='img-fluid' unoptimized/>
            </div>
          ))}
        </Slider>
      </CardBody>
    </Card>
  );
};

export default SlickSlider;
