"use client"

import React, { useEffect, useState } from 'react';
import { StatCard } from './StatCard';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser-client';

export const StatCardsRow: React.FC<{ user: any; profile: any; wallet: any }> = ({ user, profile, wallet }) => {
  const [totalBalance, setTotalBalance] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      const supabase = createSupabaseBrowserClient();
      // Example: use wallet id to fetch balance
      if (wallet?.circle_wallet_id) {
        const { data } = await supabase.rpc('get_total_balance', { wallet_id: wallet.circle_wallet_id });
        setTotalBalance(data?.toLocaleString('en-US', { minimumFractionDigits: 2 }) + ' USDC' || '0 USDC');
      }
    };
    fetchStats();
  }, [wallet]);

  return (
    <div className="flex gap-6 mb-8 ml-8 w-full">
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