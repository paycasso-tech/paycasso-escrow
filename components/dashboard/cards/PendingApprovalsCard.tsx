'use client';
import { Card } from "@/components/ui/card";
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
    <Card className="bg-[#0D0D0D] rounded-2xl p-5 shadow-sm border border-[#2B2B2B80] mb-0 flex-1 min-w-0 flex flex-col gap-2 justify-start">
      <div className="font-semibold text-lg mb-1">Pending Approvals</div>
      <div className="flex flex-col gap-2 w-full">
        {pending.length === 0 ? (
          <span className="text-[#959595] font-medium text-xs">No pending approvals</span>
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
    </Card>
  );
}; 