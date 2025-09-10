import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Equal } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuItemsRef = useRef([]);
  const closeRef = useRef(null);
  const equalRef = useRef(null);

  const toggleNav = () => {
    setIsOpen(prev => !prev);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    toggleNav();
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (isOpen && window.innerWidth <= 1024) {
      navRef.current.style.display = 'flex';

      tl.to(equalRef.current, {
        scale: 1.2,
        duration: 0.2,
        ease: 'power2.inOut'
      })
        .to(navRef.current, {
          y: 0,
          duration: 0.5
        })
        .fromTo(
          menuItemsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: 'power2.out'
          },
          '-=0.3'
        )
        .fromTo(
          closeRef.current,
          { autoAlpha: 0, scale: 0.8 },
          { autoAlpha: 1, scale: 1, duration: 0.3 },
          '-=0.2'
        );
    } else {
      const closeTl = gsap.timeline();

      closeTl
        .to(closeRef.current, {
          autoAlpha: 0,
          scale: 0.8,
          duration: 0.2,
          ease: 'power1.inOut'
        })
        .to(navRef.current, {
          y: '-100%',
          duration: 0.5,
          ease: 'power3.in',
          onComplete: () => {
            navRef.current.style.display = 'none';
          }
        })
        .to(equalRef.current, {
          scale: 1,
          duration: 0.2
        });
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Header Bar */}
      <div className="md:mx-5 sm:mx-4 mx-5 md:my-4 sm:my-3 my-4 flex justify-between items-start">
        <div className="flex gap-2 items-center">
          {/* Hamburger for mobile */}
          <div className="md:flex lg:hidden flex items-center">
            <button onClick={toggleNav} ref={equalRef}>
              <Equal className="text-[#aaaaaa]" />
            </button>
          </div>
          <Link to={"/"}  className="m-0 text-[#aaaaaa] title">Nw{">"}</Link>
        </div>

        {/* Desktop Nav */}
        <div className="flex gap-5">
          <div>
            <p className="m-0 text-white title">FrontEnd{">"}</p>
          </div>
          <div className="md:hidden hidden lg:block">
            <div><Link to={"/about"} className="hover:underline text-white">About Me</Link></div>
            <div><a href={"#portfolio"} className="hover:underline text-white">Portfolio</a></div>
            <div><Link to={"https://x.com/uncleNf"} className="hover:underline  text-white">X(fka twitter)</Link></div>
            <div><Link to={"https://github.com/NwekeFavour"} className="hover:underline text-white">Github</Link></div>
            <div><Link to={"https://drive.google.com/file/d/1CgamFzVuuto6NtV4JAEYGdT7nIdp8OcY/view?usp=drive_link"}  className="hover:underline text-white">Resumé</Link></div>
            
          </div>
        </div>
      </div>

      {/* Animated Mobile Nav Overlay */}
      <div
        ref={navRef}
        className="fixed top-0 right-0 w-full h-screen bg-black text-white flex-col items-center justify-center space-y-6 text-xl z-50 lg:hidden"
        style={{ transform: 'translateY(-100%)', display: 'none' }}
      >
        <button
          ref={closeRef}
          onClick={toggleNav}
          className="absolute top-8 left-8 text-sm uppercase tracking-widest opacity-0"
        >
          Close
        </button>
        {[
          { name: 'About Me', type: 'link', to: '/about' },
          { name: 'Portfolio', type: 'scroll', to: 'portfolio' }, // <— scroll type
          { name: 'X (fka Twitter)', type: 'link', to: 'https://x.com/uncleNf' },
          { name: 'Github', type: 'link', to: 'https://github.com/NwekeFavour' },
          { name: 'Resumé', type: 'link', to: 'https://drive.google.com/file/d/1CgamFzVuuto6NtV4JAEYGdT7nIdp8OcY/view?usp=drive_link' }
        ].map((item, index) => (
          item.type === 'scroll' ? (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.to)}
              ref={el => menuItemsRef.current[index] = el}
              className="hover:underline text-white"
            >
              {item.name}
            </button>
          ) : (
            <Link
              key={item.name}
              to={item.to}
              ref={el => menuItemsRef.current[index] = el}
              onClick={toggleNav}
              className="hover:underline text-white"
            >
              {item.name}
            </Link>
          )
        ))}

      </div>
    </div>
  );
}

export default Header;
