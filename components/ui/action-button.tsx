'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export interface ActionButtonProps {
  text: string;
  icon?: string;
  iconAlt?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "secondary" | "outline-solid" | "destructive" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  iconAfter?: boolean;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  icon,
  iconAlt,
  onClick,
  disabled = false,
  variant = "outline-solid",
  size = "md",
  iconAfter = false,
  className = "",
}) => {
  // Map md/lg to Button's size prop
  let buttonSize: "sm" | "default" | "lg" | "icon" = "default";
  if (size === "sm") buttonSize = "sm";
  else if (size === "lg") buttonSize = "lg";
  // else default

  const iconElement = icon ? (
    <Image
      src={`/${icon}.svg`}
      alt={iconAlt || icon}
      width={20}
      height={20}
      className="inline-block"
    />
  ) : null;

  return (
    <Button
      type="button"
      variant={variant}
      size={buttonSize}
      onClick={onClick}
      disabled={disabled}
      className={className + " flex items-center gap-2"}
    >
      {!iconAfter && iconElement}
      {text}
      {iconAfter && iconElement}
    </Button>
  );
}; 