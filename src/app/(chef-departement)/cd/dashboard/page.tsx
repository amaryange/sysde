'use client';

import dynamic from 'next/dynamic';
import { Container } from 'reactstrap';

const CDDashboardContainer = dynamic(
  () => import('@/Component/Dashboard/CD/CDDashboardContainer'),
  { ssr: false }
);

const CDDashboardPage = () => (
  <Container fluid className='dashboard-default-sec'>
    <CDDashboardContainer />
  </Container>
);

export default CDDashboardPage;
