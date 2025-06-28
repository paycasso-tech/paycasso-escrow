'use client';
import React from 'react';
import Image from 'next/image';

export interface ActionButton {
  icon: string;
  alt: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ActionButtonsProps {
  actions: ActionButton[];
  className?: string;
  style?: React.CSSProperties;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  actions,
  className = '',
  style = {}
}) => {
  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    gap: 8,
    ...style,
  };

  return (
    <div style={defaultStyle} className={className}>
      {actions.map((action, index) => (
        <button
          key={action.icon}
          onClick={action.onClick}
          disabled={action.disabled}
          style={{
            width: 27,
            height: 27,
            borderRadius: 5,
            border: '1px solid #2B2B2B80',
            background: '#1D1D1D80',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: index === 0 ? 0 : 4,
            cursor: action.disabled ? 'not-allowed' : 'pointer',
            opacity: action.disabled ? 0.5 : 1,
          }}
        >
          <Image src={`/${action.icon}.svg`} alt={action.alt} width={16} height={16} />
        </button>
      ))}
    </div>
  );
}; 