import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Manifesto from "./components/Manifesto";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import SmoothScroll from "./components/SmoothScroll";
import SplashScreen from "./components/SplashScreen";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	// Lock body scroll while loading
	useEffect(() => {
		if (isLoading) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isLoading]);

	return (
		<SmoothScroll>
			<AnimatePresence mode="wait">
				{isLoading && (
					<SplashScreen
						key="splash"
						finishLoading={() => setIsLoading(false)}
					/>
				)}
			</AnimatePresence>

			<div className="relative w-full selection:bg-red-600 selection:text-white">
				<Hero />
				<AboutMe />
				<Manifesto />
				<Projects />
				<TechStack />
				<Contact />
				<div className="w-full py-6 bg-black text-center text-zinc-600 text-xs font-bold uppercase tracking-widest">
					Bhabani Sankar Jana © {new Date().getFullYear()}
				</div>
			</div>
		</SmoothScroll>
	);
}

export default App;
