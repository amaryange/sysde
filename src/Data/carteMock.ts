import type { FeatureCollection, Feature, Polygon } from 'geojson';

// ─── Types ────────────────────────────────────────────────────────────────────

export type RoleCode = 'CS' | 'CF' | 'CO' | 'FS' | 'MO' | 'ES';

export interface MockPoste {
  id: number;
  lib: string; cde: string;
  role: RoleCode; roleNom: string;
  operateur: string;     // acronyme affiché
  id_operateur: string;  // 'op-1' | 'op-2' | 'op-3'
  encadreur: string;
  secteurId: string; lotId: string;
  actif: boolean;
  lat: number; lng: number;
  exerciceId: string;    // 'ex-1' | 'ex-2' | ...
}

export interface SecteurProperties {
  id: string;
  lib: string; cde: string; region: string;
  id_operateur: string;
  nbPostes: number; nbEncadreurs: number;
}

export interface LotProperties {
  id: string;
  num: string; couvert: string; cde: string;
  secteurId: string; nomSecteur: string;
  departement: string;
  id_operateur: string;
}

// ─── Exercices ────────────────────────────────────────────────────────────────
// IDs alignés sur MOCK_EXERCICES de mockData.ts

export const exercices = [
  { id: 'ex-1', lib: 'Exercice 2024 (SAPH)',   annee: '2024', id_operateur: 'op-1' },
  { id: 'ex-2', lib: 'Exercice 2025 (SAPH)',   annee: '2025', id_operateur: 'op-1' },
  { id: 'ex-3', lib: 'Exercice 2024 (PALMCI)', annee: '2024', id_operateur: 'op-2' },
  { id: 'ex-4', lib: 'Exercice 2023 (SOGB)',   annee: '2023', id_operateur: 'op-3' },
];

// ─── Secteurs GeoJSON ─────────────────────────────────────────────────────────
// Polygones approximatifs — Côte d'Ivoire Est (EPSG:4326, [lon, lat])
// SAPH   → sec-1 Abengourou, sec-3 Agnibilékrou
// PALMCI → sec-2 Bondoukou,  sec-5 Daoukro
// SOGB   → sec-4 Tanda,      sec-6 Grand-Béréby

export const secteursGeoJSON: FeatureCollection<Polygon, SecteurProperties> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { id: 'sec-1', lib: 'Abengourou',   cde: '001', region: 'Indénié-Djuablin', id_operateur: 'op-1', nbPostes: 18, nbEncadreurs: 14 },
      geometry: { type: 'Polygon', coordinates: [[[-3.75, 6.48], [-3.25, 6.48], [-3.25, 6.98], [-3.75, 6.98], [-3.75, 6.48]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'sec-2', lib: 'Bondoukou',    cde: '002', region: 'Zanzan',            id_operateur: 'op-2', nbPostes: 12, nbEncadreurs: 9  },
      geometry: { type: 'Polygon', coordinates: [[[-3.05, 7.78], [-2.55, 7.78], [-2.55, 8.28], [-3.05, 8.28], [-3.05, 7.78]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'sec-3', lib: 'Agnibilékrou', cde: '003', region: 'Indénié-Djuablin', id_operateur: 'op-1', nbPostes: 14, nbEncadreurs: 11 },
      geometry: { type: 'Polygon', coordinates: [[[-3.45, 5.88], [-2.95, 5.88], [-2.95, 6.38], [-3.45, 6.38], [-3.45, 5.88]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'sec-4', lib: 'Tanda',        cde: '004', region: 'Zanzan',            id_operateur: 'op-3', nbPostes: 10, nbEncadreurs: 7  },
      geometry: { type: 'Polygon', coordinates: [[[-3.42, 7.53], [-2.92, 7.53], [-2.92, 8.03], [-3.42, 8.03], [-3.42, 7.53]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'sec-5', lib: 'Daoukro',      cde: '005', region: "N'Zi-Comoé",       id_operateur: 'op-2', nbPostes: 11, nbEncadreurs: 8  },
      geometry: { type: 'Polygon', coordinates: [[[-4.22, 6.82], [-3.72, 6.82], [-3.72, 7.32], [-4.22, 7.32], [-4.22, 6.82]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'sec-6', lib: 'Grand-Béréby', cde: '006', region: 'Bas-Sassandra',    id_operateur: 'op-3', nbPostes: 7,  nbEncadreurs: 5  },
      geometry: { type: 'Polygon', coordinates: [[[-7.17, 4.38], [-6.67, 4.38], [-6.67, 4.88], [-7.17, 4.88], [-7.17, 4.38]]] },
    },
  ],
};

// ─── Lots GeoJSON ─────────────────────────────────────────────────────────────

export const lotsGeoJSON: FeatureCollection<Polygon, LotProperties> = {
  type: 'FeatureCollection',
  features: [
    // sec-1 Abengourou — SAPH (op-1)
    {
      type: 'Feature',
      properties: { id: 'lt-1', num: '1', couvert: 'Zone Nord Abengourou',   cde: 'LT-01', secteurId: 'sec-1', nomSecteur: 'Abengourou',   departement: 'Abengourou',   id_operateur: 'op-1' },
      geometry: { type: 'Polygon', coordinates: [[[-3.75, 6.73], [-3.25, 6.73], [-3.25, 6.98], [-3.75, 6.98], [-3.75, 6.73]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'lt-2', num: '2', couvert: 'Zone Sud Abengourou',    cde: 'LT-02', secteurId: 'sec-1', nomSecteur: 'Abengourou',   departement: 'Aniassué',     id_operateur: 'op-1' },
      geometry: { type: 'Polygon', coordinates: [[[-3.75, 6.48], [-3.55, 6.48], [-3.55, 6.73], [-3.75, 6.73], [-3.75, 6.48]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'lt-3', num: '3', couvert: 'Zone Est Abengourou',    cde: 'LT-03', secteurId: 'sec-1', nomSecteur: 'Abengourou',   departement: 'Ebilassokro',  id_operateur: 'op-1' },
      geometry: { type: 'Polygon', coordinates: [[[-3.55, 6.48], [-3.25, 6.48], [-3.25, 6.73], [-3.55, 6.73], [-3.55, 6.48]]] },
    },
    // sec-2 Bondoukou — PALMCI (op-2)
    {
      type: 'Feature',
      properties: { id: 'lt-4', num: '4', couvert: 'Zone Nord Bondoukou',    cde: 'LT-04', secteurId: 'sec-2', nomSecteur: 'Bondoukou',    departement: 'Bondoukou',    id_operateur: 'op-2' },
      geometry: { type: 'Polygon', coordinates: [[[-3.05, 8.03], [-2.55, 8.03], [-2.55, 8.28], [-3.05, 8.28], [-3.05, 8.03]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'lt-5', num: '5', couvert: 'Zone Sud Bondoukou',     cde: 'LT-05', secteurId: 'sec-2', nomSecteur: 'Bondoukou',    departement: 'Laoudi-Ba',    id_operateur: 'op-2' },
      geometry: { type: 'Polygon', coordinates: [[[-3.05, 7.78], [-2.55, 7.78], [-2.55, 8.03], [-3.05, 8.03], [-3.05, 7.78]]] },
    },
    // sec-3 Agnibilékrou — SAPH (op-1)
    {
      type: 'Feature',
      properties: { id: 'lt-6', num: '6', couvert: 'Zone Agnibilékrou 1',    cde: 'LT-06', secteurId: 'sec-3', nomSecteur: 'Agnibilékrou', departement: 'Agnibilékrou', id_operateur: 'op-1' },
      geometry: { type: 'Polygon', coordinates: [[[-3.45, 6.13], [-2.95, 6.13], [-2.95, 6.38], [-3.45, 6.38], [-3.45, 6.13]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'lt-7', num: '7', couvert: 'Zone Agnibilékrou 2',    cde: 'LT-07', secteurId: 'sec-3', nomSecteur: 'Agnibilékrou', departement: 'Kotobi',       id_operateur: 'op-1' },
      geometry: { type: 'Polygon', coordinates: [[[-3.45, 5.88], [-2.95, 5.88], [-2.95, 6.13], [-3.45, 6.13], [-3.45, 5.88]]] },
    },
    // sec-4 Tanda — SOGB (op-3)
    {
      type: 'Feature',
      properties: { id: 'lt-8', num: '8', couvert: 'Zone Tanda Centrale',    cde: 'LT-08', secteurId: 'sec-4', nomSecteur: 'Tanda',        departement: 'Tanda',        id_operateur: 'op-3' },
      geometry: { type: 'Polygon', coordinates: [[[-3.42, 7.78], [-2.92, 7.78], [-2.92, 8.03], [-3.42, 8.03], [-3.42, 7.78]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'lt-9', num: '9', couvert: 'Zone Tanda Est',         cde: 'LT-09', secteurId: 'sec-4', nomSecteur: 'Tanda',        departement: 'Niablé',       id_operateur: 'op-3' },
      geometry: { type: 'Polygon', coordinates: [[[-3.42, 7.53], [-2.92, 7.53], [-2.92, 7.78], [-3.42, 7.78], [-3.42, 7.53]]] },
    },
    // sec-5 Daoukro — PALMCI (op-2)
    {
      type: 'Feature',
      properties: { id: 'lt-10', num: '10', couvert: 'Zone Daoukro Nord',    cde: 'LT-10', secteurId: 'sec-5', nomSecteur: 'Daoukro',      departement: 'Daoukro',      id_operateur: 'op-2' },
      geometry: { type: 'Polygon', coordinates: [[[-4.22, 7.07], [-3.72, 7.07], [-3.72, 7.32], [-4.22, 7.32], [-4.22, 7.07]]] },
    },
    {
      type: 'Feature',
      properties: { id: 'lt-11', num: '11', couvert: 'Zone Daoukro Sud',     cde: 'LT-11', secteurId: 'sec-5', nomSecteur: 'Daoukro',      departement: 'Bocanda',      id_operateur: 'op-2' },
      geometry: { type: 'Polygon', coordinates: [[[-4.22, 6.82], [-3.72, 6.82], [-3.72, 7.07], [-4.22, 7.07], [-4.22, 6.82]]] },
    },
    // sec-6 Grand-Béréby — SOGB (op-3)
    {
      type: 'Feature',
      properties: { id: 'lt-12', num: '12', couvert: 'Zone Grand-Béréby Côte', cde: 'LT-12', secteurId: 'sec-6', nomSecteur: 'Grand-Béréby', departement: 'Soubré',     id_operateur: 'op-3' },
      geometry: { type: 'Polygon', coordinates: [[[-7.17, 4.38], [-6.67, 4.38], [-6.67, 4.88], [-7.17, 4.88], [-7.17, 4.38]]] },
    },
  ],
};

// ─── Postes (markers) ─────────────────────────────────────────────────────────
// SAPH (op-1) : ex-1 (2024 clôturé) + ex-2 (2025 en cours)
// PALMCI (op-2): ex-3 (2024 en cours)
// SOGB (op-3) : ex-4 (2023 clôturé)

export const postes: MockPoste[] = [
  // ── SAPH — Exercice 2024 (ex-1) ────────────────────────────────────────────
  { id: 1,  lib: 'Poste CS-001', cde: 'CS-001-24', role: 'CS', roleNom: 'Chef Secteur',         operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'DELAFOSSE Arnaud',   secteurId: 'sec-1', lotId: 'lt-1', actif: true,  lat: 6.85, lng: -3.50, exerciceId: 'ex-1' },
  { id: 2,  lib: 'Poste CF-001', cde: 'CF-001-24', role: 'CF', roleNom: 'Contrôleur Formation', operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'KOUASSI Aya',         secteurId: 'sec-1', lotId: 'lt-1', actif: true,  lat: 6.78, lng: -3.42, exerciceId: 'ex-1' },
  { id: 3,  lib: 'Poste MO-001', cde: 'MO-001-24', role: 'MO', roleNom: 'Moniteur',             operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'COULIBALY Drissa',   secteurId: 'sec-1', lotId: 'lt-2', actif: true,  lat: 6.62, lng: -3.65, exerciceId: 'ex-1' },
  { id: 4,  lib: 'Poste MO-002', cde: 'MO-002-24', role: 'MO', roleNom: 'Moniteur',             operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'KOFFI Adjoua',       secteurId: 'sec-1', lotId: 'lt-3', actif: true,  lat: 6.60, lng: -3.35, exerciceId: 'ex-1' },
  { id: 5,  lib: 'Poste FS-001', cde: 'FS-001-24', role: 'FS', roleNom: 'Formateur Saigné',     operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'BAMBA Moussa',       secteurId: 'sec-3', lotId: 'lt-6', actif: true,  lat: 6.25, lng: -3.18, exerciceId: 'ex-1' },
  { id: 6,  lib: 'Poste CS-002', cde: 'CS-002-24', role: 'CS', roleNom: 'Chef Secteur',         operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'DIALLO Fatou',       secteurId: 'sec-3', lotId: 'lt-7', actif: false, lat: 6.00, lng: -3.20, exerciceId: 'ex-1' },

  // ── SAPH — Exercice 2025 (ex-2) ────────────────────────────────────────────
  { id: 7,  lib: 'Poste CS-001', cde: 'CS-001-25', role: 'CS', roleNom: 'Chef Secteur',         operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'DELAFOSSE Arnaud',   secteurId: 'sec-1', lotId: 'lt-1', actif: true,  lat: 6.87, lng: -3.52, exerciceId: 'ex-2' },
  { id: 8,  lib: 'Poste CF-001', cde: 'CF-001-25', role: 'CF', roleNom: 'Contrôleur Formation', operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'KOUASSI Aya',         secteurId: 'sec-1', lotId: 'lt-1', actif: true,  lat: 6.80, lng: -3.45, exerciceId: 'ex-2' },
  { id: 9,  lib: 'Poste CO-001', cde: 'CO-001-25', role: 'CO', roleNom: 'Contrôleur Ordinaire', operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'YAO Konan',           secteurId: 'sec-1', lotId: 'lt-2', actif: true,  lat: 6.63, lng: -3.62, exerciceId: 'ex-2' },
  { id: 10, lib: 'Poste MO-001', cde: 'MO-001-25', role: 'MO', roleNom: 'Moniteur',             operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'COULIBALY Drissa',   secteurId: 'sec-1', lotId: 'lt-2', actif: true,  lat: 6.58, lng: -3.68, exerciceId: 'ex-2' },
  { id: 11, lib: 'Poste MO-002', cde: 'MO-002-25', role: 'MO', roleNom: 'Moniteur',             operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'KOFFI Adjoua',       secteurId: 'sec-1', lotId: 'lt-3', actif: true,  lat: 6.62, lng: -3.32, exerciceId: 'ex-2' },
  { id: 12, lib: 'Poste CS-002', cde: 'CS-002-25', role: 'CS', roleNom: 'Chef Secteur',         operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'DIALLO Fatou',       secteurId: 'sec-3', lotId: 'lt-6', actif: true,  lat: 6.28, lng: -3.15, exerciceId: 'ex-2' },
  { id: 13, lib: 'Poste FS-001', cde: 'FS-001-25', role: 'FS', roleNom: 'Formateur Saigné',     operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'BAMBA Moussa',       secteurId: 'sec-3', lotId: 'lt-6', actif: true,  lat: 6.22, lng: -3.22, exerciceId: 'ex-2' },
  { id: 14, lib: 'Poste MO-003', cde: 'MO-003-25', role: 'MO', roleNom: 'Moniteur',             operateur: 'SAPH', id_operateur: 'op-1', encadreur: 'N\'GORAN Ange',      secteurId: 'sec-3', lotId: 'lt-7', actif: false, lat: 6.02, lng: -3.18, exerciceId: 'ex-2' },

  // ── PALMCI — Exercice 2024 (ex-3) ──────────────────────────────────────────
  { id: 15, lib: 'Poste CS-003', cde: 'CS-003-24', role: 'CS', roleNom: 'Chef Secteur',         operateur: 'PALMCI', id_operateur: 'op-2', encadreur: 'YAO Konan',         secteurId: 'sec-2', lotId: 'lt-4', actif: true,  lat: 8.15, lng: -2.82, exerciceId: 'ex-3' },
  { id: 16, lib: 'Poste CF-002', cde: 'CF-002-24', role: 'CF', roleNom: 'Contrôleur Formation', operateur: 'PALMCI', id_operateur: 'op-2', encadreur: 'DIALLO Fatou',      secteurId: 'sec-2', lotId: 'lt-4', actif: true,  lat: 8.10, lng: -2.75, exerciceId: 'ex-3' },
  { id: 17, lib: 'Poste MO-004', cde: 'MO-004-24', role: 'MO', roleNom: 'Moniteur',             operateur: 'PALMCI', id_operateur: 'op-2', encadreur: 'ASSI Bernadette',  secteurId: 'sec-2', lotId: 'lt-5', actif: true,  lat: 7.90, lng: -2.80, exerciceId: 'ex-3' },
  { id: 18, lib: 'Poste CO-002', cde: 'CO-002-24', role: 'CO', roleNom: 'Contrôleur Ordinaire', operateur: 'PALMCI', id_operateur: 'op-2', encadreur: 'TOURÉ Mamadou',    secteurId: 'sec-2', lotId: 'lt-5', actif: false, lat: 7.85, lng: -2.90, exerciceId: 'ex-3' },
  { id: 19, lib: 'Poste CS-004', cde: 'CS-004-24', role: 'CS', roleNom: 'Chef Secteur',         operateur: 'PALMCI', id_operateur: 'op-2', encadreur: 'CAMARA Seydou',    secteurId: 'sec-5', lotId: 'lt-10', actif: true, lat: 7.20, lng: -3.98, exerciceId: 'ex-3' },
  { id: 20, lib: 'Poste MO-005', cde: 'MO-005-24', role: 'MO', roleNom: 'Moniteur',             operateur: 'PALMCI', id_operateur: 'op-2', encadreur: 'KONE Aminata',     secteurId: 'sec-5', lotId: 'lt-11', actif: true, lat: 6.95, lng: -3.92, exerciceId: 'ex-3' },

  // ── SOGB — Exercice 2023 (ex-4) ────────────────────────────────────────────
  { id: 21, lib: 'Poste CS-005', cde: 'CS-005-23', role: 'CS', roleNom: 'Chef Secteur',         operateur: 'SOGB', id_operateur: 'op-3', encadreur: 'OUATTARA Salif',    secteurId: 'sec-4', lotId: 'lt-8', actif: true,  lat: 7.90, lng: -3.18, exerciceId: 'ex-4' },
  { id: 22, lib: 'Poste MO-006', cde: 'MO-006-23', role: 'MO', roleNom: 'Moniteur',             operateur: 'SOGB', id_operateur: 'op-3', encadreur: 'FOFANA Ibrahima',   secteurId: 'sec-4', lotId: 'lt-8', actif: true,  lat: 7.85, lng: -3.22, exerciceId: 'ex-4' },
  { id: 23, lib: 'Poste FS-002', cde: 'FS-002-23', role: 'FS', roleNom: 'Formateur Saigné',     operateur: 'SOGB', id_operateur: 'op-3', encadreur: 'BROU Christelle',   secteurId: 'sec-4', lotId: 'lt-9', actif: false, lat: 7.65, lng: -3.10, exerciceId: 'ex-4' },
  { id: 24, lib: 'Poste CS-006', cde: 'CS-006-23', role: 'CS', roleNom: 'Chef Secteur',         operateur: 'SOGB', id_operateur: 'op-3', encadreur: 'AKA Kouamé',        secteurId: 'sec-6', lotId: 'lt-12', actif: true, lat: 4.65, lng: -6.92, exerciceId: 'ex-4' },
  { id: 25, lib: 'Poste MO-007', cde: 'MO-007-23', role: 'MO', roleNom: 'Moniteur',             operateur: 'SOGB', id_operateur: 'op-3', encadreur: 'KOFFI Bernadette',  secteurId: 'sec-6', lotId: 'lt-12', actif: true, lat: 4.70, lng: -6.85, exerciceId: 'ex-4' },
];

// ─── Couleurs et labels par rôle ──────────────────────────────────────────────

export const roleColors: Record<RoleCode, string> = {
  CS: '#e74c3c',
  CF: '#e67e22',
  CO: '#d4ac0d',
  FS: '#27ae60',
  MO: '#2980b9',
  ES: '#8e44ad',
};

export const roleLabels: Record<RoleCode, string> = {
  CS: 'Chef Secteur',
  CF: 'Contrôleur Formation',
  CO: 'Contrôleur Ordinaire',
  FS: 'Formateur Saigné',
  MO: 'Moniteur',
  ES: 'Équipe Spéciale',
};
