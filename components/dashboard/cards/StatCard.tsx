import React from 'react';
import Image from 'next/image';

interface StatCardProps {
  label: string;
  value: string;
  subtext: string;
  icon: string; // path to svg
  iconBg: string;
  subtextColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, subtext, icon, iconBg, subtextColor = '#18BD26' }) => (
  <div
    style={{
      width: 210.51,
      height: 138.07,
      borderRadius: 20,
      border: '1px solid #2B2B2B80',
      background: '#0D0D0D',
      position: 'relative',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}
  >
    {/* Icon top right */}
    <div
      style={{
        position: 'absolute',
        top: 12,
        right: 12,
        width: 38,
        height: 40,
        borderRadius: 10,
        background: iconBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      <Image src={icon} alt={label} width={22} height={22} />
    </div>
    {/* Card content */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, height: '100%', justifyContent: 'flex-start', paddingRight: 16 }}>
      <span
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: 14,
          lineHeight: '100%',
          color: '#959595',
          marginBottom: 0,
          marginTop: 10,
          textAlign: 'left',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          fontSize: 23,
          lineHeight: '100%',
          color: '#fff',
          marginBottom: 4,
          marginTop: 10,
          textAlign: 'left',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: 12,
          lineHeight: '100%',
          color: subtextColor,
          textAlign: 'left',
          width: '100%',
          display: 'block',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginTop: 12,
        }}
      >
        {subtext}
      </span>
    </div>
  </div>
); 