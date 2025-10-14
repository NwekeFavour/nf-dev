import React, { useEffect, useRef } from 'react';
import Header from '../components/header';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import Contact from '../components/contact';
import Skills from '../components/skills';
import Footer from '../components/footer';
import Coding from '../assets/img/coding.svg'
import Digital from '../assets/img/digital.svg';

function Home() {
  const frontRef = useRef(null);
  const dashRef = useRef(null);
  const endRef = useRef(null);
  const engRef = useRef(null);
  const titleRef = useRef(null);
  const projects = useSelector((state) => state.projects.projects)

  useEffect(() => {
    const frontSplit = new SplitType(frontRef.current, { types: 'chars' });
    const dashSplit = new SplitType(dashRef.current, { types: 'chars' });
    const endSplit = new SplitType(endRef.current, { types: 'chars' });
    const engSplit = new SplitType(engRef.current, { types: 'chars' });
    const titleSplit = new SplitType(titleRef.current, { types: 'chars' });

    const allChars = [...frontSplit.chars, ...dashSplit.chars, ...endSplit.chars, ...engSplit.chars];
    const titleChars = [...titleSplit.chars]

    gsap.from(allChars, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'power4.out',
    });
    gsap.from(titleChars, {
      x: 10,
      autoAlpha: 0,
      stagger: 0.04,
      duration: 1,
      ease: 'power4.out',
    });

    return () => {
      frontSplit.revert();
      dashSplit.revert();
      endSplit.revert();
      engSplit.revert();
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="sm:flex ms-3 lg:ms-8 md:ms-4 flex-col items-center justify-start justify mt-10">
        {/* First Line */}
        <h1
          className="hero__title__top w-[100%] lg:text-[160px] md:text-[120px] sm:text-[80px] text-[5rem] xl:text-[10rem]  md:tracking-[-10px] tracking-[-2px] leading-[100%]"
          style={{ overflow: 'unset' }}
        >
          <span ref={frontRef} className="hero__hover text-[#9f9fa9]  ">
            Turning  Ideas
          </span>
        </h1>

        {/* Second Line */}
        <h1
          className="hero__title__bottom  w-[100%] sm:flex items-center lg:text-[160px]  sm:text-[80px]  tracking-[-2px] leading-[100%] md:text-[120px] text-[5rem] xl:text-[10rem]  md:tracking-[-10px] " 
          style={{ overflow: 'unset' }}
        >
          {/* <span
            ref={dashRef}
            className="hero__title__dash text-[#9f9fa9] px-4 tracking-[0.2em]"
          >
            —
          </span> */}
          <span ref={endRef} className="hero__hover   text-[#9f9fa9]">
            into Elegant
          </span>
        </h1>
        <h1
          className="hero__title__top w-[100%] lg:text-[160px] md:text-[120px] sm:text-[80px] text-[5rem] xl:text-[10rem]  md:tracking-[-10px] tracking-[-2px] leading-[100%]"
          style={{ overflow: 'unset' }}
        >
          <span ref={engRef} className="hero__hover text-[#9f9fa9]  ">
            Code
          </span>
        </h1>
      </div>
      <div className='flex sm:my-4 md:my-5 my-3 items-center justify-center'>
        <div className='sm:w-[80%] w-[90%]'>
            <div>
                <p className="m-0 text-white ">Nweke Favour</p>
                <i className="text-[#969696]" ref={titleRef}>Frontend Engineer</i>
            </div>
            <div className='md:my-4 sm:my-3 my-2'>
                <p className="m-0 sm:text-[14px] text-[13px] md:text-[15px] lg:text-[16px]  text-gray-300">I'm a dedicated frontend engineer with a strong focus on creating clean, responsive, and <span className='m-0 text-gray-500'>user-friendly interfaces.</span> With experience in tools like React, NextJs, Vue, and TailwindCSS, I’ve worked on real projects that emphasize both <span className='text-gray-500'>performance and accessibility</span>. I enjoy solving design challenges and turning ideas into intuitive digital experiences. Constantly learning and refining my skills, I'm eager to contribute to a team where creativity, <span className='text-gray-500'>collaboration</span>, and innovation drive the work, and where I can continue building solutions that are both functional and impactful.</p>
            </div>
        </div>
      </div>
      <div className='flex justify-center items-center md:my-5 my-4'>
        <img src={Coding} className='lg:w-[500px] md:w-[400px] w-[320px]' alt="" />
      </div>
      <div id='portfolio' className=''>
        <div>
            <p className="m-0 text-gray-50 ms-3 lg:ms-8 md:ms-4 lg:text-[20px] md:text-[19px] sm:text-[18px] text-[17px]">
                Projects
            </p>
        </div>
        <div className='lg:mx-5 md:mx-3 mx-2 my-6'>
          <div className='lg:w-[80%] w-[100%] md:w-[85%] mx-auto'> 
            {projects && projects.length > 0 && projects.map((project, index) => (
              <Link key={project.id} to={`${project.link}`} className=' hover:text-[#aaaaaa]'>
                <div className='flex  md:mt-4 sm:mt-3 mt-4 justify-between'>
                  <div>
                    <p className='m-0 hover:text-[#dad5dc] text-gray-500'>
                      {project.title}
                    </p>
                    <div className='flex md:mt-3 mt-2  items-center gap-3'>
                      <div>
                        <p className="m-0 text-gray-100 md:text-[16px] sm:text-[14px] text-[13px] uppercase proj ">{project.tech.join(', ')}</p>
                      </div>
                    </div>
                    <div>
                      <p className="m-0 text-gray-100 md:text-[15px] sm:text-[13.5px] text-[13px]">{project.summary}</p>
                    </div>
                  </div>
                  <div>
                    <ArrowUpRight className='text-gray-100 hover:text-[#aaaaaa]'/>
                  </div>
                </div>
                <div className='bg-gray-500 mt-3 h-[2px] w-full'></div>
              </Link>
            ))
            }
            <div className='md:my-3 my-2 flex items-center justify-end'>
              <Link className='text-gray-100 hover:underline cursor-pointer' to={"https://github.com/NwekeFavour"}>View More</Link>
            </div>
          </div>
          <div>
            <Contact/>
            <div className='md:my-10 my-8'>
              <p className="m-0 text-gray-100 text-justify">
                I'm open to helping you design, refine, or build seamless user experiences, whether it's a new idea or an existing product. let's connect and create something impactful
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center md:my-7 my-6'>
            <img src={Digital} className='lg:w-[600px] md:w-[400px] w-[320px]' alt="" />
          </div>
          <div className='md:mt-10 mt-6'>
            <div className='flex items-center justify-center'>
              <div className='lg:w-[200px] '>
                <p className="m-0 text-blue-100 lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] text-center">Over the Years</p>
                <p className="m-0 text-gray-300 text-center my-3">(●'◡'●)</p>
              </div>
            </div>
            <div className='lg:w-[80%] w-[100%] md:w-[85%] mx-auto'>
              <p className="m-0 text-blue-50 text-center text-[16px] md:text-[17px]">I’ve evolved from learning the fundamentals of web development, HTML, CSS, and JavaScript—to building interactive, user-focused applications using modern frameworks like <span className='text-gray-500'>React.js, Vue.js, and Next.js</span>. I gradually expanded my skills by exploring responsive design principles, DOM manipulation, and <span className='text-gray-500'>component-based</span> architecture while improving my understanding of clean <span className='text-gray-500'>UI/UX patterns and accessibility</span>.</p>
            </div>
            <div className='lg:w-[80%] w-[100%] md:w-[85%] mx-auto mt-6'>
              <p className="m-0 text-blue-50 text-center text-[16px] md:text-[17px]">Through these experiences, I’ve also developed strong soft skills that have shaped how I approach projects and collaboration. I’ve learned to communicate clearly with team members and clients, <span className='text-gray-500'>manage time</span> effectively under deadlines, adapt quickly to new tools and challenges, and stay committed to problem-solving with a detail-oriented mindset. <span className='text-gray-500'>Working in diverse environments</span> has strengthened my ability to collaborate, stay organized, and take initiative when leading or <span className='text-gray-500'>contributing to tasks</span>.</p>
            </div>
          </div>
          <div>
            <Skills/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
