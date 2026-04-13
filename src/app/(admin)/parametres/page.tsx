'use client';

import dynamic from 'next/dynamic';

const ParametresContainer = dynamic(
  () => import('@/Component/Parametres/ParametresContainer'),
  { ssr: false }
);

const ParametresPage = () => <ParametresContainer />;

export default ParametresPage;
