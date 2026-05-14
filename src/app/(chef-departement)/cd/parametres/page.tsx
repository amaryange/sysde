'use client';

import dynamic from 'next/dynamic';

const ParametresContainerCD = dynamic(
  () => import('@/Component/ChefDepartement/Parametres/ParametresContainerCD'),
  { ssr: false }
);

const CDParametresPage = () => <ParametresContainerCD />;

export default CDParametresPage;
