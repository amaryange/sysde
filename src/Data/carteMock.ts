import type { Feature, FeatureCollection, Polygon } from 'geojson';

// ─── Types ────────────────────────────────────────────────────────────────────

export type RoleCode = 'CS' | 'CF' | 'CO' | 'FS' | 'MO' | 'ES';

export interface MockPoste {
  id: number;
  lib: string;
  cde: string;
  role: RoleCode;
  roleNom: string;
  operateur: string;
  encadreur: string;
  secteurId: number;
  lotId: number;
  actif: boolean;
  lat: number;
  lng: number;
  exerciceId: number;
}

export interface SecteurProperties {
  id: number;
  lib: string;
  cde: string;
  region: string;
  nbPostes: number;
  nbEncadreurs: number;
}

export interface LotProperties {
  id: number;
  num: string;
  couvert: string;
  cde: string;
  secteurId: number;
  nomSecteur: string;
  departement: string;
}

// ─── Exercices ────────────────────────────────────────────────────────────────

export const exercices = [
  { id: 1, lib: 'Exercice 2024', annee: '2024' },
  { id: 2, lib: 'Exercice 2025', annee: '2025' },
];

// ─── Secteurs GeoJSON ─────────────────────────────────────────────────────────
// Polygones fictifs centrés sur le centre de la Côte d'Ivoire (EPSG:4326)
// GeoJSON : coordonnées [longitude, latitude]

export const secteursGeoJSON: FeatureCollection<Polygon, SecteurProperties> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { id: 1, lib: 'Secteur Centre', cde: '001', region: 'Lacs', nbPostes: 8, nbEncadreurs: 6 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-5.55, 6.60], [-5.00, 6.60], [-5.00, 7.00], [-5.55, 7.00], [-5.55, 6.60],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: { id: 2, lib: 'Secteur Nord', cde: '002', region: 'Marahoué', nbPostes: 6, nbEncadreurs: 4 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-5.55, 7.00], [-5.00, 7.00], [-5.00, 7.45], [-5.55, 7.45], [-5.55, 7.00],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: { id: 3, lib: 'Secteur Est', cde: '003', region: 'Gbêkê', nbPostes: 9, nbEncadreurs: 7 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-5.00, 6.60], [-4.45, 6.60], [-4.45, 7.00], [-5.00, 7.00], [-5.00, 6.60],
        ]],
      },
    },
  ],
};

// ─── Lots GeoJSON ─────────────────────────────────────────────────────────────

export const lotsGeoJSON: FeatureCollection<Polygon, LotProperties> = {
  type: 'FeatureCollection',
  features: [
    // Secteur 001
    {
      type: 'Feature',
      properties: { id: 1, num: 'S001-A', couvert: 'Zone Nord-Centre', cde: 'NA', secteurId: 1, nomSecteur: 'Secteur Centre', departement: 'Toumodi' },
      geometry: { type: 'Polygon', coordinates: [[[-5.55, 6.80], [-5.00, 6.80], [-5.00, 7.00], [-5.55, 7.00], [-5.55, 6.80]]] },
    },
    {
      type: 'Feature',
      properties: { id: 2, num: 'S001-B', couvert: 'Zone Sud-Centre', cde: 'SB', secteurId: 1, nomSecteur: 'Secteur Centre', departement: 'Yamoussoukro' },
      geometry: { type: 'Polygon', coordinates: [[[-5.55, 6.60], [-5.00, 6.60], [-5.00, 6.80], [-5.55, 6.80], [-5.55, 6.60]]] },
    },
    // Secteur 002
    {
      type: 'Feature',
      properties: { id: 3, num: 'S002-A', couvert: 'Zone Nord-Bouaflé', cde: 'BA', secteurId: 2, nomSecteur: 'Secteur Nord', departement: 'Bouaflé' },
      geometry: { type: 'Polygon', coordinates: [[[-5.55, 7.22], [-5.00, 7.22], [-5.00, 7.45], [-5.55, 7.45], [-5.55, 7.22]]] },
    },
    {
      type: 'Feature',
      properties: { id: 4, num: 'S002-B', couvert: 'Zone Sud-Bouaflé', cde: 'BB', secteurId: 2, nomSecteur: 'Secteur Nord', departement: 'Sinfra' },
      geometry: { type: 'Polygon', coordinates: [[[-5.55, 7.00], [-5.00, 7.00], [-5.00, 7.22], [-5.55, 7.22], [-5.55, 7.00]]] },
    },
    // Secteur 003
    {
      type: 'Feature',
      properties: { id: 5, num: 'S003-A', couvert: 'Zone Nord-Bouaké', cde: 'KA', secteurId: 3, nomSecteur: 'Secteur Est', departement: 'Bouaké' },
      geometry: { type: 'Polygon', coordinates: [[[-5.00, 6.80], [-4.45, 6.80], [-4.45, 7.00], [-5.00, 7.00], [-5.00, 6.80]]] },
    },
    {
      type: 'Feature',
      properties: { id: 6, num: 'S003-B', couvert: 'Zone Sud-Bouaké', cde: 'KB', secteurId: 3, nomSecteur: 'Secteur Est', departement: 'Sakassou' },
      geometry: { type: 'Polygon', coordinates: [[[-5.00, 6.60], [-4.45, 6.60], [-4.45, 6.80], [-5.00, 6.80], [-5.00, 6.60]]] },
    },
  ],
};

// ─── Postes (markers) ─────────────────────────────────────────────────────────

export const postes: MockPoste[] = [
  // Secteur 001 — Exercice 2024 & 2025
  { id: 1,  lib: 'Poste CS-001',  cde: 'CS-001-24', role: 'CS', roleNom: 'Chef Secteur',          operateur: 'ANADER',  encadreur: 'KONÉ Mamadou',      secteurId: 1, lotId: 1, actif: true,  lat: 6.90, lng: -5.28, exerciceId: 1 },
  { id: 2,  lib: 'Poste CF-001',  cde: 'CF-001-24', role: 'CF', roleNom: 'Contrôleur Formation',  operateur: 'ANADER',  encadreur: 'BAMBA Adjoua',       secteurId: 1, lotId: 1, actif: true,  lat: 6.86, lng: -5.40, exerciceId: 1 },
  { id: 3,  lib: 'Poste MO-001',  cde: 'MO-001-24', role: 'MO', roleNom: 'Moniteur',              operateur: 'FIRCA',   encadreur: 'DIALLO Ibrahima',    secteurId: 1, lotId: 2, actif: true,  lat: 6.70, lng: -5.35, exerciceId: 1 },
  { id: 4,  lib: 'Poste MO-002',  cde: 'MO-002-24', role: 'MO', roleNom: 'Moniteur',              operateur: 'FIRCA',   encadreur: 'TRAORÉ Fatoumata',  secteurId: 1, lotId: 2, actif: true,  lat: 6.65, lng: -5.18, exerciceId: 1 },
  { id: 5,  lib: 'Poste FS-001',  cde: 'FS-001-24', role: 'FS', roleNom: 'Formateur Saigné',      operateur: 'CNRA',    encadreur: 'YAO Kouassi',        secteurId: 1, lotId: 1, actif: false, lat: 6.93, lng: -5.10, exerciceId: 1 },

  // Secteur 001 — Exercice 2025
  { id: 6,  lib: 'Poste CS-001',  cde: 'CS-001-25', role: 'CS', roleNom: 'Chef Secteur',          operateur: 'ANADER',  encadreur: 'KONÉ Mamadou',      secteurId: 1, lotId: 1, actif: true,  lat: 6.90, lng: -5.28, exerciceId: 2 },
  { id: 7,  lib: 'Poste CF-001',  cde: 'CF-001-25', role: 'CF', roleNom: 'Contrôleur Formation',  operateur: 'ANADER',  encadreur: 'OUATTARA Salimata', secteurId: 1, lotId: 1, actif: true,  lat: 6.95, lng: -5.42, exerciceId: 2 },
  { id: 8,  lib: 'Poste MO-001',  cde: 'MO-001-25', role: 'MO', roleNom: 'Moniteur',              operateur: 'FIRCA',   encadreur: 'DIALLO Ibrahima',    secteurId: 1, lotId: 2, actif: true,  lat: 6.70, lng: -5.35, exerciceId: 2 },

  // Secteur 002
  { id: 9,  lib: 'Poste CS-002',  cde: 'CS-002-24', role: 'CS', roleNom: 'Chef Secteur',          operateur: 'SODEFOR', encadreur: 'N\'GORAN Kouadio',  secteurId: 2, lotId: 3, actif: true,  lat: 7.35, lng: -5.30, exerciceId: 1 },
  { id: 10, lib: 'Poste CO-001',  cde: 'CO-001-24', role: 'CO', roleNom: 'Contrôleur Ordinaire',  operateur: 'SODEFOR', encadreur: 'COULIBALY Seydou',  secteurId: 2, lotId: 3, actif: true,  lat: 7.28, lng: -5.45, exerciceId: 1 },
  { id: 11, lib: 'Poste MO-003',  cde: 'MO-003-24', role: 'MO', roleNom: 'Moniteur',              operateur: 'SODEFOR', encadreur: 'CAMARA Aminata',    secteurId: 2, lotId: 4, actif: true,  lat: 7.10, lng: -5.20, exerciceId: 1 },
  { id: 12, lib: 'Poste ES-001',  cde: 'ES-001-24', role: 'ES', roleNom: 'Équipe Spéciale',       operateur: 'CNRA',    encadreur: 'TOURÉ Abdoulaye',   secteurId: 2, lotId: 4, actif: false, lat: 7.15, lng: -5.38, exerciceId: 1 },

  // Secteur 002 — Exercice 2025
  { id: 13, lib: 'Poste CS-002',  cde: 'CS-002-25', role: 'CS', roleNom: 'Chef Secteur',          operateur: 'SODEFOR', encadreur: 'N\'GORAN Kouadio',  secteurId: 2, lotId: 3, actif: true,  lat: 7.35, lng: -5.30, exerciceId: 2 },
  { id: 14, lib: 'Poste MO-003',  cde: 'MO-003-25', role: 'MO', roleNom: 'Moniteur',              operateur: 'SODEFOR', encadreur: 'DIOMANDÉ Lassina', secteurId: 2, lotId: 4, actif: true,  lat: 7.08, lng: -5.22, exerciceId: 2 },

  // Secteur 003
  { id: 15, lib: 'Poste CS-003',  cde: 'CS-003-24', role: 'CS', roleNom: 'Chef Secteur',          operateur: 'ANADER',  encadreur: 'BAKAYOKO Moussa',   secteurId: 3, lotId: 5, actif: true,  lat: 6.93, lng: -4.72, exerciceId: 1 },
  { id: 16, lib: 'Poste CF-002',  cde: 'CF-002-24', role: 'CF', roleNom: 'Contrôleur Formation',  operateur: 'ANADER',  encadreur: 'ASSI Angeline',      secteurId: 3, lotId: 5, actif: true,  lat: 6.88, lng: -4.85, exerciceId: 1 },
  { id: 17, lib: 'Poste FS-002',  cde: 'FS-002-24', role: 'FS', roleNom: 'Formateur Saigné',      operateur: 'CNRA',    encadreur: 'AKA Kouamé',         secteurId: 3, lotId: 5, actif: true,  lat: 6.95, lng: -4.60, exerciceId: 1 },
  { id: 18, lib: 'Poste MO-004',  cde: 'MO-004-24', role: 'MO', roleNom: 'Moniteur',              operateur: 'FIRCA',   encadreur: 'FOFANA Mariam',      secteurId: 3, lotId: 6, actif: true,  lat: 6.68, lng: -4.78, exerciceId: 1 },
  { id: 19, lib: 'Poste MO-005',  cde: 'MO-005-24', role: 'MO', roleNom: 'Moniteur',              operateur: 'FIRCA',   encadreur: 'BROU Aya Christelle', secteurId: 3, lotId: 6, actif: true, lat: 6.72, lng: -4.55, exerciceId: 1 },
  { id: 20, lib: 'Poste CO-002',  cde: 'CO-002-24', role: 'CO', roleNom: 'Contrôleur Ordinaire',  operateur: 'ANADER',  encadreur: 'KOFFI Bernadette',   secteurId: 3, lotId: 6, actif: false, lat: 6.62, lng: -4.90, exerciceId: 1 },

  // Secteur 003 — Exercice 2025
  { id: 21, lib: 'Poste CS-003',  cde: 'CS-003-25', role: 'CS', roleNom: 'Chef Secteur',          operateur: 'ANADER',  encadreur: 'BAKAYOKO Moussa',   secteurId: 3, lotId: 5, actif: true,  lat: 6.93, lng: -4.72, exerciceId: 2 },
  { id: 22, lib: 'Poste CF-002',  cde: 'CF-002-25', role: 'CF', roleNom: 'Contrôleur Formation',  operateur: 'ANADER',  encadreur: 'ASSI Angeline',      secteurId: 3, lotId: 5, actif: true,  lat: 6.88, lng: -4.85, exerciceId: 2 },
  { id: 23, lib: 'Poste MO-004',  cde: 'MO-004-25', role: 'MO', roleNom: 'Moniteur',              operateur: 'FIRCA',   encadreur: 'FOFANA Mariam',      secteurId: 3, lotId: 6, actif: true,  lat: 6.68, lng: -4.78, exerciceId: 2 },
];

// ─── Couleurs par rôle ────────────────────────────────────────────────────────

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
