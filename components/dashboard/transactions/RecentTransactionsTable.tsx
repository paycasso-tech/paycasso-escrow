'use client';
import React, { useEffect, useState } from 'react';
import { TransactionStatusBadge } from './TransactionStatusBadge';
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

  return (
    <div style={{
      width: '95%',
      borderRadius: 10,
      background: '#0D0D0D',
      border: '1px solid #2B2B2B80',
      overflow: 'hidden',
    }}>
      {/* Table Header */}
      <div style={{
        display: 'flex',
        background: '#1D1D1D',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 51,
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: 14,
        color: '#959595',
        borderBottom: '0.85px solid #6A66664D',
      }}>
        <div style={{ flex: 1.2, paddingLeft: 24 }}>TRANSACTION ID</div>
        <div style={{ flex: 1, textAlign: 'left' }}>DATE</div>
        <div style={{ flex: 1, textAlign: 'left' }}>AMOUNT</div>
        <div style={{ flex: 1, textAlign: 'left' }}>STATUS</div>
        <div style={{ flex: 1.5, textAlign: 'left' }}>COUNTERPARTY</div>
      </div>
      {/* Table Rows */}
      {transactions.map((tx, i) => (
        <div key={tx.id} style={{
          display: 'flex',
          alignItems: 'center',
          height: 53,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: 13,
          color: '#959595',
          borderBottom: i === transactions.length - 1 ? 'none' : '0.85px solid #6A66664D',
          background: 'transparent',
        }}>
          <div style={{ flex: 1.2, paddingLeft: 24, color: '#959595', fontSize: 12 }}>{tx.id}</div>
          <div style={{ flex: 1 }}>{tx.date}</div>
          <div style={{ flex: 1 }}>{tx.amount}</div>
          <div style={{ flex: 1 }}>
            <TransactionStatusBadge status={tx.status} />
          </div>
          <div style={{ flex: 1.5 }}>{tx.counterparty}</div>
        </div>
      ))}
    </div>
  );
}; 