import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative w-full selection:bg-red-600 selection:text-white">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <div className="w-full py-6 bg-black text-center text-zinc-600 text-xs font-bold uppercase tracking-widest">
        Bhabanisankar Jana © {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default App;
