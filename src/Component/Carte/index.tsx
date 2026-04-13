'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import { exercices, postes } from '@/Data/carteMock';
import Combobox from '@/Component/Common/Combobox';
import { useHeaderStore } from '@/Store/useHeaderStore';

const CarteMap = dynamic(() => import('./CarteMap'), { ssr: false, loading: () => (
  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
    Chargement de la carte…
  </div>
) });

const Carte = () => {
  const [exerciceId, setExerciceId] = useState(exercices[0].id);

  const filtered    = postes.filter((p) => p.exerciceId === exerciceId);
  const nbActifs    = filtered.filter((p) => p.actif).length;
  const nbInactifs  = filtered.filter((p) => !p.actif).length;
  const operateurs  = Array.from(new Set(filtered.map((p) => p.operateur)));

  return (
    <div className='container-fluid p-3' style={{ display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>

      {/* En-tête */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <h4 style={{ margin: 0 }}>Carte de déploiement</h4>
        <div style={{ minWidth: 220 }}>
          <Combobox<number>
            options={exercices.map((ex) => ({ value: ex.id, label: ex.lib }))}
            value={{ value: exerciceId, label: exercices.find((e) => e.id === exerciceId)?.lib ?? '' }}
            onChange={(opt) => opt && setExerciceId(opt.value)}
            isClearable={false}
            placeholder='Sélectionner un exercice...'
          />
        </div>
      </div>

      {/* Statistiques rapides */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <StatBadge label='Postes déployés' value={filtered.length} color='#2980b9' />
        <StatBadge label='Actifs'          value={nbActifs}         color='#27ae60' />
        <StatBadge label='Inactifs'        value={nbInactifs}       color='#e74c3c' />
        <StatBadge label='Opérateurs'      value={operateurs.length} color='#8e44ad' />
      </div>

      {/* Carte */}
      <Card>
        <CardBody style={{ padding: 0, height: 'calc(100vh - 230px)', minHeight: 500 }}>
          <CarteMap exerciceId={exerciceId} />
        </CardBody>
      </Card>

    </div>
  );
};

// ─── StatBadge ────────────────────────────────────────────────────────────────

const StatBadge = ({ label, value, color }: { label: string; value: number; color: string }) => {
  const isDark = useHeaderStore((s) => s.logoToggle);
  return (
    <div style={{
      background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
      border: `2px solid ${color}22`,
      borderLeft: `4px solid ${color}`,
      borderRadius: 8,
      padding: '6px 14px',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 100,
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    }}>
      <span style={{ fontSize: 20, fontWeight: 700, color, lineHeight: 1.2 }}>{value}</span>
      <span style={{ fontSize: 11, color: isDark ? '#9ca3af' : '#888', marginTop: 2 }}>{label}</span>
    </div>
  );
};

export default Carte;
