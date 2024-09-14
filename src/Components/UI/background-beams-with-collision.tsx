import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "../utils/cn"; 

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
    { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
    { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6" },
    { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
    { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
    { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
    { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-auto top-1 bg-gradient-to-b from-[#0F0F0F] to-[#0F0F0F]/90 relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
    >
      {beams.map((beam, idx) => (
        <CollisionMechanism
          key={beam.initialX + idx}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = ({
  parentRef,
  containerRef,
  beamOptions = {},
}: {
  parentRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  beamOptions?: {
    initialX?: number;
    translateX?: number;
    initialY?: number;
    translateY?: number;
    rotate?: number;
    className?: string;
    duration?: number;
    delay?: number;
    repeatDelay?: number;
  };
}) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState(false);
  const [beamKey, setBeamKey] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (beamRef.current && containerRef.current && parentRef.current) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        if (beamRect.bottom >= containerRect.top) {
          setCollision(true);
          setBeamKey((prevKey) => prevKey + 1);
        }
      }
    }, 50);
    return () => clearInterval(animationInterval);
  }, [containerRef]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
        }}
        animate={{
          translateY: beamOptions.translateY || "1800px",
          translateX: beamOptions.translateX || "0px",
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-[#6EACDA] via-[#fff] to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision && <Explosion />}
      </AnimatePresence>
    </>
  );
};

const Explosion = () => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div className="absolute z-50 h-2 w-2">
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5 }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-[#6EACDA] to-[#fff]"
        />
      ))}
    </div>
  );
};
