import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "sonnisatharva2705@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScroll = (sectionId:any) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white pt-16 pb-8 px-[12vw] md:px-[7vw] lg:px-[20vw] skills-gradient-bg">
      <div className="max-w-5xl mx-auto text-center">

        {/* Contact Section */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#5ab4ff]">Contact Me</h2>
        <p className="text-gray-300 mb-10 text-sm sm:text-base">
          I'm open to opportunities and collaborations. Let's connect!
        </p>

        <div className="grid gap-8 sm:grid-cols-3 text-sm sm:text-base mb-12">
          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-2xl text-[#5ab4ff]" />
            <span className="mt-2">{email}</span>
            <button
              onClick={copyEmail}
              className="mt-1 text-xs text-[#5ab4ff] hover:underline"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhone className="text-2xl text-[#5ab4ff]" />
            <span className="mt-2">+91-8108881250</span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-2xl text-[#5ab4ff]" />
            <span className="mt-2">Mumbai, India</span>
          </div>
        </div>

        {/* Footer Section */}
        <h3 className="text-xl font-semibold text-[#5ab4ff]">Atharva Sonnis</h3>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#5ab4ff] text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/atharva-sonnis-968483188/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/atharva_s27",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#5ab4ff] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Atharva Sonnis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
