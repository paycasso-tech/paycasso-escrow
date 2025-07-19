import Image from "next/image";
import React from "react";

interface AboutCardProps {
  image: string;
  title: string;
  alt: string;
  children?: React.ReactNode;
  collapsed?: boolean;
  highlighted?: boolean;
  animate?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function AboutCard({
  image,
  title,
  alt,
  children,
  collapsed,
  highlighted,
  animate,
  onMouseEnter,
  onMouseLeave,
}: AboutCardProps) {
  return (
    <div
      className={`
        rounded-[24px]
        ${highlighted ? 'bg-[#232323]/80' : 'bg-[radial-gradient(135.33%_135.33%_at_5.71%_-44.13%,#000_0%,rgba(0,0,0,0.27)_100%)]'}
        backdrop-blur-[74.39px]
        shadow-[9.35px_4.67px_16.59px_0px_#00000061]
        overflow-hidden
        flex flex-col items-start justify-start
        transition-all duration-500
        px-6
        ${collapsed ? 'py-2' : 'py-6'}
        ${animate ? 'transition-all duration-500' : ''}
      `}
      style={{
        height: collapsed ? 60 : highlighted ? 260 : 200,
        minHeight: 60,
        maxHeight: 260,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!collapsed && (
        <Image
          src={image}
          alt={alt}
          width={48}
          height={48}
          className="mb-4"
          style={{ objectFit: "contain" }}
        />
      )}
      <span
        className={`
          text-left 
          font-urbanist 
          font-bold 
          text-[#D7D7D7]
          drop-shadow-[9.35px_4.67px_16.59px_rgba(0,0,0,0.38)] 
          ${collapsed ? 'text-[16px]' : 'text-[18px]'} 
          leading-[115%]
        `}
      >
        {title}
      </span>
      {!collapsed && children && (
        <div className="mt-2 text-left text-white text-sm transition-opacity duration-500 opacity-100">
          {children}
        </div>
      )}
    </div>
  );
}
