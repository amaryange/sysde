'use client';

import dynamic from 'next/dynamic';

const ParametresContainerCS = dynamic(
  () => import('@/Component/ChefSecteur/Parametres/ParametresContainerCS'),
  { ssr: false }
);

const CSParametresPage = () => <ParametresContainerCS />;

export default CSParametresPage;
