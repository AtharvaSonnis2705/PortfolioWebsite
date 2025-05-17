import React, { useEffect, useState } from 'react'
import { FiMenu,FiX } from 'react-icons/fi'
import { FaLinkedin,FaGithub } from 'react-icons/fa'

function Navbar() {
    const [isScrolled,setIsScrolled] = useState(false)
    const [activeSection,setActiveSection] = useState('')
    const [isOpen,setIsOpen]= useState(false)

    useEffect(()=> {
        const handleScrolled = () =>{
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll",handleScrolled)
        return () => window.removeEventListener("scroll",handleScrolled)
},[])

    const menuItems = [
        
            {id:"about" ,label:"About"},
            {id:"skills" , label:"Skills"},
            {id:"work" , label:"Projects"},
            {id:"education" , label:"Education"},
        
    ]

    const handelMenuItemClick = (sessionId:any) =>{
        setActiveSection(sessionId)
        setIsOpen(false)

        const section = document.getElementById(activeSection);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  return (
    <>
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>

        <div className='text-white py-5 flex items-center justify-between'>
            <div className='text-lg font-semibold cursor-pointer'>
                <span className='text-[#5ab4ff]'>&lt;</span>
                <span className='text-white'>Atharva</span>
                <span className='text-[#5ab4ff]'>/</span>
                <span className='text-white'>Sonnis</span>
                <span className='text-[#5ab4ff]'>&gt;</span>
            </div>
           <ul className=' hidden md:flex space-x-8 text-gray-300'>
           {menuItems.map((item)=>(
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]": ""
            }`}>
                <button onClick={()=>handelMenuItemClick(item.id)}>
                    {item.label}
                </button>
            </li>
           ))} 
           </ul>
        {/* Icons */}
        <div className='hidden md:flex space-x-4'>
            <a
            href='https://github.com/AtharvaSonnis2705'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#5ab4ff]'>
                <FaGithub size={24}/>
            </a>
            <a
            href='https://www.linkedin.com/in/atharva-sonnis-968483188/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#5ab4ff]'>
                <FaLinkedin size={24}/>
            </a>
        </div>

        {/* for mobile */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#5ab4ff] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#5ab4ff] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handelMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}


        </div>
    </nav>
    </>
    )
}

export default Navbar