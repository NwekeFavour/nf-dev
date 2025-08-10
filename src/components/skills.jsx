"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TailwindCSS",
  "Bootstrap",
  "API Integration",
  "Responsive Design",
];

export default function Skills() {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]); // array to hold refs for each card

  useEffect(() => {
    // keep refs array length in sync with SKILLS
    skillRefs.current = skillRefs.current.slice(0, SKILLS.length);

    // gsap.context scopes selectors/animations to sectionRef (helps cleanup)
    const ctx = gsap.context(() => {
      // Make sure cards are visible in the DOM but styled for animation start
      gsap.set(skillRefs.current, { opacity: 0, y: 30, scale: 0.95 });

      // Animate to final visible state when section scrolls into view
      gsap.to(skillRefs.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.6,
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",    // when top of section hits 85% of viewport
          toggleActions: "play none none reset",
          // markers: true,    // uncomment to debug trigger positions
        },
      });
    }, sectionRef);

    // cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#0f0f0f] text-white">
      <div className="md:max-w-6xl mx-auto px-3 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => (
            <div
              key={skill}
              ref={(el) => (skillRefs.current[i] = el)}
              className="skill-card bg-[#1a1a1a] border border-gray-700 rounded-xl flex items-center justify-center sm:p-6 p-3 text-center shadow-lg hover:shadow-xl transition-transform"
            >
              <div className="text-xl font-semibold md:text-[17px] text-[15px]">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
