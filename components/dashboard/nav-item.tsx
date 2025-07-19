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
      className={cn(
        'flex items-center gap-3 rounded-[7px] transition-colors',
        isActive ? 'bg-[#1B3457] text-white' : 'text-[#959595] hover:text-white'
      )}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-blue-500 rounded-r-full" />
      )}
      <div 
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
        className="font-sans text-sm font-normal"
      >
        {title}
      </span>
    </Link>
  );
} 