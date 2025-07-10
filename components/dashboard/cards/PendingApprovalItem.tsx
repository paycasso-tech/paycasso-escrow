'use client';
import { Button } from "@/components/ui/button";
import React from 'react';

interface PendingApprovalItemProps {
  title: string;
  subtext: string;
  buttonText: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const PendingApprovalItem: React.FC<PendingApprovalItemProps> = ({ title, subtext, buttonText, onClick, fullWidth = false }) => (
  <div className={`rounded-lg bg-[#1B34574D] flex items-center justify-between px-5 ${fullWidth ? 'w-full' : 'w-[340px]'} h-14 gap-8`}>
    <div className="flex flex-col justify-center">
      <span className="font-semibold text-xs text-white mb-0.5">{title}</span>
      <span className="font-medium text-[10px] text-[#959595]">{subtext}</span>
    </div>
    <Button
      onClick={onClick}
      size="sm"
      variant="outline"
      className="w-[90px] h-8 rounded-md border border-[#2563EB] bg-[#1B34574D] text-white font-semibold text-xs flex items-center justify-center text-center p-0"
    >
      {buttonText}
    </Button>
  </div>
); 