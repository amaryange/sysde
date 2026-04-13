'use client';

import type { ReactNode } from 'react';
import { useHeaderStore } from '@/Store/useHeaderStore';

interface KpiCardProps {
  label: string;
  value: string | number;
  sub?: string;
  icon: ReactNode;
  color: string;
  trend?: 'up' | 'down' | 'neutral';
}

const KpiCard = ({ label, value, sub, icon, color, trend }: KpiCardProps) => {
  const isDark = useHeaderStore((s) => s.logoToggle);

  return (
    <div style={{
      background: isDark ? 'rgba(255,255,255,0.05)' : '#fff',
      borderRadius: 12,
      padding: '18px 20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#f0f0f0'}`,
      borderLeft: `4px solid ${color}`,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      height: '100%',
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: `${color}22`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color, flexShrink: 0,
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 2 }}>
          {label}
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, color: isDark ? '#f9fafb' : '#111827', lineHeight: 1.1 }}>
          {value}
        </div>
        {sub && (
          <div style={{ fontSize: 12, color: trend === 'up' ? '#16a34a' : trend === 'down' ? '#dc2626' : '#9ca3af', marginTop: 2 }}>
            {sub}
          </div>
        )}
      </div>
    </div>
  );
};

export default KpiCard;
