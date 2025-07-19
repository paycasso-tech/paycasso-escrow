import React from 'react';
import Image from 'next/image';

interface StatCardProps {
  label: string;
  value: string;
  subtext: string;
  icon: string; // path to svg
  iconBg: string;
  subtextColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, subtext, icon, iconBg, subtextColor = '#18BD26' }) => (
  <div className="w-[210px] h-[138px] rounded-2xl border border-[#2B2B2B80] bg-[#0D0D0D] relative p-5 flex flex-col justify-between box-border overflow-hidden">
    {/* Icon top right */}
    <div
      className="absolute top-3 right-3 w-[38px] h-[40px] rounded-lg flex items-center justify-center z-10"
      style={{ background: iconBg }}
    >
      <Image src={icon} alt={label} width={22} height={22} />
    </div>
    {/* Card content */}
    <span className="font-medium text-sm text-[#959595] mt-2 text-left">{label}</span>
    <span className="font-semibold text-2xl text-white mt-2 text-left">{value}</span>
    <span className="font-medium text-xs text-left w-full block whitespace-nowrap overflow-hidden text-ellipsis mt-3" style={{ color: subtextColor }}>{subtext}</span>
  </div>
); 