import { Container, Row } from 'reactstrap';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import BasicTypeAhead from './BasicTypeAhead';
import PreFetch from './PreFetch';
import BloodHound from "./BloodHound";
import RemoteTypeAhead from "./RemoteTypeAhead";
import CustomTemplates from "./CustomTemplates";
import MultipleSectionsWithHeaders from "./MultipleSectionsWithHeaders";
import ScrollableDropdownMenu from "./ScrollableDropdownMenu";
import RtlSupport from "./RtlSupport";

const TypeAhead = () => {
  return (
    <>
      <Breadcrumbs parent='Form Widgets' title='TypeAhead' mainTitle='TypeAhead' />
      <Container fluid>
        <div className='typeahead'>
          <Row>
            <BasicTypeAhead />
            <PreFetch />
            <BloodHound />
            <RemoteTypeAhead />
            <CustomTemplates />
            <MultipleSectionsWithHeaders />
            <ScrollableDropdownMenu />
            <RtlSupport />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TypeAhead;
