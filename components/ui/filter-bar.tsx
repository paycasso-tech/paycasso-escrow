'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { ActionButton } from '@/components/ui/action-button';
import { IconButton } from '@/components/ui/icon-button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import Image from 'next/image';

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterBarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  filters?: Array<{
    key: string;
    label: string;
    value: string;
    options: FilterOption[];
    onChange: (value: string) => void;
  }>;
  onFilterClick?: () => void;
  onRetryClick?: () => void;
  showRetry?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchValue = '',
  onSearchChange,
  searchPlaceholder = 'Search...',
  filters = [],
  onFilterClick,
  onRetryClick,
  showRetry = false,
  className = '',
  style = {}
}) => {
  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
    ...style,
  };

  return (
    <div style={defaultStyle} className={className}>
      {/* Search Input */}
      {onSearchChange && (
        <Input
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={e => onSearchChange(e.target.value)}
          style={{
            width: 257,
            height: 46,
            borderRadius: 30,
            border: '1px solid #2B2B2B80',
            background: '#1D1D1D80',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: 14,
            paddingLeft: 24,
            marginRight: 8,
          }}
        />
      )}
      
      {/* Filters Button */}
      {onFilterClick && (
        <ActionButton
          text="Filters"
          icon="filter"
          iconAlt="Filter"
          variant="muted"
          size="md"
          iconAfter={true}
          color="#6D6D6D"
          onClick={onFilterClick}
          style={{ padding: '0 4px' }}
        />
      )}
      
      {/* Filter Dropdowns */}
      {filters.map((filter) => (
        <DropdownMenu key={filter.key}>
          <DropdownMenuTrigger asChild>
            <ActionButton
              text={filter.label}
              icon="arrow-down"
              iconAlt="Dropdown"
              variant="muted"
              size="md"
              iconAfter={true}
              color="#6D6D6D"
              style={{ justifyContent: 'space-between', whiteSpace: 'nowrap' }}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {filter.options.map((option) => (
              <DropdownMenuItem 
                key={option.value}
                onClick={() => filter.onChange(option.value)}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
      
      {/* Retry Button */}
      {showRetry && (
        <IconButton
          icon="retry"
          alt="Retry"
          variant="muted"
          size="sm"
          color="#6D6D6D"
          onClick={onRetryClick}
        />
      )}
    </div>
  );
}; 