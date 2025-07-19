'use client';
import React from 'react';
import Image from 'next/image';

export const RecentTransactionsHeader: React.FC<{ onViewAll?: () => void }> = ({ onViewAll }) => (
  <div className="flex items-center justify-between w-full mb-3 mt-10">
    <span className="font-poppins font-semibold text-xl text-white">
      Recent transactions
    </span>
    <button
      onClick={onViewAll}
      className="flex items-center bg-transparent border-none text-blue-400 font-poppins font-medium text-base cursor-pointer gap-2"
    >
      View All
      <Image src="/right-arrow.svg" alt="View All" width={12} height={12} />
    </button>
  </div>
); 