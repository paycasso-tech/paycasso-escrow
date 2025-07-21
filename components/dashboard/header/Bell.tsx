'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const Bell: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(true)}
        className="w-[27px] h-[27px] flex items-center justify-center bg-none border-none p-0 cursor-pointer"
        aria-label="Notifications"
      >
        <Image src="/bell.svg" alt="Notifications" width={27} height={27} />
      </button>
      {open && (
        <div
          className="absolute top-9 right-0 min-w-[220px] bg-zinc-900 rounded-xl p-6 text-white z-1000 shadow-lg"
        >
          <div className="text-center">No notifications</div>
        </div>
      )}
    </div>
  );
};
