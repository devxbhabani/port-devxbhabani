import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "./Navbar";
import { GitHubCalendar } from "react-github-calendar";

const MagneticLetter = ({ children, mouseX, mouseY }) => {
	const ref = useRef(null);
  
	const tx = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
	const ty = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  
	useEffect(() => {
	  const handleMouseMove = () => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		
		const distanceX = mouseX.get() - centerX;
		const distanceY = mouseY.get() - centerY;
		const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
		
		const maxDistance = 250; 
		
		if (distance < maxDistance) {
		  const pullFactor = (maxDistance - distance) / maxDistance;
		  tx.set(distanceX * pullFactor * 0.4);
		  ty.set(distanceY * pullFactor * 0.4);
		} else {
		  tx.set(0);
		  ty.set(0);
		}
	  };
  
	  const unsubscribeX = mouseX.on("change", handleMouseMove);
	  return () => unsubscribeX();
	}, [mouseX, mouseY, tx, ty]);
  
	return (
	  <motion.span 
		ref={ref} 
		style={{ x: tx, y: ty, display: "inline-block" }}
	  >
		{children === " " ? "\u00A0" : children}
	  </motion.span>
	);
};

const MagneticText = ({ text, mouseX, mouseY, className }) => {
	return (
	  <span className={`flex ${className}`}>
		{text.split("").map((char, i) => (
		  <MagneticLetter key={i} mouseX={mouseX} mouseY={mouseY}>
			{char}
		  </MagneticLetter>
		))}
	  </span>
	);
};

const Hero = () => {
	const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
	const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

	const handlePointerMove = (e) => {
		mouseX.set(e.clientX);
		mouseY.set(e.clientY);
	};

	return (
		<div
			id="home"
			onPointerMove={handlePointerMove}
			className="relative flex min-h-screen w-full flex-col md:flex-row bg-white overflow-hidden"
		>
			{/* Absolute Huge Typography with Mix-Blend */}
			{/* Placed before Navbar and right-side content so they can render on top if needed */}
			<div className="absolute inset-0 pointer-events-none flex flex-col justify-start pt-[18vh] md:pt-[16vh] z-30 mix-blend-difference text-white">
				<div className="w-full px-4 md:px-8">
					<h1 className="text-[14vw] md:text-[10vw] leading-[0.75] tracking-[-0.05em] uppercase font-black m-0 p-0 flex flex-col w-full">
						<span className="block text-left md:text-right mr-5">
							<MagneticText text="FULL STACK" mouseX={mouseX} mouseY={mouseY} className="justify-start md:justify-end" />
						</span>
						<div className="flex justify-start md:justify-end w-full">
							<span className="block md:ml-10">
								<MagneticText text="DEVELOPER" mouseX={mouseX} mouseY={mouseY} className="justify-start md:justify-end" />
							</span>
						</div>
					</h1>
				</div>
			</div>

			{/* Left Column: Canvas Image Placeholder */}
			<div className="relative h-[40vh] md:h-screen w-full md:w-[40%] overflow-hidden z-10 bg-zinc-900 group">
				{/* Background Image / Photo Placeholder */}
				<div className="absolute inset-0 z-0">
					<img
						src="/profile.jpg"
						alt="Bhabanisankar Jana"
						className="object-cover w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
					/>
				</div>
			</div>

			{/* Right Column: Content */}
			<div className="relative h-auto min-h-[60vh] md:h-screen w-full md:w-[60%] flex flex-col justify-end items-start md:items-end pl-8 pr-4 md:pr-12 z-20 bg-white pb-6 md:pb-10 pt-[25vh] md:pt-0">
				
				<div className="w-full flex flex-col items-start md:items-end gap-6 md:gap-8 text-left md:text-right max-w-2xl relative z-40 pointer-events-auto">
					
					{/* Status & Bio */}
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex flex-col items-start md:items-end w-full"
					>
						<div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-4 md:gap-6 bg-white/80 backdrop-blur-sm p-3 rounded-xl w-full">
							<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm bg-white shrink-0">
								<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.5)] block animate-pulse"></span>
								<span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Available</span>
							</div>
							
							<p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
								<span className="text-black font-bold">I'm Bhabanisankar Jana.</span> I build high-performing websites for people that launch fast, look premium, and convert with impact.
							</p>
						</div>
					</motion.div>

					{/* GitHub Calendar */}
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="w-full bg-zinc-50 rounded-3xl p-4 md:p-6 border border-zinc-200 shadow-sm [&_svg]:w-full [&_svg]:h-auto relative"
					>
						<GitHubCalendar
							username="devxbhabani"
							colorScheme="light"
							blockSize={8}
							blockMargin={3}
							fontSize={10}
						/>
					</motion.div>
				</div>
			</div>

			{/* Navbar placed at the end so it renders on top of everything, including the mix-blend text */}
			<div className="absolute inset-0 pointer-events-none z-50">
				<div className="pointer-events-auto">
					<Navbar />
				</div>
			</div>
		</div>
	);
};

export default Hero;
