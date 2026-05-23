'use client';

import { Card, CardBody, CardHeader } from 'reactstrap';
import { FileText, Clock, Calendar } from 'react-feather';
import { useHeaderStore } from '@/Store/useHeaderStore';
import type { MockContrat, MockExercice } from '@/Data/mockData';

interface Props {
  contrat:  MockContrat  | null;
  exercice: MockExercice | null;
}

const fmt = (n: number) =>
  n.toLocaleString('fr-FR') + ' FCFA';

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });

const joursRestants = (fin: string) =>
  Math.ceil((new Date(fin).getTime() - Date.now()) / 86_400_000);

const ContratInfoCard = ({ contrat, exercice }: Props) => {
  const isDark = useHeaderStore((s) => s.logoToggle);

  const border  = isDark ? '#374151' : '#f3f4f6';
  const subText = '#9ca3af';
  const text    = isDark ? '#f3f4f6' : '#111';
  const textSub = isDark ? '#9ca3af' : '#6b7280';
  const bg      = isDark ? 'rgba(255,255,255,0.04)' : '#f9fafb';

  const jours  = contrat ? joursRestants(contrat.fin) : null;
  const urgent = jours !== null && jours <= 90;
  const badgeColor = urgent ? '#dc2626' : jours !== null && jours <= 180 ? '#d97706' : '#16a34a';
  const badgeBg    = urgent
    ? (isDark ? 'rgba(220,38,38,0.12)' : '#fee2e2')
    : jours !== null && jours <= 180
    ? (isDark ? 'rgba(217,119,6,0.12)' : '#fef9c3')
    : (isDark ? 'rgba(22,163,74,0.12)' : '#dcfce7');

  return (
    <Card style={{ height: '100%' }}>
      <CardHeader style={{ padding: '16px 20px', borderBottom: `1px solid ${border}` }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>Contrat &amp; Exercice</h6>
        <small style={{ color: subText }}>Informations contractuelles</small>
      </CardHeader>
      <CardBody style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {contrat ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: isDark ? 'rgba(36,105,92,0.2)' : '#e8f5f2',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, color: '#24695c',
              }}>
                <FileText size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: text }}>{contrat.num}</div>
                <div style={{ fontSize: 12, color: textSub, marginTop: 2 }}>
                  {fmtDate(contrat.debut)} → {fmtDate(contrat.fin)}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#24695c', marginTop: 4 }}>
                  {fmt(contrat.montant)}
                </div>
              </div>
            </div>

            {jours !== null && (
              <div style={{
                background: badgeBg,
                border: `1px solid ${badgeColor}33`,
                borderRadius: 8, padding: '10px 14px',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <Clock size={15} style={{ color: badgeColor, flexShrink: 0 }} />
                <div>
                  <span style={{ fontWeight: 700, fontSize: 13, color: badgeColor }}>
                    {jours > 0 ? `${jours} jours restants` : 'Expiré'}
                  </span>
                  {urgent && (
                    <div style={{ fontSize: 11, color: badgeColor, marginTop: 1 }}>
                      Renouvellement à planifier
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div style={{ color: subText, fontSize: 13 }}>Aucun contrat actif</div>
        )}

        <div style={{ borderTop: `1px solid ${border}`, paddingTop: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: subText, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>
            Exercice en cours
          </div>
          {exercice ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: isDark ? 'rgba(41,128,185,0.2)' : '#dbeafe',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, color: '#2980b9',
              }}>
                <Calendar size={16} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: text }}>{exercice.lib}</div>
                <div style={{ fontSize: 12, color: textSub, marginTop: 2 }}>
                  Depuis le {fmtDate(exercice.annee)}
                  {exercice.cloture ? ` — clôturé le ${fmtDate(exercice.cloture)}` : ' — en cours'}
                </div>
              </div>
              <span style={{
                marginLeft: 'auto',
                background: exercice.statut
                  ? (isDark ? 'rgba(22,163,74,0.15)' : '#dcfce7')
                  : (isDark ? 'rgba(107,114,128,0.15)' : '#f3f4f6'),
                color: exercice.statut ? '#16a34a' : '#6b7280',
                fontSize: 11, fontWeight: 700,
                padding: '3px 8px', borderRadius: 6, whiteSpace: 'nowrap',
              }}>
                {exercice.statut ? 'Actif' : 'Clôturé'}
              </span>
            </div>
          ) : (
            <div style={{ color: subText, fontSize: 13 }}>Aucun exercice en cours</div>
          )}
        </div>

      </CardBody>
    </Card>
  );
};

export default ContratInfoCard;
