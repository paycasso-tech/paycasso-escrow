'use client';
import React from 'react';

interface PendingApprovalItemProps {
  title: string;
  subtext: string;
  buttonText: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const PendingApprovalItem: React.FC<PendingApprovalItemProps> = ({ title, subtext, buttonText, onClick, fullWidth = false }) => (
  <div
    style={{
      width: fullWidth ? '100%' : 340,
      height: 56,
      borderRadius: 8,
      background: '#1B34574D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      boxSizing: 'border-box',
      gap: 32,
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <span
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          fontSize: 13,
          color: '#fff',
          marginBottom: 2,
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: 10,
          color: '#959595',
        }}
      >
        {subtext}
      </span>
    </div>
    <button
      onClick={onClick}
      style={{
        width: 90,
        height: 32,
        borderRadius: 6,
        border: '0.8px solid #2563EB',
        background: '#1B34574D',
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: 13,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 0,
      }}
    >
      {buttonText}
    </button>
  </div>
); 