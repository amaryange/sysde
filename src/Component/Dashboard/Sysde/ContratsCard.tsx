import React from 'react';
import { Card, CardBody } from 'reactstrap';

const contrats = [
  { num: 'CTR-2024-001', operateur: 'FIRCA',    debut: '01/01/2024', fin: '31/12/2024', montant: '45 000 000', statut: true },
  { num: 'CTR-2024-002', operateur: 'ANADER',   debut: '15/02/2024', fin: '14/02/2025', montant: '32 500 000', statut: true },
  { num: 'CTR-2024-003', operateur: 'CNRA',     debut: '01/03/2024', fin: '28/02/2025', montant: '18 000 000', statut: true },
  { num: 'CTR-2023-012', operateur: 'SODEFOR',  debut: '01/01/2023', fin: '31/12/2023', montant: '22 000 000', statut: false },
];

const ContratsCard = () => {
  return (
    <Card>
      <CardBody>
        <div className='table-responsive'>
          <h5 className='mb-3'>Contrats récents</h5>
          <table className='table table-bordernone'>
            <thead>
              <tr>
                <th>N° Contrat</th>
                <th>Opérateur</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Montant (FCFA)</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {contrats.map((c) => (
                <tr key={c.num}>
                  <td><span className='f-w-600'>{c.num}</span></td>
                  <td>{c.operateur}</td>
                  <td>{c.debut}</td>
                  <td>{c.fin}</td>
                  <td>{c.montant}</td>
                  <td>
                    <span className={`badge ${c.statut ? 'bg-success' : 'bg-danger'}`}>
                      {c.statut ? 'Actif' : 'Clôturé'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default ContratsCard;
