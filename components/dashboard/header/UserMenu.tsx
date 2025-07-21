'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface UserMenuProps {
  email: string;
  userImg?: string;
  style?: React.CSSProperties;
}

// The blue profile/email menu (no trigger, always visible)
export const UserMenu: React.FC<UserMenuProps> = ({ email, userImg = '/user.png' }) => (
  <div className="relative w-[251px] rounded-lg border border-blue-600/80 bg-blue-900/40 flex items-center px-4 gap-3 z-1000">
    <Image
      src={userImg}
      alt="User"
      width={34}
      height={34}
      className="rounded-full"
    />
    <span className="text-white font-poppins font-normal text-xs w-[157px] h-[18px] overflow-hidden whitespace-nowrap text-ellipsis">
      {email}
    </span>
    <Image src="/arrow-down.svg" alt="Arrow Down" width={16} height={16} />
  </div>
);

// The three dots trigger that shows the UserMenu as a dropdown
export const UserMenuTrigger: React.FC<UserMenuProps> = ({ email, userImg }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(true)}
        className="bg-none border-none cursor-pointer p-0 ml-4"
        aria-label="User menu"
      >
        <Image src="/dots.svg" alt="User menu" width={24} height={24} />
      </button>
      {open && (
        <>
          {/* Overlay to close modal on outside click */}
          <div
            className="fixed top-0 left-0 w-screen h-screen z-999"
            onClick={() => setOpen(false)}
          />
          <div
            className="absolute top-9 right-0"
            onClick={e => e.stopPropagation()}
          >
            <UserMenu email={email} userImg={userImg} />
          </div>
        </>
      )}
    </div>
  );
}; 