'use client';

import dynamic from 'next/dynamic';

const AnalyticsContainer = dynamic(
  () => import('@/Component/Analytics/AnalyticsContainer'),
  { ssr: false }
);

const CollabReportingPage = () => <AnalyticsContainer />;

export default CollabReportingPage;
