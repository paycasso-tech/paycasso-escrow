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
    <div className={"flex items-center gap-4 mb-4 " + className}>
      {/* Search Input */}
      {onSearchChange && (
        <Input
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={e => onSearchChange(e.target.value)}
          className="w-[257px] h-[46px] rounded-full border border-[#2B2B2B80] bg-[#1D1D1D80] text-white font-normal text-sm pl-6 mr-2"
        />
      )}
      
      {/* Filters Button */}
      {onFilterClick && (
        <ActionButton
          text="Filters"
          icon="filter"
          iconAlt="Filter"
          variant="outline"
          size="md"
          iconAfter={true}
          onClick={onFilterClick}
          className="px-1"
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
              variant="outline"
              size="md"
              iconAfter={true}
              className="justify-between whitespace-nowrap"
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
          variant="outline"
          size="sm"
          onClick={onRetryClick}
          className="text-muted-foreground"
        />
      )}
    </div>
  );
}; 