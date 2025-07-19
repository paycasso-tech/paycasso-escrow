'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface QuickActionButtonProps {
  icon: string;
  text: string;
  background: string;
  onClick?: () => void;
  textColor?: string;
  fullWidth?: boolean;
  height?: number;
}

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  icon,
  text,
  background,
  onClick,
  textColor = "#fff",
  fullWidth = false,
  height = 40,
}) => (
  <Button
    type="button"
    onClick={onClick}
    className="flex items-center justify-center gap-3 rounded-lg font-semibold text-base p-0"
    style={{ background, color: textColor, height }}
  >
    <span className="flex items-center gap-3 w-full justify-center">
      <Image src={icon} alt={text} width={20} height={20} />
      <span className="" style={{ color: textColor }}>{text}</span>
    </span>
  </Button>
); 