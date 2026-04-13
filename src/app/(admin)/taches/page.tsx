'use client';

import dynamic from 'next/dynamic';

const TachesContainer = dynamic(
  () => import('@/Component/Taches/TachesContainer'),
  { ssr: false }
);

const TachesPage = () => <TachesContainer />;

export default TachesPage;
