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
}) => {
  return (
    <div className={"min-w-[140px] h-5 font-poppins font-medium text-sm text-muted-foreground mt-4 mb-4 ml-1 pl-2 " + className}>
      Total {totalCount} contracts
    </div>
  );
}; 