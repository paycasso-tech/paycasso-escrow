'use client';
import React, { useEffect, useState } from 'react';
import { DataTable, Column } from '@/components/ui/data-table';
import { StatusBadge } from '@/components/ui/status-badge';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser-client';

interface Transaction {
  id: string;
  date: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Disputed';
  counterparty: string;
}

export const RecentTransactionsTable: React.FC<{ user: any; profile: any; wallet: any }> = ({ user, profile, wallet }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const supabase = createSupabaseBrowserClient();
      if (wallet?.circle_wallet_id) {
        const { data } = await supabase.rpc('get_recent_transactions', { wallet_id: wallet.circle_wallet_id });
        if (data) {
          setTransactions(
            data.map((tx: any) => ({
              id: tx.id,
              date: new Date(tx.created_at).toISOString().slice(0, 10),
              amount: tx.amount + ' USDC',
              status: tx.status,
              counterparty: tx.counterparty,
            }))
          );
        }
      }
    };
    fetchTransactions();
  }, [wallet]);

  const columns: Column[] = [
    {
      key: 'id',
      label: 'TRANSACTION ID',
      flex: 1.2,
      render: (value) => (
        <span className="text-[#959595] text-xs">{value}</span>
      ),
    },
    {
      key: 'date',
      label: 'DATE',
      flex: 1,
    },
    {
      key: 'amount',
      label: 'AMOUNT',
      flex: 1,
    },
    {
      key: 'status',
      label: 'STATUS',
      flex: 1,
      render: (value) => <StatusBadge status={value} />,
    },
    {
      key: 'counterparty',
      label: 'COUNTERPARTY',
      flex: 1.5,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={transactions}
      className="pl-6"
    />
  );
}; 