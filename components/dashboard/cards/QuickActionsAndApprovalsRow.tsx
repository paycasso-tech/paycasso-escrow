'use client';
import React from 'react';
import { QuickActionsCard } from './QuickActionsCard';
import { PendingApprovalsCard } from './PendingApprovalsCard';

export const QuickActionsAndApprovalsRow: React.FC<{ user: any; profile: any; wallet: any }> = ({ user, profile, wallet }) => (
  <div style={{ display: 'flex', gap: 32, marginTop: 48, marginBottom: 32, width: '93%', marginLeft: 32, marginRight: 0, justifyContent: 'flex-start', maxWidth: '100%' }}>
    <QuickActionsCard user={user} profile={profile} wallet={wallet} />
    <PendingApprovalsCard user={user} profile={profile} wallet={wallet} />
  </div>
); 