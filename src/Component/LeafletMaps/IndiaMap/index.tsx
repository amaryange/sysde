//@ts-nocheck
import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { MapContainer, SVGOverlay, TileLayer } from 'react-leaflet';
import { BoundsIndia, IndiaMapSubHeading, PositionIndia } from '@/Data/Maps';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const IndiaMap = () => {
  return (
    <Col sm='6'>
      <Card>
        <CardHeaderCommon title='Leaflet India MAP' description={IndiaMapSubHeading} />
        <CardBody>
          <MapContainer className='jvector-map-height' style={{ height: 389, width: 710.5 }} zoom={5} center={PositionIndia} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} animate={true}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <SVGOverlay attributes={{ stroke: 'blue' }} bounds={BoundsIndia}>
              <rect x='0' y='0' width='100%' height='100%' fill='white' />
              <circle r='5' cx='10' cy='10' fill='skyblue' />
              <text x='50%' y='50%' stroke='blue'>
                text
              </text>
            </SVGOverlay>
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default IndiaMap;
