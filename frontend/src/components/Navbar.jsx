import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<motion.nav
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 md:gap-12 px-8 py-4 rounded-full bg-white border border-zinc-200 shadow-md"
		>
			<a
				href="#home"
				className="text-zinc-500 hover:text-black text-xs md:text-sm font-bold transition-colors uppercase tracking-widest"
			>
				HOME
			</a>
			<a
				href="#about"
				className="text-zinc-500 hover:text-black text-xs md:text-sm font-bold transition-colors uppercase tracking-widest"
			>
				ME
			</a>
			<a
				href="/resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className="text-zinc-500 hover:text-black text-xs md:text-sm font-bold transition-colors uppercase tracking-widest"
			>
				RESUME
			</a>
			<a
				href="#projects"
				className="text-zinc-500 hover:text-black text-xs md:text-sm font-bold transition-colors uppercase tracking-widest"
			>
				PROJECTS
			</a>
			<a
				href="#contact"
				className="text-zinc-500 hover:text-black text-xs md:text-sm font-bold transition-colors uppercase tracking-widest"
			>
				GET IN TOUCH
			</a>
		</motion.nav>
	);
};

export default Navbar;
