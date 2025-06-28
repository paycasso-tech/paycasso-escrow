'use client';
import React from 'react';
import Image from 'next/image';

export interface ActionButtonProps {
  text: string;
  icon?: string;
  iconAlt?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  iconAfter?: boolean;
  color?: string; // custom color for text and icon
  className?: string;
  style?: React.CSSProperties;
}

const buttonVariants = {
  primary: {
    background: '#2563EB',
    border: '1px solid #2563EB',
    color: '#fff',
  },
  secondary: {
    background: '#1D1D1D80',
    border: '1px solid #717171B2',
    color: '#fff',
  },
  outline: {
    background: 'transparent',
    border: '1px solid #717171B2',
    color: '#fff',
  },
  muted: {
    background: 'transparent',
    border: '1px solid #6D6D6D',
    color: '#6D6D6D',
  },
};

const buttonSizes = {
  sm: {
    width: 120,
    height: 46,
    borderRadius: 30,
    iconSize: 18,
    fontSize: 12,
    padding: '0 16px',
  },
  md: {
    width: 170,
    height: 46,
    borderRadius: 30,
    iconSize: 22,
    fontSize: 14,
    padding: '0 24px',
  },
  lg: {
    width: 210,
    height: 46,
    borderRadius: 30,
    iconSize: 22,
    fontSize: 14,
    padding: '0 24px',
  },
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  icon,
  iconAlt,
  onClick,
  disabled = false,
  variant = 'outline',
  size = 'md',
  iconAfter = false,
  color,
  className = '',
  style = {}
}) => {
  const variantStyle = buttonVariants[variant];
  const sizeStyle = buttonSizes[size];
  const textColor = color || variantStyle.color;

  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: sizeStyle.fontSize,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    whiteSpace: 'nowrap',
    color: textColor,
    WebkitTextFillColor: textColor,
    background: variantStyle.background,
    border: variantStyle.border,
    borderRadius: sizeStyle.borderRadius,
    width: sizeStyle.width,
    height: sizeStyle.height,
    padding: sizeStyle.padding,
    ...style,
  };

  const iconElement = icon ? (
    <Image
      src={`/${icon}.svg`}
      alt={iconAlt || icon}
      width={sizeStyle.iconSize}
      height={sizeStyle.iconSize}
      style={{
        color: textColor,
        filter: color === '#fff' ? 'invert(1) brightness(2)' : undefined,
      }}
    />
  ) : null;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={defaultStyle}
      className={className}
    >
      {!iconAfter && iconElement}
      {text}
      {iconAfter && iconElement}
    </button>
  );
}; 