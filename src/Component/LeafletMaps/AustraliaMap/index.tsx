//@ts-nocheck

import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { FeatureGroup, LayerGroup, MapContainer, Popup, Rectangle, TileLayer } from 'react-leaflet';
import { AustraliaMapSubHeading, CenterAustralia, RectangleAustralia } from '@/Data/Maps';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const AustraliaMap = () => {
  const PurpleOptions = { color: 'purple' };
  return (
    <Col sm='6'>
      <Card>
        <CardHeaderCommon title='Leaflet Australia MAP' description={AustraliaMapSubHeading} />
        <CardBody>
          <MapContainer className='jvector-map-height' style={{ height: 389, width: 710.5 }} zoom={4} center={CenterAustralia} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <LayerGroup>
              <LayerGroup></LayerGroup>
            </LayerGroup>
            <FeatureGroup pathOptions={PurpleOptions}>
              <Popup>Popup in FeatureGroup</Popup>
              <Rectangle bounds={RectangleAustralia} />
            </FeatureGroup>
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default AustraliaMap;
