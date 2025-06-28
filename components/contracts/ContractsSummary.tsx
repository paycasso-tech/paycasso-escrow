'use client';
import React from 'react';

export interface ContractsSummaryProps {
  totalCount: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ContractsSummary: React.FC<ContractsSummaryProps> = ({
  totalCount,
  className = '',
  style = {}
}) => {
  const defaultStyle: React.CSSProperties = {
    width: 'auto',
    minWidth: 140,
    height: 20,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: '100%',
    letterSpacing: 0,
    color: '#6D6D6D',
    marginTop: 18,
    marginBottom: 18,
    marginLeft: 2,
    paddingLeft: 8,
    ...style,
  };

  return (
    <div style={defaultStyle} className={className}>
      Total {totalCount} contracts
    </div>
  );
}; 