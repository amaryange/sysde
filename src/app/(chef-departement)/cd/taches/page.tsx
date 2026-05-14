'use client';

import dynamic from 'next/dynamic';

const TachesContainer = dynamic(
  () => import('@/Component/Taches/TachesContainer'),
  { ssr: false }
);

const CDTachesPage = () => <TachesContainer allowedTabs={['chef_secteur']} />;

export default CDTachesPage;
