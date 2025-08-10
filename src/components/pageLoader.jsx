// src/components/PageLoader.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PageLoader = ({ onComplete }) => {
  const loaderRef = useRef();
  const [count, setCount] = useState(0); // start from 0
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Faster count-up timer
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);

          // Slide loader up after reaching 100
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
    }, 15); // speed in ms (lower = faster)

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black z-50 flex flex-col items-start justify-start"
    >
      {/* Your existing text */}
      <div className="fixed top-[50px] start-[30px] md:w-[30%] sm:w-[35%] w-[40%] xl:w-[23%] lg:w-[30%]">
        <h1 className="lg:text-3xl load md:text-2xl text-[20px] font-bold text-gray-300">
          Nweke Favour Portfolio ©{currentYear}
        </h1>
      </div>

      {/* Count-up number */}
      <div className="fixed bottom-4 right-6">
  <span className="text-white text-7xl font-bold">{count}</span>
</div>

    </div>
  );
};

export default PageLoader;
