'use client';
import React from 'react';

interface StatusConfig {
  bg: string;
  color: string;
  text: string;
}

export interface StatusBadgeProps {
  status: string;
  config?: StatusConfig;
  className?: string;
}

const defaultStatusConfigs: Record<string, StatusConfig> = {
  Completed: {
    bg: 'bg-green-900/80',
    color: 'text-green-500',
    text: 'Completed',
  },
  Pending: {
    bg: 'bg-yellow-900/80',
    color: 'text-yellow-500',
    text: 'Pending',
  },
  Disputed: {
    bg: 'bg-red-900/80',
    color: 'text-red-500',
    text: 'Disputed',
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  config,
  className = '',
}) => {
  const statusConfig = config || defaultStatusConfigs[status] || {
    bg: 'bg-[#1D1D1D]',
    color: 'text-[#959595]',
    text: status,
  };

  return (
    <span className={`inline-flex items-center ${statusConfig.bg} ${statusConfig.color} rounded-lg px-4 py-1 font-medium text-xs h-6 min-w-[92px] justify-center text-center ${className}`}>
      {statusConfig.text}
    </span>
  );
}; 