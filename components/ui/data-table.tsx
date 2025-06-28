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
    <div style={defaultStyle} className={className}>
      {/* Table Header */}
      <div style={{
        display: 'flex',
        background: '#1D1D1D',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 51,
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: 14,
        color: '#959595',
        borderBottom: '0.85px solid #6A66664D',
      }}>
        {columns.map((column, index) => (
          <div
            key={column.key}
            style={{
              flex: column.flex || 1,
              paddingLeft: index === 0 ? 32 : 0,
              textAlign: column.align || 'left',
            }}
          >
            {column.label}
          </div>
        ))}
      </div>
      
      {/* Table Rows */}
      {data.map((row, rowIndex) => (
        <div
          key={row.id || rowIndex}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 53,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: 13,
            color: '#959595',
            borderBottom: rowIndex === data.length - 1 ? 'none' : '0.85px solid #6A66664D',
            background: 'transparent',
          }}
        >
          {columns.map((column, colIndex) => (
            <div
              key={column.key}
              style={{
                flex: column.flex || 1,
                paddingLeft: colIndex === 0 ? 32 : 0,
                textAlign: column.align || 'left',
              }}
            >
              {column.render ? column.render(row[column.key], row) : row[column.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}; 