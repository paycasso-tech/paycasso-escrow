'use client';
import React, { useEffect, useState } from 'react';
import { PendingApprovalItem } from './PendingApprovalItem';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser-client';

export const PendingApprovalsCard: React.FC<{ user: any; profile: any; wallet: any }> = ({ user, profile, wallet }) => {
  const [pending, setPending] = useState<any[]>([]);

  useEffect(() => {
    const fetchPending = async () => {
      const supabase = createSupabaseBrowserClient();
      if (wallet?.circle_wallet_id) {
        const { data } = await supabase.rpc('get_pending_approvals', { wallet_id: wallet.circle_wallet_id });
        setPending(data || []);
      }
    };
    fetchPending();
  }, [wallet]);

  return (
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
      <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6 }}>Pending Approvals</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
        {pending.length === 0 ? (
          <span style={{ color: '#959595', fontFamily: 'Poppins, sans-serif', fontSize: 13 }}>No pending approvals</span>
        ) : (
          pending.map((item, idx) => (
            <PendingApprovalItem
              key={item.id || idx}
              title={item.title}
              subtext={item.subtext}
              buttonText={item.buttonText || 'Review'}
              fullWidth
            />
          ))
        )}
      </div>
    </div>
  );
}; 