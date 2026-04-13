// ─── KPIs globaux ─────────────────────────────────────────────────────────────

export const kpiData = {
  tauxDeploiement:  78,   // %
  postesTotal:      200,
  postesPouvus:     156,
  postesVacants:    44,
  encadreursActifs: 156,
  contratsActifs:   3,
  contratsExpirant: 2,    // dans les 30 jours
};

// ─── Taux de déploiement par secteur ──────────────────────────────────────────

export const deploiementParSecteur = [
  { secteur: 'Secteur Centre', code: '001', prevus: 70,  pourvus: 58, vacants: 12, tauxPourcentage: 83 },
  { secteur: 'Secteur Nord',   code: '002', prevus: 50,  pourvus: 34, vacants: 16, tauxPourcentage: 68 },
  { secteur: 'Secteur Est',    code: '003', prevus: 80,  pourvus: 64, vacants: 16, tauxPourcentage: 80 },
];

// ─── Répartition par rôle ─────────────────────────────────────────────────────

export const repartitionRoles = [
  { role: 'CS', nom: 'Chef Secteur',         reel: 8,   cible: 10  },
  { role: 'CF', nom: 'Contrôleur Formation', reel: 22,  cible: 24  },
  { role: 'CO', nom: 'Contrôleur Ordinaire', reel: 35,  cible: 38  },
  { role: 'FS', nom: 'Formateur Saigné',     reel: 18,  cible: 20  },
  { role: 'MO', nom: 'Moniteur',             reel: 68,  cible: 80  },
  { role: 'ES', nom: 'Équipe Spéciale',       reel: 5,   cible: 8   },
];

// ─── Performance opérateurs ───────────────────────────────────────────────────

export const performanceOperateurs = [
  { operateur: 'ANADER',  postesAttribues: 85, postesPouvus: 72, taux: 85 },
  { operateur: 'FIRCA',   postesAttribues: 60, postesPouvus: 48, taux: 80 },
  { operateur: 'CNRA',    postesAttribues: 35, postesPouvus: 26, taux: 74 },
  { operateur: 'SODEFOR', postesAttribues: 20, postesPouvus: 10, taux: 50 },
];

// ─── Évolution N vs N-1 ───────────────────────────────────────────────────────

export const evolutionEffectifs = {
  mois: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
  n1:   [90,  95,  100, 108, 115, 118, 120, 122, 125, 128, 130, 132],  // 2023
  n:    [110, 118, 124, 130, 136, 140, 142, 148, 150, 154, 156, null], // 2024 (en cours)
};

// ─── Alertes contrats ─────────────────────────────────────────────────────────

export const alertesContrats = [
  { num: 'CTR-2024-001', operateur: 'FIRCA',   fin: '2025-01-31', joursRestants: 20, montant: '45 000 000' },
  { num: 'CTR-2024-002', operateur: 'ANADER',  fin: '2025-02-14', joursRestants: 34, montant: '32 500 000' },
  { num: 'CTR-2024-003', operateur: 'CNRA',    fin: '2025-02-28', joursRestants: 48, montant: '18 000 000' },
];

// ─── Secteurs sous-encadrés (sans CS) ─────────────────────────────────────────

export const alertesSecteurs = [
  { secteur: 'Lot S002-B — Sinfra',         probleme: 'Aucun Chef Secteur',        gravite: 'critique' },
  { secteur: 'Lot S001-B — Yamoussoukro',   probleme: '6 postes MO vacants',       gravite: 'warning'  },
  { secteur: 'Lot S003-B — Sakassou',       probleme: 'Taux < 60%',                gravite: 'warning'  },
];
