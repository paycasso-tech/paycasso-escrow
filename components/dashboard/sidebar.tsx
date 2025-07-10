'use client';

import Image from 'next/image';
import { NavItem } from './nav-item';
import { SIDEBAR_DIMENSIONS, NAVIGATION_ITEMS, SIGN_OUT_ITEM } from '@/lib/constants/sidebar';

export function DashboardSidebar() {
  const supportIndex = NAVIGATION_ITEMS.findIndex(item => item.title === 'Support');
  
  const navItemsWithSignOut = [
    ...NAVIGATION_ITEMS.slice(0, supportIndex + 1),
    SIGN_OUT_ITEM,
    ...NAVIGATION_ITEMS.slice(supportIndex + 1)
  ];

  return (
    <aside
      className="w-64 h-full bg-gray-100 flex flex-col items-start"
    >
      
      <div
        className="h-16 flex items-center mb-8"
      >
        <Image
          src="/logo.png"
          alt="Paycasso"
          width={220}
          height={60}
          className="object-contain"
        />
      </div>

      <nav className="w-full">
        <div className="flex flex-col gap-2 w-full">
          {navItemsWithSignOut.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
} 