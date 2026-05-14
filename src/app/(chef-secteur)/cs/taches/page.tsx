'use client';

import dynamic from 'next/dynamic';

const TachesContainer = dynamic(
  () => import('@/Component/Taches/TachesContainer'),
  { ssr: false }
);

const CSTachesPage = () => <TachesContainer allowedTabs={['collaborateur']} />;

export default CSTachesPage;
