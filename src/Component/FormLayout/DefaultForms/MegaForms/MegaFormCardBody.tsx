import { CardBody, Form } from 'reactstrap';
import BillingInformationRow from './BillingInformationRow';
import MegaFormCommon from './common/MegaFormCommon';
import { AccountInformation, BillingInformation, CompanyInformation, ContactNumber, EmailAddress, Website, YourName } from '@/Constant';
const MegaFormCardBody = () => {
  return (
    <CardBody>
      <Form className='theme-form mega-form'>
        <h6>{AccountInformation}</h6>
        <MegaFormCommon label={YourName} type='text' placeholder='Your Name' />
        <MegaFormCommon label={EmailAddress} type='email' placeholder='Enter email' />
        <MegaFormCommon label={ContactNumber} type='number' placeholder='Enter Contact number' />
        <hr className='mt-4 mb-4' />
        <h6>{CompanyInformation}</h6>
        <MegaFormCommon label={ContactNumber} type='text' placeholder='Company Name' />
        <MegaFormCommon label={Website} type='text' placeholder='WebSite' />
      </Form>
      <hr className='mt-4 mb-4' />
      <h6 className='pb-4'>{BillingInformation}</h6>
      <BillingInformationRow />
    </CardBody>
  );
};
export default MegaFormCardBody;
