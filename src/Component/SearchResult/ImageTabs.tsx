import { AssetsImagePath, Javascript, PortfolioTitle } from '@/Constant';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, Col, Row } from 'reactstrap';
import PagesSort from './Pages';

const PhotosTab = () => {
  const description = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";
  const [imagess, setImage] = useState<string[]>([]);
  const [smallImages, setsmallImages] = useState([]);

   useEffect(() => {
    fetch('/api/LightImageApi')
      .then((res) => res.json())
      .then((response) => {
        setImage(response.src);
      });

    fetch('/api/BigImageApi')
      .then((res) => res.json())
      .then((response) => {
        setsmallImages(response.src);
      });
  }, []);

  return (
    <Fragment>
      <Row>
        {smallImages && (
          <Col sm="12">
            <Card>
              <CardBody className="my-gallery row gallery-with-description">
                <Gallery withCaption>
                  {smallImages &&
                    smallImages.map((item, i) => (
                      <figure className="col-xl-3 col-sm-6" key={i}>
                        <Item original={`${AssetsImagePath}/${item}`} width="1500" height="780" caption={description}>
                          {({ ref, open }) => (
                            <Link href={Javascript} onClick={open}>
                              <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref} src={`${AssetsImagePath}/${item}`} alt="thumbnail" />
                              <div className="caption border-top-0 p-2">
                                <h4>{PortfolioTitle}</h4>
                                <p>{description}</p>
                              </div>
                            </Link>
                          )}
                        </Item>
                      </figure>
                    ))}
                </Gallery>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
      <PagesSort />
    </Fragment>
  );
};

export default PhotosTab;
