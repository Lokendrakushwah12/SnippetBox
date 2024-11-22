"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MagicCard = ({ children, className }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures this logic only runs on the client
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClient || !divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      tabIndex={0}
      className={`relative overflow-hidden rounded-lg border-[0.5px] border-white/20 ${
        className || ""
      }`}
    >
      {isClient && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(120,119,198,0.15), transparent 60%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default MagicCard;
