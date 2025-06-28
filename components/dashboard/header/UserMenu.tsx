'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface UserMenuProps {
  email: string;
  userImg?: string;
  style?: React.CSSProperties;
}

// The blue profile/email menu (no trigger, always visible)
export const UserMenu: React.FC<UserMenuProps> = ({ email, userImg = '/user.png', style }) => (
  <div
    style={{
      position: 'relative',
      width: 251.36,
      borderRadius: 7,
      border: '0.5px solid #2563EBCC',
      background: '#1B345780',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      gap: 12,
      zIndex: 1000,
      ...style,
    }}
  >
    <Image
      src={userImg}
      alt="User"
      width={33.63}
      height={33.63}
      style={{ borderRadius: '50%' }}
    />
    <span
      style={{
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: 12,
        width: 157,
        height: 18,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }}
    >
      {email}
    </span>
    <Image src="/arrow-down.svg" alt="Arrow Down" width={16} height={16} />
  </div>
);

// The three dots trigger that shows the UserMenu as a dropdown
export const UserMenuTrigger: React.FC<UserMenuProps> = ({ email, userImg }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen(true)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: 16 }}
        aria-label="User menu"
      >
        <Image src="/dots.svg" alt="User menu" width={24} height={24} />
      </button>
      {open && (
        <>
          {/* Overlay to close modal on outside click */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 999,
            }}
            onClick={() => setOpen(false)}
          />
          <div
            style={{ position: 'absolute', top: 36, right: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <UserMenu email={email} userImg={userImg} />
          </div>
        </>
      )}
    </div>
  );
}; 