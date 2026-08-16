import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ManifestoWord = ({ children, progress, range }) => {
	// Map the scroll progress range to opacity: 0.15 (unhighlighted) to 1 (highlighted)
	const opacity = useTransform(progress, range, [0.15, 1]);
	return (
		<motion.span
			style={{ opacity }}
			className="mr-[1vw] mt-[0.5vw] inline-block"
		>
			{children}
		</motion.span>
	);
};

const Manifesto = () => {
	const text =
		// "For me, engineering means robust architecture, clean code, and zero compromises on performance. Build fast. Ship reliably. Solve real problems. I bridge the gap between elegant front-end experiences and powerful back-end systems. Scalable APIs and fluid UIs are my key tools to bring complex ideas to life. Always building, always learning, and open to bold new collaborations.";
		"For me, technology is about building products that matter. I believe in clean code, scalable architecture, and thoughtful design. I build fast, iterate relentlessly, and focus on solving real-world problems. By combining Full-Stack Development with AI, I create intelligent, high-performance applications that are both functional and user-centric. Every project is a chance to learn, innovate, and push the boundaries of what's possible.";
	const words = text.split(" ");

	const containerRef = useRef(null);

	// Track scroll progress of this section
	// "start start" -> starts when top of section hits top of viewport
	// "end end" -> finishes when bottom of section hits bottom of viewport
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	return (
		<section
			id="manifesto"
			ref={containerRef}
			className="relative w-full bg-white h-[250vh]"
		>
			<div className="sticky top-0 h-screen w-full flex flex-col justify-end pb-[10vh] md:pb-[15vh] px-8 md:px-[10vw] overflow-hidden">
				<div className="w-full max-w-350">
					<p className="text-zinc-400 uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 font-bold">
						Manifesto
					</p>
					<h2 className="text-[7vw] md:text-[2.75vw] leading-[1.1] tracking-tight font-black text-black flex flex-wrap">
						{words.map((word, i) => {
							const start = i / words.length;
							const end = start + 1 / words.length;
							return (
								<ManifestoWord
									key={i}
									progress={scrollYProgress}
									range={[start, end]}
								>
									{word}
								</ManifestoWord>
							);
						})}
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Manifesto;
