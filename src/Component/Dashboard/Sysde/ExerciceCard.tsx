import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import CardHeaderComponent from '../Common/CardHeader';

const exercice = {
  lib: 'Campagne 2024',
  annee: '2024',
  cloture: '31/12/2024',
  statut: true,
  lots: 4,
  postes_crees: 200,
  postes_cibles: 218,
};

const ExerciceCard = () => {
  const taux = Math.round((exercice.postes_crees / exercice.postes_cibles) * 100);

  return (
    <Card>
      <CardHeader>
        <CardHeaderComponent title='Exercice en cours' subtitle={exercice.lib} />
      </CardHeader>
      <CardBody>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item d-flex justify-content-between px-0'>
            <span className='text-muted'>Année</span>
            <span className='f-w-600'>{exercice.annee}</span>
          </li>
          <li className='list-group-item d-flex justify-content-between px-0'>
            <span className='text-muted'>Clôture prévue</span>
            <span className='f-w-600'>{exercice.cloture}</span>
          </li>
          <li className='list-group-item d-flex justify-content-between px-0'>
            <span className='text-muted'>Lots couverts</span>
            <span className='f-w-600'>{exercice.lots}</span>
          </li>
          <li className='list-group-item d-flex justify-content-between px-0'>
            <span className='text-muted'>Postes créés / cibles</span>
            <span className='f-w-600'>{exercice.postes_crees} / {exercice.postes_cibles}</span>
          </li>
          <li className='list-group-item px-0'>
            <div className='d-flex justify-content-between mb-1'>
              <span className='text-muted'>Taux de couverture</span>
              <span className='f-w-600'>{taux}%</span>
            </div>
            <div className='progress' style={{ height: '6px' }}>
              <div
                className='progress-bar bg-primary'
                role='progressbar'
                style={{ width: `${taux}%` }}
              />
            </div>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default ExerciceCard;
