'use client';

import { Card, CardBody, CardHeader } from 'reactstrap';
import { AlertTriangle, Clock } from 'react-feather';
import { alertesContrats, alertesSecteurs } from '@/Data/analyticsMock';
import { useHeaderStore } from '@/Store/useHeaderStore';

const AlertesPanel = () => {
  const isDark = useHeaderStore((s) => s.logoToggle);

  const border  = isDark ? '#374151' : '#f3f4f6';
  const subText = '#9ca3af';
  const text    = isDark ? '#f3f4f6' : '#111';
  const textSub = isDark ? '#9ca3af' : '#6b7280';

  const urgentBg     = isDark ? 'rgba(220,38,38,0.12)'  : '#fff5f5';
  const urgentBorder = isDark ? 'rgba(220,38,38,0.4)'   : '#fecaca';
  const warnBg       = isDark ? 'rgba(217,119,6,0.12)'  : '#fffbeb';
  const warnBorder   = isDark ? 'rgba(217,119,6,0.4)'   : '#fde68a';

  return (
    <Card style={{ height: '100%' }}>
      <CardHeader style={{ padding: '16px 20px', borderBottom: `1px solid ${border}` }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>Alertes</h6>
        <small style={{ color: subText }}>Actions requises</small>
      </CardHeader>
      <CardBody style={{ padding: '12px 16px', overflowY: 'auto' }}>

        <div style={{ fontSize: 11, fontWeight: 700, color: subText, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>
          Contrats à renouveler
        </div>
        {alertesContrats.map((c) => {
          const urgent = c.joursRestants <= 30;
          return (
            <div key={c.num} style={{
              background: urgent ? urgentBg : warnBg,
              border: `1px solid ${urgent ? urgentBorder : warnBorder}`,
              borderRadius: 8,
              padding: '10px 12px',
              marginBottom: 8,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
            }}>
              <Clock size={14} style={{ color: urgent ? '#dc2626' : '#d97706', flexShrink: 0, marginTop: 2 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 12, color: text }}>{c.num}</div>
                <div style={{ fontSize: 11, color: textSub }}>{c.operateur} — {c.montant} FCFA</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: urgent ? '#dc2626' : '#d97706', marginTop: 2 }}>
                  Expire dans {c.joursRestants} jours ({c.fin})
                </div>
              </div>
            </div>
          );
        })}

        <div style={{ fontSize: 11, fontWeight: 700, color: subText, textTransform: 'uppercase', letterSpacing: '0.5px', margin: '16px 0 8px' }}>
          Zones à risque
        </div>
        {alertesSecteurs.map((a) => (
          <div key={a.secteur} style={{
            background: a.gravite === 'critique' ? urgentBg : warnBg,
            border: `1px solid ${a.gravite === 'critique' ? urgentBorder : warnBorder}`,
            borderRadius: 8,
            padding: '10px 12px',
            marginBottom: 8,
            display: 'flex',
            gap: 10,
            alignItems: 'flex-start',
          }}>
            <AlertTriangle size={14} style={{ color: a.gravite === 'critique' ? '#dc2626' : '#d97706', flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 12, color: text }}>{a.secteur}</div>
              <div style={{ fontSize: 11, color: textSub }}>{a.probleme}</div>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default AlertesPanel;
