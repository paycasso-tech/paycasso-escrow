'use client';
import React from 'react';
import { QuickActionsCard } from './QuickActionsCard';
import { PendingApprovalsCard } from './PendingApprovalsCard';

export const QuickActionsAndApprovalsRow: React.FC<{ user: any; profile: any; wallet: any }> = ({ user, profile, wallet }) => (
  <div className="flex gap-8 mt-12 mb-8 w-[93%] ml-8 mr-0 justify-start max-w-full">
    <QuickActionsCard user={user} profile={profile} wallet={wallet} />
    <PendingApprovalsCard user={user} profile={profile} wallet={wallet} />
  </div>
); 