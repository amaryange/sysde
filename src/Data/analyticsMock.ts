// Données dérivées de mockData.ts (SAPH/PALMCI/SOGB) + agrégats pré-calculés.
// getAnalyticsData(opId) retourne les données filtrées par opérateur.

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

// ─── KPIs globaux (tous opérateurs) ──────────────────────────────────────────

export const kpiData = {
  tauxDeploiement:  76,
  postesTotal:      246,
  postesPouvus:     188,
  postesVacants:    58,
  encadreursActifs: 188,
  contratsActifs:   2,
  contratsExpirant: 2,
};

// ─── Performance par opérateur ────────────────────────────────────────────────

export const performanceOperateurs: PerformanceOperateur[] = [
  { operateur: 'SAPH',   id_operateur: 'op-1', postesAttribues: 123, postesPouvus: 98,  taux: 80 },
  { operateur: 'PALMCI', id_operateur: 'op-2', postesAttribues: 78,  postesPouvus: 58,  taux: 74 },
  { operateur: 'SOGB',   id_operateur: 'op-3', postesAttribues: 45,  postesPouvus: 32,  taux: 71 },
];

// ─── Déploiement par secteur ──────────────────────────────────────────────────

export const deploiementParSecteur: DeploiementSecteur[] = [
  { secteur: 'Abengourou',   code: '001', id_operateur: 'op-1', prevus: 82,  pourvus: 68, vacants: 14, tauxPourcentage: 83 },
  { secteur: 'Agnibilékrou', code: '003', id_operateur: 'op-1', prevus: 41,  pourvus: 30, vacants: 11, tauxPourcentage: 73 },
  { secteur: 'Bondoukou',    code: '002', id_operateur: 'op-2', prevus: 43,  pourvus: 32, vacants: 11, tauxPourcentage: 74 },
  { secteur: 'Daoukro',      code: '005', id_operateur: 'op-2', prevus: 35,  pourvus: 26, vacants: 9,  tauxPourcentage: 74 },
  { secteur: 'Tanda',        code: '004', id_operateur: 'op-3', prevus: 32,  pourvus: 23, vacants: 9,  tauxPourcentage: 72 },
  { secteur: 'Grand-Béréby', code: '006', id_operateur: 'op-3', prevus: 13,  pourvus: 9,  vacants: 4,  tauxPourcentage: 69 },
];

// ─── Répartition par rôle (par opérateur, exercice en cours) ─────────────────
// Calculé depuis MOCK_LOT_EXERCICE pour ex-2 (SAPH), ex-3 (PALMCI), ex-4 (SOGB)

const repartitionAll: RepartitionRole[] = [
  { role: 'CS', nom: 'Chef Secteur',         reel: 12,  cible: 15  },
  { role: 'CF', nom: 'Contrôleur Formation', reel: 18,  cible: 21  },
  { role: 'CO', nom: 'Contrôleur Ordinaire', reel: 24,  cible: 28  },
  { role: 'FS', nom: 'Formateur Saigné',     reel: 63,  cible: 72  },
  { role: 'MO', nom: 'Moniteur',             reel: 101, cible: 120 },
  { role: 'ES', nom: 'Équipe Spéciale',      reel: 16,  cible: 20  },
];

const repartitionPerOp: Record<string, RepartitionRole[]> = {
  'op-1': [
    { role: 'CS', nom: 'Chef Secteur',         reel: 5,  cible: 6  },
    { role: 'CF', nom: 'Contrôleur Formation', reel: 9,  cible: 10 },
    { role: 'CO', nom: 'Contrôleur Ordinaire', reel: 12, cible: 15 },
    { role: 'FS', nom: 'Formateur Saigné',     reel: 33, cible: 40 },
    { role: 'MO', nom: 'Moniteur',             reel: 51, cible: 60 },
    { role: 'ES', nom: 'Équipe Spéciale',      reel: 8,  cible: 10 },
  ],
  'op-2': [
    { role: 'CS', nom: 'Chef Secteur',         reel: 4,  cible: 5  },
    { role: 'CF', nom: 'Contrôleur Formation', reel: 6,  cible: 7  },
    { role: 'CO', nom: 'Contrôleur Ordinaire', reel: 7,  cible: 8  },
    { role: 'FS', nom: 'Formateur Saigné',     reel: 20, cible: 24 },
    { role: 'MO', nom: 'Moniteur',             reel: 32, cible: 38 },
    { role: 'ES', nom: 'Équipe Spéciale',      reel: 5,  cible: 6  },
  ],
  'op-3': [
    { role: 'CS', nom: 'Chef Secteur',         reel: 3,  cible: 4  },
    { role: 'CF', nom: 'Contrôleur Formation', reel: 3,  cible: 4  },
    { role: 'CO', nom: 'Contrôleur Ordinaire', reel: 5,  cible: 6  },
    { role: 'FS', nom: 'Formateur Saigné',     reel: 10, cible: 14 },
    { role: 'MO', nom: 'Moniteur',             reel: 18, cible: 22 },
    { role: 'ES', nom: 'Équipe Spéciale',      reel: 3,  cible: 4  },
  ],
};

export const repartitionRoles = repartitionAll;

// ─── Évolution N vs N-1 ───────────────────────────────────────────────────────

const evolutionAll = {
  mois: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
  n1:   [140, 148, 155, 162, 168, 172, 175, 178, 181, 183, 185, 186],
  n:    [168, 175, 180, 185, 188, null, null, null, null, null, null, null],
};

const evolutionPerOp: Record<string, typeof evolutionAll> = {
  'op-1': {
    mois: evolutionAll.mois,
    n1:   [78, 82, 86, 90, 94, 96, 97, 98, 99, 100, 101, 102],
    n:    [92, 95, 98, 100, 98, null, null, null, null, null, null, null],
  },
  'op-2': {
    mois: evolutionAll.mois,
    n1:   [40, 43, 45, 47, 49, 50, 52, 54, 55, 56, 57, 58],
    n:    [52, 55, 57, 58, null, null, null, null, null, null, null, null],
  },
  'op-3': {
    mois: evolutionAll.mois,
    n1:   [22, 23, 24, 25, 25, 26, 26, 26, 27, 27, 27, 26],
    n:    [24, 26, 29, 27, null, null, null, null, null, null, null, null],
  },
};

export const evolutionEffectifs = evolutionAll;

// ─── Alertes contrats ─────────────────────────────────────────────────────────

export const alertesContrats: AlerContrat[] = [
  { num: 'CTR-2023-005', operateur: 'SOGB',   id_operateur: 'op-3', fin: '2026-06-30', joursRestants: 47,  montant: '60 000 000'  },
  { num: 'CTR-2024-002', operateur: 'PALMCI', id_operateur: 'op-2', fin: '2026-07-31', joursRestants: 78,  montant: '85 000 000'  },
  { num: 'CTR-2024-001', operateur: 'SAPH',   id_operateur: 'op-1', fin: '2027-12-31', joursRestants: 596, montant: '150 000 000' },
];

// ─── Alertes secteurs ─────────────────────────────────────────────────────────

export const alertesSecteurs: AlerteSecteur[] = [
  { secteur: 'Lot LT-09 — Niablé (Tanda)',         probleme: 'Aucun Chef Secteur',   gravite: 'critique', id_operateur: 'op-3' },
  { secteur: 'Lot LT-02 — Aniassué (Abengourou)',   probleme: '5 postes MO vacants',  gravite: 'warning',  id_operateur: 'op-1' },
  { secteur: 'Lot LT-12 — Grand-Béréby',            probleme: 'Taux de couverture < 65%', gravite: 'warning', id_operateur: 'op-3' },
];

// ─── Helper : données filtrées par opérateur ──────────────────────────────────

export const getAnalyticsData = (opId: string | null) => {
  const ops      = opId ? performanceOperateurs.filter((o) => o.id_operateur === opId)   : performanceOperateurs;
  const secs     = opId ? deploiementParSecteur.filter((s) => s.id_operateur === opId)   : deploiementParSecteur;
  const contrats = opId ? alertesContrats.filter((c) => c.id_operateur === opId)         : alertesContrats;
  const secAlerts= opId ? alertesSecteurs.filter((a) => a.id_operateur === opId)         : alertesSecteurs;
  const roles    = opId ? (repartitionPerOp[opId] ?? repartitionAll)                      : repartitionAll;
  const evolution= opId ? (evolutionPerOp[opId]   ?? evolutionAll)                        : evolutionAll;

  const postesTotal  = secs.reduce((s, r) => s + r.prevus, 0)  || kpiData.postesTotal;
  const postesPouvus = secs.reduce((s, r) => s + r.pourvus, 0) || kpiData.postesPouvus;
  const tauxDeploiement = postesTotal > 0 ? Math.round((postesPouvus / postesTotal) * 100) : 0;

  return {
    kpi: {
      tauxDeploiement,
      postesTotal,
      postesPouvus,
      postesVacants:    postesTotal - postesPouvus,
      encadreursActifs: postesPouvus,
      contratsActifs:   contrats.filter((c) => c.joursRestants > 0).length,
      contratsExpirant: contrats.filter((c) => c.joursRestants <= 90).length,
    },
    deploiementParSecteur: secs,
    performanceOperateurs: ops,
    alertesContrats:       contrats,
    alertesSecteurs:       secAlerts,
    repartitionRoles:      roles,
    evolutionEffectifs:    evolution,
  };
};
