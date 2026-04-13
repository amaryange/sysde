//@ts-nocheck
import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { MapContainer, TileLayer } from 'react-leaflet';
import { WorldMapSubheading } from '@/Data/Maps';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const WorldMap = () => {
  return (
    <Col sm='6'>
      <Card>
        <CardHeaderCommon title='Leaflet World MAP' description={WorldMapSubheading} />
        <CardBody>
          <MapContainer className='jvector-map-height' style={{ height: 389, width: 710.5 }} center={[50, 10]} zoom={1} maxZoom={10} attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} easeLinearity={0.35}>
            <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WorldMap;
