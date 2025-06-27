'use client';
import React from 'react';
import { QuickActionButton } from './QuickActionButton';

export const QuickActionsCard: React.FC = () => (
  <div
    style={{
      background: '#0D0D0D',
      borderRadius: 16,
      padding: '20px 24px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
      border: '1px solid #2B2B2B80',
      marginBottom: 0,
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      justifyContent: 'flex-start',
    }}
  >
    <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 10 }}>Quick Actions</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
      <QuickActionButton
        icon="/add.svg"
        text="New Escrow"
        background="#2563eb"
        textColor="#fff"
        fullWidth
        height={48}
      />
      <QuickActionButton
        icon="/wallet.svg"
        text="Release Funds"
        background="#353535"
        textColor="#fff"
        fullWidth
        height={48}
      />
    </div>
  </div>
); 