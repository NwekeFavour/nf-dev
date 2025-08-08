// src/components/TopLoader.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function TopLoader({ isActive }) {
  const barRef = useRef();

  useEffect(() => {
    const el = barRef.current;
    if (isActive) {
      gsap.fromTo(
        el,
        { width: "0%", autoAlpha: 1 },
        {
          width: "100%",
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.to(el, { autoAlpha: 0, duration: 0.3 });
          },
        }
      );
    } else {
      gsap.to(el, { autoAlpha: 0, duration: 0.3 });
    }
  }, [isActive]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div ref={barRef} className="h-full bg-[#38bdf8] w-0 opacity-0"></div>
    </div>
  );
}
