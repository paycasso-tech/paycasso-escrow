'use client';
import React from 'react';
import Image from 'next/image';

export const RecentTransactionsHeader: React.FC<{ onViewAll?: () => void }> = ({ onViewAll }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    marginBottom: 12,
    marginTop: 42,
  }}>
    <span style={{
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: 18,
      color: '#fff',
      lineHeight: '100%',
      marginTop: 12,
      marginBottom: 12,
    }}>
      Recent transactions
    </span>
    <button
      onClick={onViewAll}
      style={{
        display: 'flex',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        color: '#0D99FF',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: 15,
        cursor: 'pointer',
        gap: 4,
      }}
    >
      View All
      <Image src="/right-arrow.svg" alt="View All" width={12} height={12} />
    </button>
  </div>
); 