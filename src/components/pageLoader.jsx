// src/components/PageLoader.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PageLoader = ({ onComplete }) => {
  const loaderRef = useRef();
  const barRef = useRef();
  const [count, setCount] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);

          gsap.to(loaderRef.current, {
            y: "-100%",
            duration: 1.2,
            ease: "power4.inOut",
            onComplete: () => {
              if (onComplete) onComplete();
            },
          });
        }
        return prev < 100 ? prev + 1 : prev;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = `${count}%`;
    }
  }, [count]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0b0d0a] px-6 py-8 md:px-10 md:py-10"
    >
      {/* Top row — eyebrow + wordmark */}
      <div className="flex items-start justify-between">
        <div>
          <p
            className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#8a8577] mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Portfolio · {currentYear}
          </p>
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#f4f0e6] leading-none"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Nweke <span className="italic text-[#e8a33d]">Favour</span>
          </h1>
        </div>

        <span
          className="w-2.5 h-2.5 rounded-full bg-[#e8a33d] mt-1 shrink-0 animate-pulse"
          aria-hidden="true"
        />
      </div>

      {/* Bottom row — count + progress bar */}
      <div>
        <div className="flex items-end justify-between mb-4">
          <p
            className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#8a8577]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Loading
          </p>
          <span
            className="text-5xl md:text-7xl font-medium text-[#f4f0e6] tabular-nums leading-none"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {count}
            <span className="text-xl md:text-3xl text-[#8a8577] ml-1">%</span>
          </span>
        </div>

        <div className="w-full h-px bg-[#26261f] overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-[#e8a33d] transition-[width] duration-100 ease-linear"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;