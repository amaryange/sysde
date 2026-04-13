'use client';

import { Card, CardBody, CardHeader } from 'reactstrap';
import { deploiementParSecteur } from '@/Data/analyticsMock';
import { useHeaderStore } from '@/Store/useHeaderStore';

const TauxBar = ({ value }: { value: number }) => {
  const color = value >= 80 ? '#16a34a' : value >= 60 ? '#d97706' : '#dc2626';
  const isDark = useHeaderStore((s) => s.logoToggle);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ flex: 1, height: 6, background: isDark ? '#374151' : '#f3f4f6', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ width: `${value}%`, height: '100%', background: color, borderRadius: 3, transition: 'width 0.4s' }} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 700, color, minWidth: 36, textAlign: 'right' }}>{value}%</span>
    </div>
  );
};

const SecteursTable = () => {
  const isDark = useHeaderStore((s) => s.logoToggle);

  const border   = isDark ? '#374151'              : '#f3f4f6';
  const subText  = '#9ca3af';
  const text     = isDark ? '#f3f4f6'              : '#111';
  const textSub  = isDark ? '#9ca3af'              : '#6b7280';
  const textBody = isDark ? '#d1d5db'              : '#374151';
  const bgHead   = isDark ? 'rgba(255,255,255,0.05)' : '#f9fafb';
  const bgAlt    = isDark ? 'rgba(255,255,255,0.02)' : '#fafafa';

  const vacantUrgentBg   = isDark ? 'rgba(220,38,38,0.15)' : '#fee2e2';
  const vacantUrgentText = '#dc2626';
  const vacantWarnBg     = isDark ? 'rgba(146,64,14,0.15)'  : '#fef9c3';
  const vacantWarnText   = isDark ? '#fbbf24'               : '#92400e';

  return (
    <Card>
      <CardHeader style={{ padding: '16px 20px', borderBottom: `1px solid ${border}` }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>Déploiement par secteur</h6>
        <small style={{ color: subText }}>Détail postes prévus / pourvus / vacants</small>
      </CardHeader>
      <CardBody style={{ padding: 0 }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: bgHead }}>
                {['Secteur', 'Code', 'Prévus', 'Pourvus', 'Vacants', 'Taux de couverture'].map((h) => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, color: textSub, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.4px', whiteSpace: 'nowrap' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {deploiementParSecteur.map((s, i) => (
                <tr key={s.code} style={{ borderTop: `1px solid ${border}`, background: i % 2 === 0 ? 'transparent' : bgAlt }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: text }}>{s.secteur}</td>
                  <td style={{ padding: '12px 16px', color: textSub, fontFamily: 'monospace' }}>{s.code}</td>
                  <td style={{ padding: '12px 16px', color: textBody }}>{s.prevus}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ fontWeight: 700, color: '#16a34a' }}>{s.pourvus}</span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{
                      background: s.vacants > 15 ? vacantUrgentBg : vacantWarnBg,
                      color:      s.vacants > 15 ? vacantUrgentText : vacantWarnText,
                      borderRadius: 6, padding: '2px 8px', fontWeight: 700, fontSize: 12,
                    }}>
                      {s.vacants}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', minWidth: 180 }}>
                    <TauxBar value={s.tauxPourcentage} />
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

export default SecteursTable;
