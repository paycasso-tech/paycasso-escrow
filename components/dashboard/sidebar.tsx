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
      style={{
        width: SIDEBAR_DIMENSIONS.container.width,
        height: SIDEBAR_DIMENSIONS.container.height,
        background: SIDEBAR_DIMENSIONS.container.background,
        fontFamily: 'Poppins, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        position: 'relative',
        left: 0,
        top: 0,
        marginTop: 0,
      }}
    >
      
      <div
        style={{
          height: SIDEBAR_DIMENSIONS.logo.height,
          display: 'flex',
          alignItems: 'center',
          marginBottom: '32px',
          marginLeft: 0,
          marginTop: 0,
          paddingTop: 0,
        }}
      >
        <Image
          src="/logo.png"
          alt="Paycasso"
          width={220}
          height={60}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <nav style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
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