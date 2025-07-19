"use client";

import React, { useState } from 'react';
import SectionLabel from '@/components/section-label';
import './VisionSection.css'; // Make sure this CSS file exists

// Largest icons are closer to center
const leftSvgs = [
  { src: '/left3.svg', size: 100, offsetX: -300 },
  { src: '/left2.svg', size: 80, offsetX: -380 },
  { src: '/left1.svg', size: 60, offsetX: -440 },
];

const rightSvgs = [
  { src: '/right3.svg', size: 100, offsetX: 300 },
  { src: '/right2.svg', size: 80, offsetX: 380 },
  { src: '/right1.svg', size: 60, offsetX: 440 },
];

export default function VisionSection() {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[700px] w-full py-24 font-poppins"
      style={{ overflow: 'visible' }}
    >
      {/* Left side icons */}
      {leftSvgs.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={`Left ${i}`}
          className="absolute pointer-events-none user-select-none floating-left"
          style={{
            top: '68%',
            left: `calc(53% + ${img.offsetX}px)`,
            transform: 'translateY(-50%)',
            width: img.size,
            height: img.size,
            opacity: hovering ? 1 : 0,
            transition: `opacity 0.5s ease ${i * 0.1}s`,
            zIndex: 5,
          }}
          draggable={false}
        />
      ))}

      {/* Right side icons */}
      {rightSvgs.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={`Right ${i}`}
          className="absolute pointer-events-none user-select-none floating-right"
          style={{
            top: '68%',
            left: `calc(40% + ${img.offsetX}px)`,
            transform: 'translateY(-50%)',
            width: img.size,
            height: img.size,
            opacity: hovering ? 1 : 0,
            transition: `opacity 0.5s ease ${i * 0.1}s`,
            zIndex: 5,
          }}
          draggable={false}
        />
      ))}

      <div className="relative z-20 flex flex-col items-center w-full">
        <SectionLabel className="mb-8 text-lg md:text-2xl" style={{ maxWidth: 1200 }}>
          Our Vision
        </SectionLabel>

        <div
          className="mb-12 text-4xl md:text-5xl font-semibold tracking-tight text-white text-center"
          style={{
            width: 1442,
            height: 59.3,
            lineHeight: '115%',
            boxShadow: '9.43px 4.72px 16.74px 0px #00000061',
            borderRadius: 16,
            opacity: 1,
            marginTop: 24,
            marginBottom: 48,
          }}
        >
          Trustless payments<br />borderless work
        </div>

        <img
          src="/just-logo.svg"
          alt="Paycasso Logo"
          style={{
            width: 791,
            height: 446.33,
            display: 'block',
            margin: '48px auto 0 auto',
            cursor: 'pointer',
            zIndex: 10,
          }}
          draggable={false}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </section>
  );
}
