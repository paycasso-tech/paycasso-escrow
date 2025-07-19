'use client';
import React from 'react';
import Image from 'next/image';

export interface Column {
  key: string;
  label: string;
  flex?: number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any) => React.ReactNode;
}

export interface DataTableProps {
  columns: Column[];
  data: any[];
  className?: string;
  style?: React.CSSProperties;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  className = '',
  style = {}
}) => {
  const defaultStyle: React.CSSProperties = {
    width: '95%',
    borderRadius: 10,
    background: '#0D0D0D',
    border: '1px solid #2B2B2B80',
    overflow: 'hidden',
    ...style,
  };

  return (
    <div className={"w-[95%] rounded-xl bg-[#0D0D0D] border border-[#2B2B2B80] overflow-hidden " + className}>
      {/* Table Header */}
      <div className="flex bg-gray-800 rounded-t-lg h-13 items-center font-poppins font-medium text-sm text-gray-500 border-b border-gray-600">
        {columns.map((column, index) => (
          <div
            key={column.key}
            className={`flex ${column.flex || 1} ${index === 0 ? 'pl-8' : ''}`}
          >
            {column.label}
          </div>
        ))}
      </div>
      
      {/* Table Rows */}
      {data.map((row, rowIndex) => (
        <div
          key={row.id || rowIndex}
          className={`flex items-center h-13 font-poppins font-medium text-sm text-gray-500 border-b border-gray-600 ${rowIndex === data.length - 1 ? 'border-none' : 'border-gray-600'}`}
        >
          {columns.map((column, colIndex) => (
            <div
              key={column.key}
              className={`flex ${column.flex || 1} ${colIndex === 0 ? 'pl-8' : ''}`}
            >
              {column.render ? column.render(row[column.key], row) : row[column.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}; 