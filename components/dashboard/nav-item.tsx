'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SIDEBAR_DIMENSIONS } from '@/lib/constants/sidebar';

interface NavItemProps {
  href: string;
  icon: string;
  title: string;
}

export function NavItem({ href, icon, title }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      style={{
        width: SIDEBAR_DIMENSIONS.navItem.width,
        height: SIDEBAR_DIMENSIONS.navItem.height,
        paddingLeft: 24,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
      className={cn(
        'flex items-center gap-3 rounded-[7px] transition-colors',
        isActive ? 'bg-[#1B3457] text-white' : 'text-[#959595] hover:text-white'
      )}
    >
      {isActive && (
        <div style={{
          position: 'absolute',
          left: -16,
          top: 6,
          bottom: 6,
          width: 8,
          borderRadius: '8px 0 0 8px',
          background: '#5B9BFF',
        }} />
      )}
      <div 
        style={{
          width: SIDEBAR_DIMENSIONS.icon.width,
          height: SIDEBAR_DIMENSIONS.icon.height,
        }}
        className="flex items-center justify-center"
      >
        <Image
          src={`/${icon}.svg`}
          alt={title}
          width={26}
          height={26}
        />
      </div>
      <span
        style={{
          fontFamily: SIDEBAR_DIMENSIONS.text.fontFamily,
          fontSize: SIDEBAR_DIMENSIONS.text.fontSize,
          lineHeight: SIDEBAR_DIMENSIONS.text.lineHeight,
          fontWeight: SIDEBAR_DIMENSIONS.text.fontWeight,
        }}
      >
        {title}
      </span>
    </Link>
  );
} 