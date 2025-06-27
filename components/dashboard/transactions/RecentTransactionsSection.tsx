'use client';
import React from 'react';
import { RecentTransactionsHeader } from './RecentTransactionsHeader';
import { RecentTransactionsTable } from './RecentTransactionsTable';

export const RecentTransactionsSection: React.FC<{ user: any; profile: any; wallet: any }> = ({ user, profile, wallet }) => (
  <section style={{ marginLeft: 32, width: 'calc(100% - 32px)' }}>
    <RecentTransactionsHeader />
    <RecentTransactionsTable user={user} profile={profile} wallet={wallet} />
  </section>
); 