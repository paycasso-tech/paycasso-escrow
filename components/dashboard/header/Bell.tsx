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
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen(true)}
        style={{ width: 27, height: 27, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        aria-label="Notifications"
      >
        <Image src="/bell.svg" alt="Notifications" width={27} height={27} />
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 36,
            right: 0,
            minWidth: 220,
            background: '#18181b',
            borderRadius: 12,
            padding: 24,
            color: '#fff',
            zIndex: 1000,
            boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
          }}
        >
          <div style={{ textAlign: 'center' }}>No notifications</div>
        </div>
      )}
    </div>
  );
};
