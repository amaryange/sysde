'use client';

import dynamic from 'next/dynamic';
import { useState, useMemo } from 'react';
import { Card, CardBody } from 'reactstrap';
import { exercices, postes, secteursGeoJSON, lotsGeoJSON } from '@/Data/carteMock';
import Combobox from '@/Component/Common/Combobox';
import { useHeaderStore } from '@/Store/useHeaderStore';
import { useAuthStore } from '@/Store/useAuthStore';
import { MOCK_OPERATEURS } from '@/Data/mockData';

const CarteMap = dynamic(() => import('./CarteMap'), { ssr: false, loading: () => (
  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
    Chargement de la carte…
  </div>
) });

const Carte = () => {
  const user     = useAuthStore((s) => s.user);
  const userOpId = MOCK_OPERATEURS.find((o) => o.acronyme === user?.operateur && o.encadreur)?.id ?? null;
  const isLocked = userOpId !== null;

  const visibleExercices = useMemo(
    () => isLocked ? exercices.filter((e) => e.id_operateur === userOpId) : exercices,
    [isLocked, userOpId]
  );

  const [exerciceId, setExerciceId] = useState(() => visibleExercices[0]?.id ?? exercices[0].id);

  const filteredPostes = useMemo(
    () => postes.filter((p) => p.exerciceId === exerciceId && (!isLocked || p.id_operateur === userOpId)),
    [exerciceId, isLocked, userOpId]
  );

  const filteredSecteurs = useMemo(() => ({
    ...secteursGeoJSON,
    features: isLocked
      ? secteursGeoJSON.features.filter((f) => f.properties.id_operateur === userOpId)
      : secteursGeoJSON.features,
  }), [isLocked, userOpId]);

  const filteredLots = useMemo(() => ({
    ...lotsGeoJSON,
    features: isLocked
      ? lotsGeoJSON.features.filter((f) => f.properties.id_operateur === userOpId)
      : lotsGeoJSON.features,
  }), [isLocked, userOpId]);

  const nbActifs   = filteredPostes.filter((p) => p.actif).length;
  const nbInactifs = filteredPostes.filter((p) => !p.actif).length;
  const operateurs = Array.from(new Set(filteredPostes.map((p) => p.operateur)));

  return (
    <div className='container-fluid p-3' style={{ display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <h4 style={{ margin: 0 }}>Carte de déploiement</h4>
        <div style={{ minWidth: 200, flex: '0 0 auto', width: '100%', maxWidth: 300 }}>
          <Combobox<string>
            options={visibleExercices.map((ex) => ({ value: ex.id, label: ex.lib }))}
            value={{ value: exerciceId, label: visibleExercices.find((e) => e.id === exerciceId)?.lib ?? '' }}
            onChange={(opt) => opt && setExerciceId(opt.value)}
            isClearable={false}
            placeholder='Sélectionner un exercice...'
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <StatBadge label='Postes déployés' value={filteredPostes.length} color='#2980b9' />
        <StatBadge label='Actifs'          value={nbActifs}              color='#27ae60' />
        <StatBadge label='Inactifs'        value={nbInactifs}            color='#e74c3c' />
        <StatBadge label='Opérateurs'      value={operateurs.length}     color='#8e44ad' />
      </div>

      <Card style={{ flex: 1, minHeight: 0 }}>
        <CardBody style={{ padding: 0, height: 'clamp(320px, calc(100vh - 220px), 900px)' }}>
          <CarteMap
            exerciceId={exerciceId}
            filteredPostes={filteredPostes}
            secteursGeoJSON={filteredSecteurs}
            lotsGeoJSON={filteredLots}
          />
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
      flex: '1 1 90px',
      minWidth: 80,
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    }}>
      <span style={{ fontSize: 20, fontWeight: 700, color, lineHeight: 1.2 }}>{value}</span>
      <span style={{ fontSize: 11, color: isDark ? '#9ca3af' : '#888', marginTop: 2 }}>{label}</span>
    </div>
  );
};

export default Carte;
