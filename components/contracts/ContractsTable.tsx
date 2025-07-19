'use client';
import React from 'react';
import { DataTable, Column } from '@/components/ui/data-table';
import { StatusBadge } from '@/components/ui/status-badge';
import { ActionButtons } from '@/components/ui/action-buttons';
import type { ContractsTableProps } from '@/types/contracts';

export const ContractsTable: React.FC<ContractsTableProps> = ({
  contracts,
  className = '',
}) => {
  const columns: Column[] = [
    {
      key: 'date',
      label: 'DATE',
      flex: 1.1,
    },
    {
      key: 'counterparty',
      label: 'COUNTERPARTY',
      flex: 2,
    },
    {
      key: 'purpose',
      label: 'PURPOSE',
      flex: 2.2,
    },
    {
      key: 'amount',
      label: 'AMOUNT',
      flex: 1.3,
    },
    {
      key: 'status',
      label: 'STATUS',
      flex: 1.2,
      render: (value) => <StatusBadge status={value} />,
    },
    {
      key: 'actions',
      label: 'ACTION',
      flex: 0.9,
      render: () => (
        <ActionButtons
          actions={[
            { icon: 'eye', alt: 'View' },
            { icon: 'copy', alt: 'Copy' },
            { icon: 'dots', alt: 'More' },
          ]}
        />
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={contracts}
      className={className}
    />
  );
}; 