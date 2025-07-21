'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export interface IconButtonProps {
  icon: string;
  alt: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "secondary" | "outline-solid" | "destructive" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  alt,
  onClick,
  disabled = false,
  variant = "outline-solid",
  size = "icon",
  className = "",
}) => {
  // Map md/lg to Button's size prop
  let buttonSize: "sm" | "default" | "lg" | "icon" = "icon";
  if (size === "sm") buttonSize = "sm";
  else if (size === "md") buttonSize = "default";
  else if (size === "lg") buttonSize = "lg";
  // else icon

  return (
    <Button
      type="button"
      variant={variant}
      size={buttonSize}
      onClick={onClick}
      disabled={disabled}
      className={className + " flex items-center justify-center p-0"}
    >
      <Image
        src={`/${icon}.svg`}
        alt={alt}
        width={20}
        height={20}
        className="inline-block"
      />
    </Button>
  );
}; 