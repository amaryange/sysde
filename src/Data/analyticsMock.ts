import {
  MOCK_OPERATEURS,
  MOCK_OPERATEUR_SECTEUR,
  MOCK_OPERATEUR_LOT,
  MOCK_CONTRATS,
  MOCK_EXERCICES,
  MOCK_LOT_EXERCICE,
  MOCK_POSTES,
} from './mockData';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PerformanceOperateur {
  operateur: string; id_operateur: string;
  postesAttribues: number; postesPouvus: number; taux: number;
}

export interface DeploiementSecteur {
  secteur: string; code: string; id_operateur: string;
  prevus: number; pourvus: number; vacants: number; tauxPourcentage: number;
}

export interface AlerContrat {
  num: string; operateur: string; id_operateur: string;
  fin: string; joursRestants: number; montant: string;
}

export interface AlerteSecteur {
  secteur: string; probleme: string; gravite: 'critique' | 'warning'; id_operateur: string;
}

export interface RepartitionRole {
  role: string; nom: string; reel: number; cible: number;
}

// ─── Alertes secteurs ────────────────────────────────────────────────────────
// Annotations métier au niveau lot — non dérivables depuis les postes (qui sont
// au niveau secteur). En Phase 2 : calculées depuis la couverture par lot.

const ALERTES_SECTEURS: AlerteSecteur[] = [
  { secteur: 'Lot LT-09 — Niablé (Tanda)',        probleme: 'Aucun Chef Secteur',       gravite: 'critique', id_operateur: 'op-3' },
  { secteur: 'Lot LT-02 — Aniassué (Abengourou)', probleme: '5 postes MO vacants',      gravite: 'warning',  id_operateur: 'op-1' },
  { secteur: 'Lot LT-12 — Grand-Béréby',           probleme: 'Taux de couverture < 65%', gravite: 'warning',  id_operateur: 'op-3' },
];

// ─── Évolution mensuelle N vs N-1 ────────────────────────────────────────────
// Données historiques absentes du schéma actuel.
// En Phase 2 : snapshots mensuels depuis une table de suivi.

const MOIS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];

const EVOLUTION_PAR_OP: Record<string, { n1: number[]; n: (number | null)[] }> = {
  'op-1': { n1: [78, 82, 86, 90, 94, 96, 97, 98, 99, 100, 101, 102], n: [92, 95, 98, 100, 98, null, null, null, null, null, null, null] },
  'op-2': { n1: [40, 43, 45, 47, 49, 50, 52, 54, 55, 56,  57,  58],  n: [52, 55, 57, 58, null, null, null, null, null, null, null, null] },
  'op-3': { n1: [22, 23, 24, 25, 25, 26, 26, 26, 27, 27,  27,  26],  n: [24, 26, 29, 27, null, null, null, null, null, null, null, null] },
};

// ─── Mapping rôle acronyme → id_role ─────────────────────────────────────────

const ROLE_ID: Record<string, string> = {
  CS: 'rl-1', CF: 'rl-2', CO: 'rl-3', FS: 'rl-4', MO: 'rl-5', ES: 'rl-6',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const joursRestants = (fin: string) =>
  Math.ceil((new Date(fin).getTime() - Date.now()) / 86_400_000);

function activeExerciceForOp(opId: string) {
  const contrat = MOCK_CONTRATS.find((c) => c.id_operateur === opId && c.statut);
  if (!contrat) return null;
  return MOCK_EXERCICES.find((e) => e.id_contrat === contrat.id && e.statut) ?? null;
}

function lotExercicesForOs(osId: string, exId: string) {
  const olIds = MOCK_OPERATEUR_LOT
    .filter((ol) => ol.id_operateur_secteur === osId)
    .map((ol) => ol.id);
  return MOCK_LOT_EXERCICE.filter(
    (le) => le.id_exercice === exId && olIds.includes(le.id_operateur_lot),
  );
}

function sumRoles(les: typeof MOCK_LOT_EXERCICE) {
  return les.reduce(
    (acc, le) => ({
      cs: acc.cs + le.nbre_cs,
      cf: acc.cf + le.nbre_cf,
      co: acc.co + le.nbre_co,
      fs: acc.fs + le.nbre_fs,
      mo: acc.mo + le.nbre_mo,
      es: acc.es + le.nbre_es,
    }),
    { cs: 0, cf: 0, co: 0, fs: 0, mo: 0, es: 0 },
  );
}

// Postes actifs (pourvus) pour un os donné, optionnellement filtrés par rôle.
function postesPourvus(osId: string, roleId?: string) {
  return MOCK_POSTES
    .filter((p) => p.id_operateur_secteur === osId && p.actif && (!roleId || p.role === roleId))
    .reduce((s, p) => s + p.nbre_postes, 0);
}

// ─── getAnalyticsData ─────────────────────────────────────────────────────────

export const getAnalyticsData = (opId: string | null) => {
  const encadreurs = MOCK_OPERATEURS.filter((o) => o.encadreur);
  const opIds = opId ? [opId] : encadreurs.map((o) => o.id);

  // ── Déploiement par secteur ──────────────────────────────────────────────
  // cible  = lot_exercice (objectifs contractualisés)
  // pourvus = postes actifs (déployés réellement)
  const deploiementParSecteur: DeploiementSecteur[] = opIds.flatMap((oid) => {
    const ex = activeExerciceForOp(oid);
    if (!ex) return [];

    return MOCK_OPERATEUR_SECTEUR
      .filter((os) => os.id_operateur === oid)
      .map((os) => {
        const les    = lotExercicesForOs(os.id, ex.id);
        const t      = sumRoles(les);
        const prevus  = t.cs + t.cf + t.co + t.fs + t.mo + t.es;
        const pourvus = postesPourvus(os.id);
        return {
          secteur:         os.lib_secteur,
          code:            os.cde_secteur,
          id_operateur:    oid,
          prevus,
          pourvus,
          vacants:         prevus - pourvus,
          tauxPourcentage: prevus > 0 ? Math.round((pourvus / prevus) * 100) : 0,
        };
      });
  });

  // ── KPI globaux ──────────────────────────────────────────────────────────
  const postesTotal  = deploiementParSecteur.reduce((s, r) => s + r.prevus,  0);
  const postesPouvus = deploiementParSecteur.reduce((s, r) => s + r.pourvus, 0);
  const tauxDeploiement = postesTotal > 0 ? Math.round((postesPouvus / postesTotal) * 100) : 0;

  // ── Performance par opérateur ────────────────────────────────────────────
  const performanceOperateurs: PerformanceOperateur[] = opIds.map((oid) => {
    const rows = deploiementParSecteur.filter((d) => d.id_operateur === oid);
    const att  = rows.reduce((s, r) => s + r.prevus,  0);
    const pou  = rows.reduce((s, r) => s + r.pourvus, 0);
    const op   = encadreurs.find((o) => o.id === oid)!;
    return {
      operateur:       op.acronyme,
      id_operateur:    oid,
      postesAttribues: att,
      postesPouvus:    pou,
      taux:            att > 0 ? Math.round((pou / att) * 100) : 0,
    };
  });

  // ── Répartition par rôle ─────────────────────────────────────────────────
  // cible = lot_exercice ; reel = postes actifs — tous deux filtrés par opIds
  const osIds = MOCK_OPERATEUR_SECTEUR
    .filter((os) => opIds.includes(os.id_operateur))
    .map((os) => os.id);

  const cibleAccum = { cs: 0, cf: 0, co: 0, fs: 0, mo: 0, es: 0 };
  for (const oid of opIds) {
    const ex = activeExerciceForOp(oid);
    if (!ex) continue;
    const opOsIds = MOCK_OPERATEUR_SECTEUR.filter((os) => os.id_operateur === oid).map((os) => os.id);
    for (const osId of opOsIds) {
      const t = sumRoles(lotExercicesForOs(osId, ex.id));
      cibleAccum.cs += t.cs; cibleAccum.cf += t.cf; cibleAccum.co += t.co;
      cibleAccum.fs += t.fs; cibleAccum.mo += t.mo; cibleAccum.es += t.es;
    }
  }

  const reelForRole = (acronyme: string) =>
    MOCK_POSTES
      .filter((p) => p.actif && p.role === ROLE_ID[acronyme] && osIds.includes(p.id_operateur_secteur))
      .reduce((s, p) => s + p.nbre_postes, 0);

  const repartitionRoles: RepartitionRole[] = [
    { role: 'CS', nom: 'Chef Secteur',         cible: cibleAccum.cs, reel: reelForRole('CS') },
    { role: 'CF', nom: 'Contrôleur Formation', cible: cibleAccum.cf, reel: reelForRole('CF') },
    { role: 'CO', nom: 'Contrôleur Ordinaire', cible: cibleAccum.co, reel: reelForRole('CO') },
    { role: 'FS', nom: 'Formateur Saigné',     cible: cibleAccum.fs, reel: reelForRole('FS') },
    { role: 'MO', nom: 'Moniteur',             cible: cibleAccum.mo, reel: reelForRole('MO') },
    { role: 'ES', nom: 'Équipe Spéciale',      cible: cibleAccum.es, reel: reelForRole('ES') },
  ];

  // ── Alertes contrats ─────────────────────────────────────────────────────
  const alertesContrats: AlerContrat[] = MOCK_CONTRATS
    .filter((c) => c.statut && opIds.includes(c.id_operateur))
    .map((c) => {
      const op = encadreurs.find((o) => o.id === c.id_operateur)!;
      return {
        num:           c.num,
        operateur:     op.acronyme,
        id_operateur:  c.id_operateur,
        fin:           c.fin,
        joursRestants: joursRestants(c.fin),
        montant:       c.montant.toLocaleString('fr-FR'),
      };
    })
    .sort((a, b) => a.joursRestants - b.joursRestants);

  // ── Alertes secteurs ─────────────────────────────────────────────────────
  const alertesSecteurs = opId
    ? ALERTES_SECTEURS.filter((a) => a.id_operateur === opId)
    : ALERTES_SECTEURS;

  // ── Évolution effectifs ──────────────────────────────────────────────────
  const evolutionEffectifs = opId && EVOLUTION_PAR_OP[opId]
    ? { mois: MOIS, ...EVOLUTION_PAR_OP[opId] }
    : {
        mois: MOIS,
        n1: MOIS.map((_, i) =>
          Object.values(EVOLUTION_PAR_OP).reduce((s, e) => s + e.n1[i], 0),
        ),
        n: MOIS.map((_, i) => {
          const vals = Object.values(EVOLUTION_PAR_OP).map((e) => e.n[i]);
          return vals.every((v) => v === null)
            ? null
            : vals.reduce((s: number, v) => s + (v ?? 0), 0);
        }),
      };

  return {
    kpi: {
      tauxDeploiement,
      postesTotal,
      postesPouvus,
      postesVacants:    postesTotal - postesPouvus,
      encadreursActifs: postesPouvus,
      contratsActifs:   alertesContrats.filter((c) => c.joursRestants > 0).length,
      contratsExpirant: alertesContrats.filter((c) => c.joursRestants <= 90).length,
    },
    deploiementParSecteur,
    performanceOperateurs,
    alertesContrats,
    alertesSecteurs,
    repartitionRoles,
    evolutionEffectifs,
  };
};
