"use client";
import { useState, useEffect } from "react";
import AboutCard from "./AboutCard";
import Image from "next/image";
import "./AboutFloating.css"; // Import animation styles

const cards = [
  {
    image: "/vision.svg",
    title: "Our Vision",
    alt: "Vision Icon",
    content: "Transact without worrying about gas fees powered by Base and optimized for efficiency.",
  },
  {
    image: "/advantages.svg",
    title: "Our Advantages",
    alt: "Advantages Icon",
    content: "We offer unique advantages: speed, security, and seamless experience.",
  },
  {
    image: "/how-it-works.svg",
    title: "How it Works ?",
    alt: "How it Works Icon",
    content: "Learn how our escrow process works step by step for your safety.",
  },
  {
    image: "/how-it-works.svg",
    title: "Lorem Ipsum",
    alt: "Lorem Ipsum Icon",
    content: "Placeholder for future features and information.",
  },
];

function getColumn(idx: number) {
  return idx % 2;
}
function getOtherRowIdx(idx: number) {
  return idx < 2 ? idx + 2 : idx - 2;
}

export default function AboutSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [leftAnim, setLeftAnim] = useState(0);
  const [rightAnim, setRightAnim] = useState(0);

  useEffect(() => {
    let leftDir = 1;
    let rightDir = -1;
    const interval = setInterval(() => {
      setLeftAnim((prev) => (prev >= 48 ? 0 : prev + leftDir));
      setRightAnim((prev) => (prev <= -48 ? 0 : prev + rightDir));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-screen py-16" style={{overflow: 'visible'}}>
      <Image
        src="/about-bg-left.svg"
        alt="Background Left"
        width={600}
        height={800}
        className={`absolute left-0 z-0 pointer-events-none select-none transition-all duration-700`}
        style={{top: '20%', transform: `translateX(${leftAnim}px)`}}
        draggable={false}
      />
      <Image
        src="/about-bg-right.svg"
        alt="Background Right"
        width={700}
        height={900}
        className={`absolute right-0 z-0 pointer-events-none select-none transition-all duration-700`}
        style={{top: '25%', transform: `translateX(${rightAnim}px)`}}
        draggable={false}
      />
      <div
        className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-8"
        style={{ width: 560 }}
      >
        {cards.map((card, idx: number) => {
          let isExpanded = false;
          let isCollapsed = false;
          if (expanded === idx) {
            isExpanded = true;
          } else if (expanded !== null && getOtherRowIdx(expanded) === idx && getColumn(expanded) === getColumn(idx)) {
            isCollapsed = true;
          }
          return (
            <AboutCard
              key={card.title}
              image={card.image}
              title={card.title}
              alt={card.alt}
              collapsed={isCollapsed}
              highlighted={expanded === idx}
              onMouseEnter={() => setExpanded(idx)}
              onMouseLeave={() => setExpanded(null)}
              style={{
                width: 260,
                height: isExpanded ? 260 : isCollapsed ? 60 : 200,
                transition: 'height 0.5s, width 0.5s',
              }}
            >
              {expanded === idx && <div>{card.content}</div>}
            </AboutCard>
          );
        })}
      </div>
    </section>
  );
}
