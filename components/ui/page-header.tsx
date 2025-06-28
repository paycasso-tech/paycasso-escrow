'use client';
import React from 'react';
import { Bell } from '@/components/dashboard/header/Bell';
import { UserMenu } from '@/components/dashboard/header/UserMenu';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  userEmail?: string;
  actions?: React.ReactNode;
  showUserMenu?: boolean;
  showBell?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  userEmail = 'user@example.com',
  actions,
  showUserMenu = true,
  showBell = true,
  className = '',
  style = {}
}) => {
  const defaultStyle: React.CSSProperties = {
    paddingLeft: 32,
    paddingRight: 32,
    ...style,
  };

  return (
    <div style={defaultStyle} className={className}>
      {/* Top right: Bell and Profile */}
      {(showBell || showUserMenu) && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 16, marginTop: 32, marginBottom: 8 }}>
          {showBell && <Bell />}
          {showUserMenu && <UserMenu email={userEmail} />}
        </div>
      )}
      
      {/* Page Title and Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 48, marginBottom: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 32,
            lineHeight: '100%',
            letterSpacing: 0,
            color: '#fff',
            background: '#fff',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {title}
          </span>
          {subtitle && (
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#6D6D6D',
            }}>
              {subtitle}
            </span>
          )}
        </div>
        <div style={{ flex: 1 }} />
        {actions}
      </div>
    </div>
  );
}; 