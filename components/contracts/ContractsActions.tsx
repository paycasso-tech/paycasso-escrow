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
    <div className="flex gap-4">
      <ActionButton
        text="Export CSV"
        icon="upload"
        iconAlt="Export"
        variant="outline"
        size="md"
        onClick={onExportCSV}
        className="mr-2"
      />
      <ActionButton
        text="Add New Contract"
        icon="plus"
        iconAlt="Add"
        variant="default"
        size="lg"
        iconAfter={true}
        onClick={onAddNew}
      />
    </div>
  );
}; 