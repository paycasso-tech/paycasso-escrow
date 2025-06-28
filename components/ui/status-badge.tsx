'use client';
import React from 'react';

export interface StatusConfig {
  bg: string;
  color: string;
  text: string;
}

export interface StatusBadgeProps {
  status: string;
  config?: StatusConfig;
  className?: string;
  style?: React.CSSProperties;
}

const defaultStatusConfigs: Record<string, StatusConfig> = {
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
  // Add more status types as needed
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  config,
  className = '',
  style = {}
}) => {
  const statusConfig = config || defaultStatusConfigs[status] || {
    bg: '#1D1D1D',
    color: '#959595',
    text: status,
  };

  const defaultStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    background: statusConfig.bg,
    color: statusConfig.color,
    borderRadius: 8,
    padding: '2px 16px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 12,
    height: 24,
    minWidth: 92,
    justifyContent: 'center',
    textAlign: 'center',
    ...style,
  };

  return (
    <span style={defaultStyle} className={className}>
      {statusConfig.text}
    </span>
  );
}; 