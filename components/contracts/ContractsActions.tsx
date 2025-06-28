'use client';
import React from 'react';
import { ActionButton } from '@/components/ui/action-button';

export interface ContractsActionsProps {
  onExportCSV?: () => void;
  onAddNew?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ContractsActions: React.FC<ContractsActionsProps> = ({
  onExportCSV,
  onAddNew,
  className = '',
  style = {}
}) => {
  return (
    <>
      <ActionButton
        text="Export CSV"
        icon="upload"
        iconAlt="Export"
        variant="muted"
        size="md"
        color="#fff"
        onClick={onExportCSV}
        style={{ marginRight: 16 }}
      />
      <ActionButton
        text="Add New Contract"
        icon="plus"
        iconAlt="Add"
        variant="primary"
        size="lg"
        color="#fff"
        iconAfter={true}
        onClick={onAddNew}
      />
    </>
  );
}; 