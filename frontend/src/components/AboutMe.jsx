import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
	return (
		<section
			id="about"
			className="w-full bg-white py-24 md:py-40 px-6 md:px-12 lg:px-[10vw]"
		>
			<div className="max-w-350 mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
				{/* Left Column: Heading */}
				<div className="w-full md:w-1/3 flex flex-col justify-start">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
						className="text-zinc-400 uppercase tracking-[0.2em] text-xs font-bold mb-4"
					>
						01 — Who I Am
					</motion.p>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl md:text-6xl font-black tracking-tight text-black leading-none"
					>
						THE ENGINEER
					</motion.h2>
				</div>

				{/* Right Column: Bio */}
				<div className="w-full md:w-2/3 flex flex-col justify-start">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-2xl md:text-3xl lg:text-4xl text-zinc-500 font-medium leading-snug md:leading-snug tracking-tight mb-12"
					>
						I’m a{" "}
						<span className="text-black">
							Full-Stack Developer and AI/ML enthusiast
						</span>{" "}
						passionate about building modern, scalable, and intelligent
						applications. I enjoy working with{" "}
						<span className="text-black">
							React, Node.js, databases, and AI/ML technologies
						</span>
						{/* , while continuously learning and turning ideas into
						real-world solutions. */}
						, with a strong interest in creating impactful products that
						combine modern web technologies with AI.
					</motion.p>

					{/* Minimalist Stats */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="grid grid-cols-2 gap-8 border-t border-zinc-200 pt-10"
					>
						<div className="flex flex-col gap-1">
							<span className="text-4xl md:text-5xl font-black text-black">
								17+
							</span>
							<span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
								Projects Built
							</span>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-4xl md:text-5xl font-black text-black">
								100%
							</span>
							<span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
								Commitment
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
