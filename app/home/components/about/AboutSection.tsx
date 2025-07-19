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
function getRow(idx: number) {
  return Math.floor(idx / 2);
}

export default function AboutSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-screen py-16 overflow-visible">
      <Image
        src="/about-bg-left.svg"
        alt="Background Left"
        width={400}
        height={600}
        className={`absolute left-0 top-0 z-0 pointer-events-none select-none floating-left`}
        draggable={false}
      />
      <Image
        src="/about-bg-right.svg"
        alt="Background Right"
        width={500}
        height={500}
        className={`absolute right-0 bottom-0 z-0 pointer-events-none select-none floating-right`}
        draggable={false}
      />
      <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-8" style={{ width: 600 }}>
        {cards.map((card, idx: number) => {
          const isHovered = expanded === idx;
          const isOpposite =
            expanded !== null &&
            getColumn(expanded) === getColumn(idx) &&
            Math.abs(getRow(expanded) - getRow(idx)) === 1;

          return (
            <AboutCard
              key={card.title}
              image={card.image}
              title={card.title}
              alt={card.alt}
              collapsed={isOpposite}
              highlighted={isHovered}
              animate={isHovered || isOpposite}
              onMouseEnter={() => setExpanded(idx)}
              onMouseLeave={() => setExpanded(null)}
            >
              {isHovered && <div>{card.content}</div>}
            </AboutCard>
          );
        })}
      </div>
    </section>
  );
}
