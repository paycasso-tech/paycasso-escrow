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
  return (
    <div className={"px-8 " + className}>
      {/* Top right: Bell and Profile */}
      {(showBell || showUserMenu) && (
        <div className="flex justify-end items-center gap-4 mt-8 mb-2">
          {showBell && <Bell />}
          {showUserMenu && <UserMenu email={userEmail} />}
        </div>
      )}
      {/* Page Title and Actions */}
      <div className="flex items-center gap-4 mt-12 mb-6">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-3xl leading-none tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white to-white">
            {title}
          </span>
          {subtitle && (
            <span className="font-normal text-base text-muted-foreground">
              {subtitle}
            </span>
          )}
        </div>
        <div className="flex-1" />
        {actions}
      </div>
    </div>
  );
}; 