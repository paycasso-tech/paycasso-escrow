'use client';
import { Card } from "@/components/ui/card";
import React from 'react';
import { QuickActionButton } from './QuickActionButton';

export const QuickActionsCard: React.FC<{ user: any; profile: any; wallet: any }> = () => (
  <Card className="bg-[#0D0D0D] rounded-2xl p-5 shadow-xs border border-[#2B2B2B80] mb-0 flex-1 min-w-0 flex flex-col gap-2 justify-start">
    <div className="font-semibold text-lg mb-2">Quick Actions</div>
    <div className="flex flex-col gap-3 w-full">
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
  </Card>
); 