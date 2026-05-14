// Données mockées partagées entre tous les onglets Paramètres.
// À remplacer par des appels API quand le backend sera branché.

export type MockOperateur = {
  id: string; rs: string; acronyme: string; adresse: string; email: string; tel: string; encadreur: boolean;
};
export type MockRole = {
  id: string; nom: string; acronyme: string; slug: string; encadreur: boolean;
};
export type MockSecteur = {
  id: string; lib: string; cde: string; region: string; departement: string; sprefecture: string;
};
export type MockLot = {
  id: string; num: string; cde: string; couvert: string; id_secteur: string; region: string; departement: string; sprefecture: string;
};
export type MockOperateurSecteur = {
  id: string; id_operateur: string; id_secteur: string; cde_secteur: string; lib_secteur: string;
};
export type MockOperateurLot = {
  id: string; id_operateur_secteur: string; id_lot: string; cde_lot: string; num_lot: string;
};
export type MockContrat = {
  id: string; num: string; id_operateur: string; debut: string; fin: string; signature: string; montant: number; statut: boolean;
};
export type MockExercice = {
  id: string; lib: string; annee: string; cloture: string; statut: boolean; id_contrat: string;
};
export type MockLotExercice = {
  id: string; id_exercice: string; id_operateur_lot: string;
  nbre_cs: number; nbre_cf: number; nbre_co: number;
  nbre_fs: number; nbre_mo: number; nbre_es: number; nbre_se: number;
};

// ---------------------------------------------------------------------------
// OPERATEURS
// ---------------------------------------------------------------------------
export const MOCK_OPERATEURS: MockOperateur[] = [
  { id: 'op-1', rs: 'SOCIETE AFRICAINE DE PLANTATION DHEVEA',                             acronyme: 'SAPH',    adresse: '08 BP 2188 Abidjan 08',        email: 'contact@saph.ci',    tel: '01020304', encadreur: true  },
  { id: 'op-2', rs: 'SOCIETE DE CAOUTCHOUC DU PALMCI',                                    acronyme: 'PALMCI',  adresse: '15 Rue des Palmiers, Abidjan', email: 'info@palmci.ci',     tel: '05060708', encadreur: true  },
  { id: 'op-3', rs: 'SOCIETE DE CAOUTCHOUC DE GRAND-BEREBY',                              acronyme: 'SOGB',    adresse: 'Grand-Béréby, Sud-Ouest',      email: 'sogb@sogb.ci',       tel: '07080910', encadreur: true  },
  { id: 'op-4', rs: 'ASSOCIATION DES PROFESSIONNELS DU CAOUTCHOUC',                       acronyme: 'APROMAC', adresse: '12 Bd Lagunaire, Abidjan',     email: 'contact@apromac.ci', tel: '01020304', encadreur: false },
  { id: 'op-5', rs: 'FONDS INTERPROFESSIONNEL POUR LA RECHERCHE ET LE CONSEIL AGRICOLE',  acronyme: 'FIRCA',   adresse: '01 BP 3726 Abidjan 01',         email: 'info@firca.ci',      tel: '05060708', encadreur: false },
];

// ---------------------------------------------------------------------------
// ROLES
// ---------------------------------------------------------------------------
export const MOCK_ROLES: MockRole[] = [
  { id: 'rl-1', nom: 'CHEF SECTEUR',          acronyme: 'CS', slug: 'chef_secteur',         encadreur: true  },
  { id: 'rl-2', nom: 'CONTROLEUR FORMATION',  acronyme: 'CF', slug: 'controleur_formation', encadreur: true  },
  { id: 'rl-3', nom: 'CONTROLEUR ORDINAIRE',  acronyme: 'CO', slug: 'controleur_ordinaire', encadreur: true  },
  { id: 'rl-4', nom: 'FORMATEUR SAIGNE',      acronyme: 'FS', slug: 'formateur_saigne',     encadreur: true  },
  { id: 'rl-5', nom: 'MONITEUR',              acronyme: 'MO', slug: 'moniteur',             encadreur: true  },
  { id: 'rl-6', nom: 'EQUIPE SPECIALE',       acronyme: 'ES', slug: 'equipe_speciale',      encadreur: true  },
  { id: 'rl-7', nom: 'SECRETAIRE',            acronyme: 'SE', slug: 'secretaire',           encadreur: true  },
  { id: 'rl-8', nom: 'ADMINISTRATEUR',        acronyme: 'AD', slug: 'administrateur',       encadreur: false },
  { id: 'rl-9', nom: 'DIRECTEUR',             acronyme: 'DI', slug: 'directeur',            encadreur: false },
];

// ---------------------------------------------------------------------------
// SECTEURS
// ---------------------------------------------------------------------------
export const MOCK_SECTEURS: MockSecteur[] = [
  { id: 'sec-1', lib: 'Abengourou',   cde: '001', region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Abengourou'   },
  { id: 'sec-2', lib: 'Bondoukou',    cde: '002', region: 'Zanzan',           departement: 'Bondoukou',    sprefecture: 'Bondoukou'    },
  { id: 'sec-3', lib: 'Agnibilékrou', cde: '003', region: 'Indénié-Djuablin', departement: 'Agnibilékrou', sprefecture: 'Agnibilékrou' },
  { id: 'sec-4', lib: 'Tanda',        cde: '004', region: 'Zanzan',           departement: 'Tanda',        sprefecture: 'Tanda'        },
  { id: 'sec-5', lib: 'Daoukro',      cde: '005', region: "N'Zi-Comoé",      departement: 'Daoukro',      sprefecture: 'Daoukro'      },
  { id: 'sec-6', lib: 'Grand-Béréby', cde: '006', region: 'Bas-Sassandra',    departement: 'Soubré',       sprefecture: 'Grand-Béréby' },
];

// ---------------------------------------------------------------------------
// LOTS
// ---------------------------------------------------------------------------
export const MOCK_LOTS: MockLot[] = [
  { id: 'lt-1',  num: '1',  cde: 'LT-01', couvert: 'Zone Nord Abengourou',   id_secteur: 'sec-1', region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Abengourou'   },
  { id: 'lt-2',  num: '2',  cde: 'LT-02', couvert: 'Zone Sud Abengourou',    id_secteur: 'sec-1', region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Aniassué'     },
  { id: 'lt-3',  num: '3',  cde: 'LT-03', couvert: 'Zone Est Abengourou',    id_secteur: 'sec-1', region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Ebilassokro'  },
  { id: 'lt-4',  num: '4',  cde: 'LT-04', couvert: 'Zone Nord Bondoukou',    id_secteur: 'sec-2', region: 'Zanzan',           departement: 'Bondoukou',    sprefecture: 'Bondoukou'    },
  { id: 'lt-5',  num: '5',  cde: 'LT-05', couvert: 'Zone Sud Bondoukou',     id_secteur: 'sec-2', region: 'Zanzan',           departement: 'Bondoukou',    sprefecture: 'Laoudi-Ba'    },
  { id: 'lt-6',  num: '6',  cde: 'LT-06', couvert: 'Zone Agnibilékrou 1',    id_secteur: 'sec-3', region: 'Indénié-Djuablin', departement: 'Agnibilékrou', sprefecture: 'Agnibilékrou' },
  { id: 'lt-7',  num: '7',  cde: 'LT-07', couvert: 'Zone Agnibilékrou 2',    id_secteur: 'sec-3', region: 'Indénié-Djuablin', departement: 'Agnibilékrou', sprefecture: 'Kotobi'       },
  { id: 'lt-8',  num: '8',  cde: 'LT-08', couvert: 'Zone Tanda Centrale',    id_secteur: 'sec-4', region: 'Zanzan',           departement: 'Tanda',        sprefecture: 'Tanda'        },
  { id: 'lt-9',  num: '9',  cde: 'LT-09', couvert: 'Zone Tanda Est',         id_secteur: 'sec-4', region: 'Zanzan',           departement: 'Tanda',        sprefecture: 'Niablé'       },
  { id: 'lt-10', num: '10', cde: 'LT-10', couvert: 'Zone Daoukro Nord',      id_secteur: 'sec-5', region: "N'Zi-Comoé",      departement: 'Daoukro',      sprefecture: 'Daoukro'      },
  { id: 'lt-11', num: '11', cde: 'LT-11', couvert: 'Zone Daoukro Sud',       id_secteur: 'sec-5', region: "N'Zi-Comoé",      departement: 'Daoukro',      sprefecture: 'Bocanda'      },
  { id: 'lt-12', num: '12', cde: 'LT-12', couvert: 'Zone Grand-Béréby Côte', id_secteur: 'sec-6', region: 'Bas-Sassandra',    departement: 'Soubré',       sprefecture: 'Grand-Béréby' },
];

// ---------------------------------------------------------------------------
// OPERATEUR_SECTEUR  (table pivot — secteur attribué à un opérateur)
// Un même secteur peut apparaître chez plusieurs opérateurs.
// ---------------------------------------------------------------------------
export const MOCK_OPERATEUR_SECTEUR: MockOperateurSecteur[] = [
  { id: 'os-1', id_operateur: 'op-1', id_secteur: 'sec-1', cde_secteur: '001', lib_secteur: 'Abengourou'   },  // SAPH   → Abengourou
  { id: 'os-2', id_operateur: 'op-1', id_secteur: 'sec-3', cde_secteur: '003', lib_secteur: 'Agnibilékrou' },  // SAPH   → Agnibilékrou
  { id: 'os-3', id_operateur: 'op-2', id_secteur: 'sec-2', cde_secteur: '002', lib_secteur: 'Bondoukou'    },  // PALMCI → Bondoukou
  { id: 'os-4', id_operateur: 'op-2', id_secteur: 'sec-5', cde_secteur: '005', lib_secteur: 'Daoukro'      },  // PALMCI → Daoukro
  { id: 'os-5', id_operateur: 'op-3', id_secteur: 'sec-4', cde_secteur: '004', lib_secteur: 'Tanda'        },  // SOGB   → Tanda
  { id: 'os-6', id_operateur: 'op-3', id_secteur: 'sec-6', cde_secteur: '006', lib_secteur: 'Grand-Béréby' },  // SOGB   → Grand-Béréby
  { id: 'os-7', id_operateur: 'op-4', id_secteur: 'sec-1', cde_secteur: '001', lib_secteur: 'Abengourou'   },  // APROMAC → Abengourou (même secteur que SAPH)
];

// ---------------------------------------------------------------------------
// OPERATEUR_LOT  (table pivot — lot attribué dans le contexte d'un secteur)
// ---------------------------------------------------------------------------
export const MOCK_OPERATEUR_LOT: MockOperateurLot[] = [
  // SAPH / Abengourou (os-1)
  { id: 'ol-1', id_operateur_secteur: 'os-1', id_lot: 'lt-1', cde_lot: 'LT-01', num_lot: '1' },
  { id: 'ol-2', id_operateur_secteur: 'os-1', id_lot: 'lt-2', cde_lot: 'LT-02', num_lot: '2' },
  { id: 'ol-3', id_operateur_secteur: 'os-1', id_lot: 'lt-3', cde_lot: 'LT-03', num_lot: '3' },
  // SAPH / Agnibilékrou (os-2)
  { id: 'ol-4', id_operateur_secteur: 'os-2', id_lot: 'lt-6', cde_lot: 'LT-06', num_lot: '6' },
  { id: 'ol-5', id_operateur_secteur: 'os-2', id_lot: 'lt-7', cde_lot: 'LT-07', num_lot: '7' },
  // PALMCI / Bondoukou (os-3)
  { id: 'ol-6', id_operateur_secteur: 'os-3', id_lot: 'lt-4', cde_lot: 'LT-04', num_lot: '4' },
  { id: 'ol-7', id_operateur_secteur: 'os-3', id_lot: 'lt-5', cde_lot: 'LT-05', num_lot: '5' },
  // PALMCI / Daoukro (os-4)
  { id: 'ol-8',  id_operateur_secteur: 'os-4', id_lot: 'lt-10', cde_lot: 'LT-10', num_lot: '10' },
  { id: 'ol-9',  id_operateur_secteur: 'os-4', id_lot: 'lt-11', cde_lot: 'LT-11', num_lot: '11' },
  // SOGB / Tanda (os-5)
  { id: 'ol-10', id_operateur_secteur: 'os-5', id_lot: 'lt-8', cde_lot: 'LT-08', num_lot: '8' },
  { id: 'ol-11', id_operateur_secteur: 'os-5', id_lot: 'lt-9', cde_lot: 'LT-09', num_lot: '9' },
  // SOGB / Grand-Béréby (os-6)
  { id: 'ol-12', id_operateur_secteur: 'os-6', id_lot: 'lt-12', cde_lot: 'LT-12', num_lot: '12' },
  // APROMAC / Abengourou (os-7) — partage les lots 1 et 2 avec SAPH
  { id: 'ol-13', id_operateur_secteur: 'os-7', id_lot: 'lt-1', cde_lot: 'LT-01', num_lot: '1' },
  { id: 'ol-14', id_operateur_secteur: 'os-7', id_lot: 'lt-2', cde_lot: 'LT-02', num_lot: '2' },
];

// ---------------------------------------------------------------------------
// CONTRATS
// ---------------------------------------------------------------------------
export const MOCK_CONTRATS: MockContrat[] = [
  { id: 'ct-1', num: 'CTR-2024-001', id_operateur: 'op-1', debut: '2024-01-01', fin: '2026-12-31', signature: '2023-12-15', montant: 150000000, statut: true  },
  { id: 'ct-2', num: 'CTR-2024-002', id_operateur: 'op-2', debut: '2024-02-01', fin: '2026-01-31', signature: '2024-01-20', montant: 85000000,  statut: true  },
  { id: 'ct-3', num: 'CTR-2023-005', id_operateur: 'op-3', debut: '2023-06-01', fin: '2026-05-31', signature: '2023-05-10', montant: 60000000,  statut: false },
];

// ---------------------------------------------------------------------------
// EXERCICES
// ---------------------------------------------------------------------------
export const MOCK_EXERCICES: MockExercice[] = [
  { id: 'ex-1', lib: 'Exercice 2024', annee: '2024-01-01', cloture: '2024-12-31', statut: false, id_contrat: 'ct-1' },
  { id: 'ex-2', lib: 'Exercice 2025', annee: '2025-01-01', cloture: '',           statut: true,  id_contrat: 'ct-1' },
  { id: 'ex-3', lib: 'Exercice 2024', annee: '2024-02-01', cloture: '',           statut: true,  id_contrat: 'ct-2' },
  { id: 'ex-4', lib: 'Exercice 2023', annee: '2023-06-01', cloture: '2024-05-31', statut: false, id_contrat: 'ct-3' },
];

// ---------------------------------------------------------------------------
// LOT_EXERCICE  (effectifs cibles par lot et par exercice)
// SAPH  : os-1→Abengourou (ol-1,ol-2,ol-3)  os-2→Agnibilékrou (ol-4,ol-5)
// PALMCI: os-3→Bondoukou  (ol-6,ol-7)        os-4→Daoukro      (ol-8,ol-9)
// SOGB  : os-5→Tanda      (ol-10,ol-11)      os-6→Grand-Béréby (ol-12)
// ---------------------------------------------------------------------------
export const MOCK_LOT_EXERCICE: MockLotExercice[] = [
  // ex-1 — SAPH 2024 (clôturé)
  { id: 'le-1',  id_exercice: 'ex-1', id_operateur_lot: 'ol-1',  nbre_cs: 1, nbre_cf: 2, nbre_co: 3, nbre_fs: 8,  nbre_mo: 12, nbre_es: 2, nbre_se: 1 },
  { id: 'le-2',  id_exercice: 'ex-1', id_operateur_lot: 'ol-2',  nbre_cs: 1, nbre_cf: 2, nbre_co: 2, nbre_fs: 6,  nbre_mo: 10, nbre_es: 2, nbre_se: 1 },
  { id: 'le-3',  id_exercice: 'ex-1', id_operateur_lot: 'ol-3',  nbre_cs: 1, nbre_cf: 2, nbre_co: 2, nbre_fs: 5,  nbre_mo: 8,  nbre_es: 1, nbre_se: 1 },
  { id: 'le-4',  id_exercice: 'ex-1', id_operateur_lot: 'ol-4',  nbre_cs: 1, nbre_cf: 1, nbre_co: 2, nbre_fs: 5,  nbre_mo: 8,  nbre_es: 1, nbre_se: 1 },
  { id: 'le-5',  id_exercice: 'ex-1', id_operateur_lot: 'ol-5',  nbre_cs: 1, nbre_cf: 1, nbre_co: 2, nbre_fs: 4,  nbre_mo: 7,  nbre_es: 1, nbre_se: 1 },
  // ex-2 — SAPH 2025 (en cours)
  { id: 'le-6',  id_exercice: 'ex-2', id_operateur_lot: 'ol-1',  nbre_cs: 1, nbre_cf: 2, nbre_co: 3, nbre_fs: 9,  nbre_mo: 14, nbre_es: 2, nbre_se: 1 },
  { id: 'le-7',  id_exercice: 'ex-2', id_operateur_lot: 'ol-2',  nbre_cs: 1, nbre_cf: 2, nbre_co: 3, nbre_fs: 7,  nbre_mo: 11, nbre_es: 2, nbre_se: 1 },
  { id: 'le-8',  id_exercice: 'ex-2', id_operateur_lot: 'ol-3',  nbre_cs: 1, nbre_cf: 2, nbre_co: 2, nbre_fs: 6,  nbre_mo: 9,  nbre_es: 2, nbre_se: 1 },
  { id: 'le-9',  id_exercice: 'ex-2', id_operateur_lot: 'ol-4',  nbre_cs: 1, nbre_cf: 2, nbre_co: 2, nbre_fs: 6,  nbre_mo: 9,  nbre_es: 1, nbre_se: 1 },
  { id: 'le-10', id_exercice: 'ex-2', id_operateur_lot: 'ol-5',  nbre_cs: 1, nbre_cf: 1, nbre_co: 2, nbre_fs: 5,  nbre_mo: 8,  nbre_es: 1, nbre_se: 1 },
  // ex-3 — PALMCI 2024 (en cours)
  { id: 'le-11', id_exercice: 'ex-3', id_operateur_lot: 'ol-6',  nbre_cs: 1, nbre_cf: 2, nbre_co: 2, nbre_fs: 6,  nbre_mo: 10, nbre_es: 2, nbre_se: 1 },
  { id: 'le-12', id_exercice: 'ex-3', id_operateur_lot: 'ol-7',  nbre_cs: 1, nbre_cf: 1, nbre_co: 2, nbre_fs: 5,  nbre_mo: 8,  nbre_es: 1, nbre_se: 1 },
  { id: 'le-13', id_exercice: 'ex-3', id_operateur_lot: 'ol-8',  nbre_cs: 1, nbre_cf: 2, nbre_co: 2, nbre_fs: 5,  nbre_mo: 8,  nbre_es: 1, nbre_se: 1 },
  { id: 'le-14', id_exercice: 'ex-3', id_operateur_lot: 'ol-9',  nbre_cs: 1, nbre_cf: 1, nbre_co: 1, nbre_fs: 4,  nbre_mo: 6,  nbre_es: 1, nbre_se: 1 },
  // ex-4 — SOGB 2023 (clôturé)
  { id: 'le-15', id_exercice: 'ex-4', id_operateur_lot: 'ol-10', nbre_cs: 1, nbre_cf: 1, nbre_co: 2, nbre_fs: 4,  nbre_mo: 7,  nbre_es: 1, nbre_se: 1 },
  { id: 'le-16', id_exercice: 'ex-4', id_operateur_lot: 'ol-11', nbre_cs: 1, nbre_cf: 1, nbre_co: 2, nbre_fs: 3,  nbre_mo: 6,  nbre_es: 1, nbre_se: 1 },
  { id: 'le-17', id_exercice: 'ex-4', id_operateur_lot: 'ol-12', nbre_cs: 1, nbre_cf: 1, nbre_co: 1, nbre_fs: 3,  nbre_mo: 5,  nbre_es: 1, nbre_se: 1 },
];
