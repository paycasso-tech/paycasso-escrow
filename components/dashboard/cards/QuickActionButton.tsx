'use client';
import React from 'react';
import Image from 'next/image';

interface QuickActionButtonProps {
  icon: string;
  text: string;
  background: string;
  onClick?: () => void;
  textColor?: string;
  fullWidth?: boolean;
  height?: number;
}

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, text, background, onClick, textColor = '#fff', fullWidth = false, height = 40 }) => (
  <button
    onClick={onClick}
    style={{
      width: fullWidth ? '100%' : 180,
      height,
      borderRadius: 8,
      background,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      border: 'none',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: 15,
      color: textColor,
      cursor: 'pointer',
    }}
  >
    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: 12 }}>
      <Image src={icon} alt={text} width={20} height={20} />
      <span style={{ color: textColor }}>{text}</span>
    </span>
  </button>
); 