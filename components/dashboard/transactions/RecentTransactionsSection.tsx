'use client';
import React from 'react';
import { RecentTransactionsHeader } from './RecentTransactionsHeader';
import { RecentTransactionsTable } from './RecentTransactionsTable';

export const RecentTransactionsSection: React.FC = () => (
  <section style={{ marginLeft: 32, width: 'calc(100% - 32px)' }}>
    <RecentTransactionsHeader />
    <RecentTransactionsTable />
  </section>
); 