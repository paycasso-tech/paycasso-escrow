'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export interface ActionButton {
  icon: string;
  alt: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ActionButtonsProps {
  actions: ActionButton[];
  className?: string;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  actions,
  className = "",
}) => {
  return (
    <div className={"flex gap-2 " + className}>
      {actions.map((action, index) => (
        <Button
          key={action.icon}
          onClick={action.onClick}
          disabled={action.disabled}
          size="icon"
          variant="outline"
          className="flex items-center justify-center p-0 w-7 h-7 rounded"
        >
          <Image src={`/${action.icon}.svg`} alt={action.alt} width={16} height={16} className="inline-block" />
        </Button>
      ))}
    </div>
  );
}; 