'use client';
import React from 'react';
import Image from 'next/image';

export interface IconButtonProps {
  icon: string;
  alt: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
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
  ghost: {
    background: 'transparent',
    border: '1px solid #2B2B2B80',
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
    width: 60,
    height: 46,
    borderRadius: 100,
    iconSize: 32,
  },
  md: {
    width: 170,
    height: 46,
    borderRadius: 30,
    iconSize: 22,
  },
  lg: {
    width: 210,
    height: 46,
    borderRadius: 30,
    iconSize: 22,
  },
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  alt,
  onClick,
  disabled = false,
  variant = 'outline',
  size = 'md',
  color,
  className = '',
  style = {}
}) => {
  const variantStyle = buttonVariants[variant];
  const sizeStyle = buttonSizes[size];
  const iconColor = color || variantStyle.color;

  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 14,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    color: iconColor,
    WebkitTextFillColor: iconColor,
    background: variantStyle.background,
    border: variantStyle.border,
    borderRadius: sizeStyle.borderRadius,
    width: sizeStyle.width,
    height: sizeStyle.height,
    ...style,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={defaultStyle}
      className={className}
    >
      <Image
        src={`/${icon}.svg`}
        alt={alt}
        width={sizeStyle.iconSize}
        height={sizeStyle.iconSize}
        style={{
          color: iconColor,
          filter: color === '#fff' ? 'invert(1) brightness(2)' : undefined,
        }}
      />
    </button>
  );
}; 