import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { Typewriter } from 'react-simple-typewriter';
import Tilt from "react-parallax-tilt"
import profileImage from "../../assets/profileImage/cropped image (2).png"

function About() {
  return (
    <section id="about"
    className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 '>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
            <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                Hi, I am
            </h1>
            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Atharva Sonnis
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <div className='text-[#5ab4ff]'>
            <span className="text-white">I am a </span>
            <Typewriter
                words={['Fullstack Developer', '<Programmer/>', 'AI/ML Student']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
                cursorColor="#5ab4ff"
                
            />
            </div>

            </h3>
            {/* about me para */}
            <p className='text-base sm:text-lg text-gray-300 mb-10 mt-8 leading-relaxed font-poppins transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(130,69,236,0.6)]  '>
            A passionate and curious Computer Science engineer.
            Whether it's building full-stack web apps, exploring the power of AI, or diving into cloud technologies like AWS, 
            ,I'm always learning, constantly experimenting, and driven by a desire to solve problems that matter.
             Beyond the code, I value clear communication and continuous growth. Let's connect and build something great together!
            </p>
            <a href='https://drive.google.com/file/d/1jKM2H1LPMJphxI-SGD4awTgoO3d8dFeG/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #5ab4ff, #63a0ff)', // Soft light blue gradient
    boxShadow: '0 4px 8px rgba(90, 180, 255, 0.3), 0 0 12px rgba(90, 180, 255, 0.4), 0 0 20px rgba(90, 180, 255, 0.5)',
            }}>Download CV</a>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
            <Tilt
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem]   rounded-full"
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
            >
            <img
              src={profileImage}
              alt="Atharva Sonnis"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(90,180,255,0.4)]"
            />
          </Tilt></div>
        </div>
        
         
    </section>
  )
}

export default About