'use client';

import dynamic from 'next/dynamic';
import { Container } from 'reactstrap';

const CDReportingContainer = dynamic(
  () => import('@/Component/Dashboard/CD/CDReportingContainer'),
  { ssr: false }
);

const CDReportingPage = () => (
  <Container fluid className='dashboard-default-sec'>
    <CDReportingContainer />
  </Container>
);

export default CDReportingPage;
