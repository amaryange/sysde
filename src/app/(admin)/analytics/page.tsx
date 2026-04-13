'use client';

import dynamic from 'next/dynamic';

const AnalyticsContainer = dynamic(
  () => import('@/Component/Analytics/AnalyticsContainer'),
  { ssr: false }
);

export default function AnalyticsPage() {
  return <AnalyticsContainer />;
}
