import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Card, CardBody, Col } from 'reactstrap';
import { BasicDemo } from '@/Constant';
import { Center, ContainerStyle } from '@/Data/Maps';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const BasicMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places',
  });
  return (
    <Col lg='6' md='12'>
      <Card>
        <CardHeaderCommon title={BasicDemo} />
        <CardBody>
          <div className='map-js-height'>
            <div id='gmap-simple' className='map-block'>
              {isLoaded ? <GoogleMap mapContainerStyle={ContainerStyle} center={Center} zoom={10} /> : 'Loading'}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicMap;
