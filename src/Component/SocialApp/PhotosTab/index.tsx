import { Col, Row, Card, CardBody } from 'reactstrap';
import { PortfolioTitle, Javascript, AssetsImagePath } from '@/Constant';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { PhotoDescription, PhotosTabData } from '@/Data/SocialApp';
import Image from 'next/image';

const PhotosTab = () => {
  return (
    <Row>
      <Col sm='12'>
        <Card>
          <CardBody className='my-gallery row gallery-with-description'>
            <Gallery>
              {PhotosTabData.map((item, i) => (
                <Col xl='3' sm='6' className='box-xl-33' key={i}>
                  <figure>
                    <Item original={`${AssetsImagePath}/${item}`} width='824' height='508'>
                      {({ ref, open }: any) => (
                        <a href={Javascript} onClick={open}>
                          <Image height={300} width={380} className='img-thumbnail' ref={ref} src={`${AssetsImagePath}/${item}`} alt='' unoptimized/>
                          <div className='caption'>
                            <h4>{PortfolioTitle}</h4>
                            <p>{PhotoDescription}</p>
                          </div>
                        </a>
                      )}
                    </Item>
                  </figure>
                </Col>
              ))}
            </Gallery>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PhotosTab;
