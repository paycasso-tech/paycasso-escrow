'use client';
import React from 'react';

interface TransactionStatusBadgeProps {
  status: 'Completed' | 'Pending' | 'Disputed';
}

const statusConfig = {
  Completed: {
    bg: '#122318CC',
    color: '#18BD26',
    text: 'Completed',
  },
  Pending: {
    bg: '#533E00CC',
    color: '#FFD600',
    text: 'Pending',
  },
  Disputed: {
    bg: '#351414CC',
    color: '#BD181B',
    text: 'Disputed',
  },
};

export const TransactionStatusBadge: React.FC<TransactionStatusBadgeProps> = ({ status }) => {
  const cfg = statusConfig[status];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: cfg.bg,
        color: cfg.color,
        borderRadius: 8,
        padding: '2px 16px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: 12,
        height: 24,
        minWidth: 92,
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {cfg.text}
    </span>
  );
}; 