import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute bottom-12 right-12 z-50 flex flex-col items-end gap-2">
      <a href="#home" className="text-white text-2xl font-black transition-opacity hover:opacity-70 text-right uppercase">
        HOME
      </a>
      <a href="#about" className="text-white text-2xl font-black transition-opacity hover:opacity-70 text-right uppercase">
        ME
      </a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white text-2xl font-black transition-opacity hover:opacity-70 text-right uppercase">
        RESUME
      </a>
      <a href="#services" className="text-white text-2xl font-black transition-opacity hover:opacity-70 text-right uppercase">
        SERVICES
      </a>
      <a href="#contact" className="text-white text-2xl font-black transition-opacity hover:opacity-70 text-right uppercase">
        GET IN TOUCH
      </a>
    </nav>
  );
};

export default Navbar;
