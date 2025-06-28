'use client';
import React from 'react';
import { FilterBar, FilterOption } from '@/components/ui/filter-bar';

export interface ContractsFilterProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  contractType: string;
  onContractTypeChange: (value: string) => void;
  contractStatus: string;
  onContractStatusChange: (value: string) => void;
  onFilterClick?: () => void;
  onRetryClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ContractsFilter: React.FC<ContractsFilterProps> = ({
  searchValue,
  onSearchChange,
  contractType,
  onContractTypeChange,
  contractStatus,
  onContractStatusChange,
  onFilterClick,
  onRetryClick,
  className = '',
  style = {}
}) => {
  const contractTypeOptions: FilterOption[] = [
    { value: 'All', label: 'All' },
    { value: 'Service', label: 'Service' },
    { value: 'Product', label: 'Product' },
  ];

  const contractStatusOptions: FilterOption[] = [
    { value: 'All', label: 'All' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Disputed', label: 'Disputed' },
  ];

  const filters = [
    {
      key: 'contractType',
      label: 'Contracts Type',
      value: contractType,
      options: contractTypeOptions,
      onChange: onContractTypeChange,
    },
    {
      key: 'contractStatus',
      label: 'Contract Status',
      value: contractStatus,
      options: contractStatusOptions,
      onChange: onContractStatusChange,
    },
  ];

  return (
    <FilterBar
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      searchPlaceholder="Search Contract..."
      filters={filters}
      onFilterClick={onFilterClick}
      onRetryClick={onRetryClick}
      showRetry={true}
      className={className}
      style={style}
    />
  );
}; 