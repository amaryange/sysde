'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  CircleMarker,
  Tooltip,
  Popup,
  useMap,
} from 'react-leaflet';
import type { GeoJSON as GeoJSONLayer } from 'leaflet';
import type { Feature, Polygon } from 'geojson';
import {
  secteursGeoJSON,
  lotsGeoJSON,
  postes,
  roleColors,
  roleLabels,
  type MockPoste,
  type SecteurProperties,
  type LotProperties,
} from '@/Data/carteMock';

// ─── Recenter helper ──────────────────────────────────────────────────────────

const MapCenter = () => {
  const map = useMap();
  useEffect(() => {
    map.setView([6.90, -5.00], 8);
  }, [map]);
  return null;
};

// ─── Légende ──────────────────────────────────────────────────────────────────

const Legend = () => (
  <div
    style={{
      position: 'absolute',
      bottom: 24,
      left: 12,
      zIndex: 1000,
      background: 'rgba(255,255,255,0.95)',
      borderRadius: 8,
      padding: '10px 14px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      fontSize: 12,
      minWidth: 170,
    }}
  >
    <div style={{ fontWeight: 700, marginBottom: 6, fontSize: 11, textTransform: 'uppercase', color: '#666' }}>
      Rôles d&apos;encadrement
    </div>
    {(Object.entries(roleColors) as [keyof typeof roleColors, string][]).map(([code, color]) => (
      <div key={code} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0 }} />
        <span style={{ color: '#444' }}><strong>{code}</strong> — {roleLabels[code]}</span>
      </div>
    ))}
    <hr style={{ margin: '8px 0' }} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
      <span style={{ width: 28, height: 3, background: '#1a6eb5', display: 'inline-block', opacity: 0.7 }} />
      <span style={{ color: '#444' }}>Secteur</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ width: 28, height: 2, background: '#27ae60', display: 'inline-block', opacity: 0.7 }} />
      <span style={{ color: '#444' }}>Lot</span>
    </div>
  </div>
);

// ─── Panneau info ─────────────────────────────────────────────────────────────

interface InfoPanelProps {
  poste: MockPoste | null;
  onClose: () => void;
}

const InfoPanel = ({ poste, onClose }: InfoPanelProps) => {
  if (!poste) return null;
  return (
    <div
      style={{
        position: 'absolute',
        top: 12,
        right: 12,
        zIndex: 1000,
        background: 'white',
        borderRadius: 8,
        padding: '14px 16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
        minWidth: 220,
        maxWidth: 280,
        fontSize: 13,
      }}
    >
      <button
        onClick={onClose}
        style={{ position: 'absolute', top: 8, right: 10, background: 'none', border: 'none', fontSize: 16, cursor: 'pointer', color: '#888' }}
        aria-label='Fermer'
      >
        ×
      </button>
      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, paddingRight: 16 }}>{poste.lib}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: roleColors[poste.role], display: 'inline-block', flexShrink: 0 }} />
        <span style={{ background: '#f0f0f0', borderRadius: 4, padding: '1px 6px', fontWeight: 600, fontSize: 11 }}>{poste.role}</span>
        <span style={{ color: '#555' }}>{poste.roleNom}</span>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
        <tbody>
          {[
            ['Encadreur', poste.encadreur],
            ['Opérateur', poste.operateur],
            ['Code poste', poste.cde],
            ['Statut', poste.actif ? '✅ Actif' : '⛔ Inactif'],
          ].map(([label, value]) => (
            <tr key={label}>
              <td style={{ color: '#888', paddingBottom: 3, paddingRight: 8, whiteSpace: 'nowrap' }}>{label}</td>
              <td style={{ fontWeight: 500, color: '#333', paddingBottom: 3 }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ─── Composant principal ──────────────────────────────────────────────────────

interface CarteMapProps {
  exerciceId: number;
}

const CarteMap = ({ exerciceId }: CarteMapProps) => {
  const [selectedPoste, setSelectedPoste] = useState<MockPoste | null>(null);
  const secteursRef = useRef<GeoJSONLayer | null>(null);
  const lotsRef     = useRef<GeoJSONLayer | null>(null);

  const filteredPostes = postes.filter((p) => p.exerciceId === exerciceId);

  const onEachSecteur = (feature: Feature<Polygon, SecteurProperties>, layer: GeoJSONLayer) => {
    const p = feature.properties;
    layer.bindPopup(`
      <div style="min-width:160px">
        <strong style="font-size:13px">${p.lib}</strong><br/>
        <span style="color:#888;font-size:11px">Code : ${p.cde} — ${p.region}</span>
        <hr style="margin:6px 0"/>
        <div>📍 <strong>${p.nbPostes}</strong> postes</div>
        <div>👷 <strong>${p.nbEncadreurs}</strong> encadreurs</div>
      </div>
    `);
    layer.on('mouseover', () => {
      (layer as any).setStyle({ fillOpacity: 0.35 });
    });
    layer.on('mouseout', () => {
      (layer as any).setStyle({ fillOpacity: 0.12 });
    });
  };

  const onEachLot = (feature: Feature<Polygon, LotProperties>, layer: GeoJSONLayer) => {
    const p = feature.properties;
    layer.bindTooltip(`Lot ${p.num} — ${p.couvert}`, { sticky: true, className: 'leaflet-tooltip-lot' });
  };

  // Forcer le re-render GeoJSON quand l'exercice change
  useEffect(() => {
    secteursRef.current?.clearLayers();
    lotsRef.current?.clearLayers();
  }, [exerciceId]);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%', minHeight: 500 }}>
      <MapContainer
        center={[6.90, -5.00]}
        zoom={8}
        style={{ height: '100%', width: '100%', minHeight: 500, borderRadius: 8 }}
        scrollWheelZoom
      >
        <MapCenter />

        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {/* Couche Secteurs */}
        <GeoJSON
          key={`secteurs-${exerciceId}`}
          data={secteursGeoJSON}
          style={{
            color: '#1a6eb5',
            weight: 2.5,
            fillColor: '#2980b9',
            fillOpacity: 0.12,
          }}
          onEachFeature={onEachSecteur}
        />

        {/* Couche Lots */}
        <GeoJSON
          key={`lots-${exerciceId}`}
          data={lotsGeoJSON}
          style={{
            color: '#27ae60',
            weight: 1.5,
            fillColor: '#2ecc71',
            fillOpacity: 0.06,
            dashArray: '4 3',
          }}
          onEachFeature={onEachLot}
        />

        {/* Markers postes */}
        {filteredPostes.map((poste) => (
          <CircleMarker
            key={poste.id}
            center={[poste.lat, poste.lng]}
            radius={poste.role === 'CS' ? 10 : 7}
            pathOptions={{
              color: '#fff',
              weight: 2,
              fillColor: roleColors[poste.role],
              fillOpacity: poste.actif ? 0.9 : 0.4,
            }}
            eventHandlers={{
              click: () => setSelectedPoste(poste),
            }}
          >
            <Tooltip direction='top' offset={[0, -6]} sticky>
              <strong>{poste.role}</strong> — {poste.encadreur}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>

      <Legend />
      <InfoPanel poste={selectedPoste} onClose={() => setSelectedPoste(null)} />
    </div>
  );
};

export default CarteMap;
