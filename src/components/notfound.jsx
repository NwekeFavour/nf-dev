import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      textRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    )
      .fromTo(
        subTextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        buttonRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen bg-[#0b0809] text-white text-center px-4"
    >
      <h1
        ref={textRef}
        className="text-[10rem] font-bold tracking-widest text-[#aaaaaa]"
      >
        404
      </h1>
      <p ref={subTextRef} className="text-xl text-gray-300 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <button
        ref={buttonRef}
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-gray-500 text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
