'use client';

import { useState, useMemo } from 'react';
import { Calendar, Printer } from 'react-feather';
import { useAuthStore } from '@/Store/useAuthStore';
import {
  MOCK_OPERATEURS,
  MOCK_OPERATEUR_SECTEUR,
  MOCK_OPERATEUR_LOT,
  MOCK_CONTRATS,
  MOCK_EXERCICES,
  MOCK_LOT_EXERCICE,
  MOCK_POSTES,
  type MockLotExercice,
} from '@/Data/mockData';

// ─── Config rôles ────────────────────────────────────────────────────────────

type RoleKey = keyof Pick<MockLotExercice, 'nbre_cs' | 'nbre_cf' | 'nbre_co' | 'nbre_fs' | 'nbre_mo' | 'nbre_es'>;

const ROLES: { acronyme: string; label: string; id: string; key: RoleKey }[] = [
  { acronyme: 'CS', label: 'Chef Secteur',         id: 'rl-1', key: 'nbre_cs' },
  { acronyme: 'CF', label: 'Ctrl. Formation',      id: 'rl-2', key: 'nbre_cf' },
  { acronyme: 'CO', label: 'Ctrl. Ordinaire',      id: 'rl-3', key: 'nbre_co' },
  { acronyme: 'FS', label: 'Form. Saigné',         id: 'rl-4', key: 'nbre_fs' },
  { acronyme: 'MO', label: 'Moniteur',             id: 'rl-5', key: 'nbre_mo' },
  { acronyme: 'ES', label: 'Équipe Spéciale',      id: 'rl-6', key: 'nbre_es' },
];

// ─── Helpers visuel ───────────────────────────────────────────────────────────

const ratioTaux = (pourvus: number, cible: number) =>
  cible > 0 ? Math.round((pourvus / cible) * 100) : null;

const cellBg = (t: number | null) => {
  if (t === null) return 'transparent';
  if (t >= 90)    return '#dcfce7';
  if (t >= 70)    return '#fef9c3';
  return '#fee2e2';
};

const cellTxt = (t: number | null) => {
  if (t === null) return '#9ca3af';
  if (t >= 90)    return '#15803d';
  if (t >= 70)    return '#92400e';
  return '#991b1b';
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });

// ─── Composant ────────────────────────────────────────────────────────────────

const CDReportingContainer = () => {
  const user      = useAuthStore((s) => s.user);
  const operateur = MOCK_OPERATEURS.find((o) => o.acronyme === user?.operateur && o.encadreur) ?? null;
  const opId      = operateur?.id ?? null;

  // ── Exercices disponibles pour cet opérateur ──────────────────────────────
  const exercices = useMemo(() => {
    const contractIds = MOCK_CONTRATS
      .filter((c) => !opId || c.id_operateur === opId)
      .map((c) => c.id);
    return MOCK_EXERCICES
      .filter((e) => contractIds.includes(e.id_contrat))
      .sort((a, b) => b.annee.localeCompare(a.annee));
  }, [opId]);

  const defaultExId = (exercices.find((e) => e.statut) ?? exercices[0])?.id ?? '';
  const [selectedExId, setSelectedExId] = useState<string>(defaultExId);
  const selectedEx = exercices.find((e) => e.id === selectedExId) ?? null;

  // ── Secteurs de l'opérateur ───────────────────────────────────────────────
  const opSecteurs = useMemo(
    () => MOCK_OPERATEUR_SECTEUR.filter((os) => !opId || os.id_operateur === opId),
    [opId],
  );

  // ── Construction de la matrice secteur × rôle ────────────────────────────
  const matrix = useMemo(() => {
    if (!selectedEx) return [];

    return opSecteurs.map((os) => {
      const olIds = MOCK_OPERATEUR_LOT
        .filter((ol) => ol.id_operateur_secteur === os.id)
        .map((ol) => ol.id);
      const les = MOCK_LOT_EXERCICE.filter(
        (le) => le.id_exercice === selectedEx.id && olIds.includes(le.id_operateur_lot),
      );

      const roles = ROLES.map((r) => {
        const cible   = les.reduce((s, le) => s + le[r.key], 0);
        const pourvus = MOCK_POSTES
          .filter((p) => p.id_operateur_secteur === os.id && p.role === r.id && p.actif)
          .reduce((s, p) => s + p.nbre_postes, 0);
        const t = ratioTaux(pourvus, cible);
        return { ...r, cible, pourvus, t };
      });

      const totalCible   = roles.reduce((s, r) => s + r.cible,   0);
      const totalPourvus = roles.reduce((s, r) => s + r.pourvus, 0);

      return { os, roles, totalCible, totalPourvus, t: ratioTaux(totalPourvus, totalCible) };
    });
  }, [opSecteurs, selectedEx]);

  // ── Totaux colonnes ───────────────────────────────────────────────────────
  const colTotaux = ROLES.map((r) => {
    const cible   = matrix.reduce((s, row) => s + (row.roles.find((x) => x.id === r.id)?.cible   ?? 0), 0);
    const pourvus = matrix.reduce((s, row) => s + (row.roles.find((x) => x.id === r.id)?.pourvus ?? 0), 0);
    return { ...r, cible, pourvus, t: ratioTaux(pourvus, cible) };
  });
  const grandCible   = matrix.reduce((s, r) => s + r.totalCible,   0);
  const grandPourvus = matrix.reduce((s, r) => s + r.totalPourvus, 0);
  const grandTaux    = ratioTaux(grandPourvus, grandCible);

  // ─────────────────────────────────────────────────────────────────────────

  const th: React.CSSProperties = {
    padding: '10px 10px', fontWeight: 700, fontSize: 12,
    textAlign: 'center', whiteSpace: 'nowrap',
    background: '#f9fafb', borderBottom: '2px solid #e5e7eb',
  };
  const td: React.CSSProperties = {
    padding: '9px 10px', textAlign: 'center',
    borderBottom: '1px solid #f3f4f6', fontSize: 13,
  };

  return (
    <>
      <style>{`
        @media print {
          .sidebar-wrapper, .page-header, .no-print { display: none !important; }
          .page-body { margin: 0 !important; padding: 0 !important; }
          body { font-size: 11px; }
        }
      `}</style>

      <div className='container-fluid p-3' style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* En-tête */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h4 style={{ margin: '0 0 4px', fontWeight: 700 }}>
              Reporting{operateur ? ` — ${operateur.acronyme}` : ''}
            </h4>
            <p style={{ margin: 0, color: '#9ca3af', fontSize: 13 }}>
              Effectifs prévus vs déployés par secteur et par rôle
            </p>
          </div>

          <div className='no-print' style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Calendar size={15} style={{ color: '#6b7280', flexShrink: 0 }} />
              <select
                value={selectedExId}
                onChange={(e) => setSelectedExId(e.target.value)}
                style={{
                  fontSize: 13, padding: '5px 10px', borderRadius: 8,
                  border: '1px solid #e5e7eb', background: '#fff',
                  cursor: 'pointer', outline: 'none',
                }}
              >
                {exercices.map((ex) => (
                  <option key={ex.id} value={ex.id}>
                    {ex.lib}{ex.statut ? ' (en cours)' : ' (clôturé)'}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => window.print()}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 8, border: 'none',
                background: '#24695c', color: '#fff',
                fontSize: 13, fontWeight: 600, cursor: 'pointer',
              }}
            >
              <Printer size={14} />
              Imprimer
            </button>
          </div>
        </div>

        {/* Contexte exercice */}
        {selectedEx && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13, color: '#6b7280', flexWrap: 'wrap' }}>
            <span>Exercice : <strong style={{ color: '#111' }}>{selectedEx.lib}</strong></span>
            <span>Depuis le {fmtDate(selectedEx.annee)}</span>
            {selectedEx.cloture && <span>→ clôturé le {fmtDate(selectedEx.cloture)}</span>}
            <span style={{
              background: selectedEx.statut ? '#dcfce7' : '#f3f4f6',
              color:      selectedEx.statut ? '#15803d' : '#6b7280',
              padding: '2px 8px', borderRadius: 6, fontSize: 11, fontWeight: 700,
            }}>
              {selectedEx.statut ? 'Actif' : 'Clôturé'}
            </span>
          </div>
        )}

        {/* Tableau matriciel */}
        {matrix.length === 0 ? (
          <p style={{ color: '#9ca3af', fontSize: 13 }}>Aucune donnée pour cet exercice.</p>
        ) : (
          <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid #e5e7eb' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th style={{ ...th, textAlign: 'left', paddingLeft: 16 }}>Secteur</th>
                  {ROLES.map((r) => (
                    <th key={r.id} style={{ ...th, minWidth: 82 }}>
                      <div style={{ fontSize: 13 }}>{r.acronyme}</div>
                      <div style={{ fontSize: 10, fontWeight: 400, color: '#9ca3af' }}>
                        {r.label.split(' ').pop()}
                      </div>
                    </th>
                  ))}
                  <th style={{ ...th, minWidth: 88 }}>Total</th>
                  <th style={{ ...th, minWidth: 72 }}>Taux</th>
                </tr>
              </thead>

              <tbody>
                {matrix.map(({ os, roles, totalCible, totalPourvus, t: rowTaux }) => (
                  <tr key={os.id} style={{ transition: 'background .1s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#f9fafb')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '')}
                  >
                    <td style={{ ...td, textAlign: 'left', paddingLeft: 16 }}>
                      <div style={{ fontWeight: 600 }}>{os.lib_secteur}</div>
                      <div style={{ fontSize: 11, color: '#9ca3af' }}>Code {os.cde_secteur}</div>
                    </td>
                    {roles.map((r) => (
                      <td key={r.id} style={td}>
                        {r.cible === 0 ? (
                          <span style={{ color: '#d1d5db' }}>—</span>
                        ) : (
                          <div style={{
                            display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
                            background: cellBg(r.t), borderRadius: 8, padding: '3px 10px', minWidth: 56,
                          }}>
                            <span style={{ fontWeight: 700, color: cellTxt(r.t), fontSize: 13 }}>
                              {r.pourvus}/{r.cible}
                            </span>
                            <span style={{ fontSize: 10, color: cellTxt(r.t) }}>{r.t}%</span>
                          </div>
                        )}
                      </td>
                    ))}
                    <td style={{ ...td, fontWeight: 700 }}>
                      {totalPourvus}/{totalCible}
                    </td>
                    <td style={td}>
                      <span style={{
                        background: cellBg(rowTaux), color: cellTxt(rowTaux),
                        padding: '3px 12px', borderRadius: 20, fontWeight: 700, fontSize: 13,
                        whiteSpace: 'nowrap',
                      }}>
                        {rowTaux !== null ? `${rowTaux}%` : '—'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr style={{ background: '#f9fafb', borderTop: '2px solid #e5e7eb' }}>
                  <td style={{ ...td, textAlign: 'left', paddingLeft: 16, fontWeight: 700 }}>Total</td>
                  {colTotaux.map((r) => (
                    <td key={r.id} style={td}>
                      {r.cible === 0 ? (
                        <span style={{ color: '#d1d5db' }}>—</span>
                      ) : (
                        <div style={{
                          display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
                          background: cellBg(r.t), borderRadius: 8, padding: '3px 10px', minWidth: 56,
                        }}>
                          <span style={{ fontWeight: 700, color: cellTxt(r.t), fontSize: 13 }}>
                            {r.pourvus}/{r.cible}
                          </span>
                          <span style={{ fontSize: 10, color: cellTxt(r.t) }}>{r.t}%</span>
                        </div>
                      )}
                    </td>
                  ))}
                  <td style={{ ...td, fontWeight: 800, fontSize: 14 }}>
                    {grandPourvus}/{grandCible}
                  </td>
                  <td style={td}>
                    <span style={{
                      background: cellBg(grandTaux), color: cellTxt(grandTaux),
                      padding: '4px 14px', borderRadius: 20, fontWeight: 800, fontSize: 14,
                    }}>
                      {grandTaux !== null ? `${grandTaux}%` : '—'}
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}

        {/* Légende */}
        <div className='no-print' style={{ display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: 12 }}>
          {[
            { bg: '#dcfce7', txt: '#15803d', label: '≥ 90 % — Objectif atteint' },
            { bg: '#fef9c3', txt: '#92400e', label: '70–89 % — En cours' },
            { bg: '#fee2e2', txt: '#991b1b', label: '< 70 % — Insuffisant' },
          ].map(({ bg, txt, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: bg, border: `1px solid ${txt}33`, flexShrink: 0 }} />
              <span style={{ color: txt, fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default CDReportingContainer;
