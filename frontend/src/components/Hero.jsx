import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { GitHubCalendar } from "react-github-calendar";

const Hero = () => {
	return (
		<div
			id="home"
			className="relative flex min-h-screen w-full flex-col md:flex-row bg-white"
		>
			{/* Absolute Huge Typography that spans both columns */}
			<div className="absolute inset-0 pointer-events-none flex flex-col justify-start pt-4 md:pt-[2vh] z-30 mix-blend-difference text-white">
				<div className="w-full px-4">
					<h1 className="text-[14vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase font-black m-0 p-0 flex flex-col w-full">
						<span className="block text-right mr-5">FULL STACK</span>
						<div className="flex justify-end w-full">
							<span className="block mt-2 md:ml-10">DEVELOPER</span>
						</div>
					</h1>
				</div>
			</div>

			{/* Left Column (Image & Navbar) */}
			<div className="relative h-[50vh] md:h-screen md:w-1/2 overflow-hidden z-10 bg-black">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<img
						src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
						alt="Hero background"
						className="object-cover w-full h-full grayscale opacity-70"
					/>
				</div>

				{/* Navbar */}
				<Navbar />
			</div>

			{/* Right Column (Info) */}
			<div className="relative h-auto min-h-[50vh] md:h-screen md:w-1/2 flex flex-col justify-end items-start pl-8 pr-4 z-20 bg-white pb-8 md:pb-12 pt-[30vh] md:pt-0">
				<div className="max-w-md w-full flex flex-col items-start gap-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="relative z-40"
					>
						<span className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)] block animate-pulse"></span>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium text-left"
					>
						I'm Bhabanisankar Jana.
						<br />
						I build high-performing websites for people
						<br />
						that launch fast, look premium, and convert with impact.
					</motion.p>

					{/* GitHub Contribution Graph */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="mt-2 w-full max-w-[500px] rounded-2xl shadow-lg bg-zinc-900 p-3 sm:p-5 border border-zinc-100 [&_svg]:w-full [&_svg]:h-auto"
					>
						<GitHubCalendar
							username="devxbhabani"
							colorScheme="dark"
							blockSize={8}
							blockMargin={2}
							fontSize={10}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
