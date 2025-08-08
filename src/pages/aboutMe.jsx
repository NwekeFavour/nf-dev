import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function About(props) {
    return (
        <div>
            <Header />
            <div className='md:w-[80%] mx-auto w-[90%]'>
                <p className="m-0 md:text-[20px] lg:text-[22px] text-[17px] text-gray-100">About Me</p>
                <div className=''>
                    <p className="m-0 text-gray-300 lg:text-[17px] sm:text-[16px] text-[15px] md:my-4 my-3">I'm Nweke Favour, a frontend developer passionate about building fast, accessible, and visually clean web applications. With a focus on modern technologies like React.js, Next.js, and Vue.js, I specialize in crafting intuitive user interfaces that balance form and function. From concept to deployment, I enjoy creating seamless experiences that solve real-world problems and drive user engagement.</p>
                    <p className="m-0 text-gray-300 lg:text-[17px] sm:text-[16px] text-[15px] md:my-4 my-5">
                        My journey into tech started with a curiosity for how websites work, which quickly grew into a passion for building meaningful digital experiences. What began as self-driven exploration has evolved into a focused practice of turning ideas into functional, user-centered interfaces. I’m driven by the challenge of solving real problems through code and continuously strive to write clean, scalable, and efficient frontend solutions. Along the way, I’ve embraced modern workflows, UI frameworks, and deployment practices that help me ship quality work with confidence.
                    </p>
                    <p className="m-0 text-gray-300 lg:text-[17px] sm:text-[16px] text-[15px] md:my-4 my-3">I thrive in environments that encourage creativity, collaboration, and continuous learning. Whether working with a team or independently, I bring strong problem-solving skills, adaptability, and attention to detail to every project. I'm always seeking new challenges that push me to grow and build more polished, purposeful digital experiences.</p>
                </div>
            </div>
            <div className='w-[80%] mx-auto md:my-5 my-3'>
                <p className="m-0 md:text-[19px] lg:text-[20px] text-[16px] text-gray-100 mb-4">Technical Skills</p>
                <ul className='text-gray-100 ' >
                    <li className=' list-disc'>React.js / Next.js / Vue.js</li>
                    <li className=' list-disc'>JavaScript (ES6+), TypeScript</li>
                    <li className=' list-disc'>
                        Redux / Zustand / Context API
                    </li>
                    <li className=' list-disc'>Git & GitHub, Vercel (CI/CD)</li>
                    <li className=' list-disc'>REST APIs, Form handling, Routing</li>
                </ul>
            </div>
            <div className='w-[80%] mx-auto md:my-5 my-3'>
                <p className="m-0 md:text-[19px] lg:text-[20px] text-[16px] text-gray-100 mb-4">Soft Skills</p>
                <ul className='text-gray-100 ' >
                    <li className=' list-disc'>Problem-Solving</li>
                    <li className=' list-disc'>Effective Communication</li>
                    <li className=' list-disc'>
                        Team Collaboration
                    </li>
                    <li className=' list-disc'>Adaptability</li>
                    <li className=' list-disc'>Time Management</li>
                    <li className=' list-disc'>Initiative & Accountability</li>
                    <li className=' list-disc'>Attention to Detail</li>
                </ul>
            </div>
            <Footer/>
        </div>
    );
}

export default About;