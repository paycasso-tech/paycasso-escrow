"use client"

import React, { useEffect, useState } from 'react';
import { StatCard } from './StatCard';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser-client';

export const StatCardsRow: React.FC = () => {
  const [totalBalance, setTotalBalance] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      const supabase = createSupabaseBrowserClient();
      const { data } = await supabase.rpc('get_total_balance');
      setTotalBalance(data?.toLocaleString('en-US', { minimumFractionDigits: 2 }) + ' USDC' || '0 USDC');
    };
    fetchStats();
  }, []);

  return (
    <div style={{ display: 'flex', gap: 24, marginBottom: 32, marginLeft: 32, width: '100%' }}>
      <StatCard
        label="Total Balance"
        value={totalBalance}
        subtext=""
        icon="/bank.svg"
        iconBg="#1B3457CC"
        subtextColor="#18BD26"
      />
    </div>
  );
}; 