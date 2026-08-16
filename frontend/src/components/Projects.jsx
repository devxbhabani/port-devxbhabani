import React from "react";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight } from "lucide-react";

const GithubIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-github"
	>
		<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
		<path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
);

const projectData = [
	{
		id: 1,
		title: "Restaurant POS System",
		desc: "A real-time, full-stack Restaurant POS and secure QR-Code Menu Ordering System.",
		image: "/projects/pos.png",
		tags: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
		github: "https://github.com/devxbhabani/Restaurant-POS-System",
		live: "#",
		year: "2026",
	},
	{
		id: 2,
		title: "movieLand",
		desc: "MERN stack web application for discovering movies and web series.",
		image: "/projects/movieland.png",
		tags: ["React", "Node.js", "Express", "MongoDB"],
		github: "https://github.com/devxbhabani/movieLand",
		live: "https://movieland-weld-iota.vercel.app",
		year: "2026",
	},
	{
		id: 3,
		title: "MakeLyft",
		desc: "A modern news platform that delivers the latest headlines across multiple categories.",
		tags: ["React", "Node.js", "Express", "PostgreSQL"],
		github: "https://github.com/Kashcx-dev/MakeLyft",
		live: "#",
		year: "2026",
	},
	{
		id: 4,
		title: "Image Based Calorie Estimator",
		desc: "A website to estimate calories from image.",
		image: "/projects/calorie-estimator.png",
		tags: ["REACT", "TAILWINDCSS", "PYTHON", "FLASK", "PYTORCH", "OPENCV"],
		github: "https://github.com/devxbhabani/Image-Based-Calorie-Estimator",
		live: "https://calorie-estimator-neon.vercel.app/",
		year: "2026",
	},
];

const Projects = () => {
	return (
		<section
			id="projects"
			className="relative w-full bg-white py-24 md:py-32 px-6 overflow-hidden border-t border-zinc-100"
		>
			<div className="max-w-7xl mx-auto">
				<div className="mb-16 md:mb-24">
					<h2 className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase text-black">
						<span className="block">Selected</span>
						<span className="block">Works</span>
					</h2>
					<div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
						<p className="text-zinc-500 text-lg md:text-xl max-w-md font-medium">
							A curated collection of digital experiences built with
							precision and passion.
						</p>
						<div className="flex items-center gap-2 text-sm font-bold tracking-widest text-zinc-400 uppercase">
							<span className="w-12 h-px bg-zinc-200"></span>
							{projectData.length} PROJECTS
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					{projectData.map((project, idx) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							className="group cursor-pointer"
						>
							<div className="relative aspect-4/3 md:aspect-16/10 overflow-hidden rounded-2xl bg-zinc-100 mb-6 group-hover:shadow-2xl transition-all duration-500">
								<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center overflow-hidden">
									<h3 className="text-4xl font-black text-zinc-700 opacity-20 uppercase tracking-tighter scale-150 rotate-12 transition-transform duration-700 group-hover:scale-110">
										{project.title}
									</h3>
								</div>

								{/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
									<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
										<ArrowUpRight size={32} />
									</div>
								</div> */}
								<img
									src={project.image}
									alt={project.title}
									className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
								/>

								<div className="absolute top-6 left-6 z-20 flex gap-2">
									<span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-black uppercase tracking-widest">
										{project.year}
									</span>
								</div>
								<div className="absolute top-6 right-6 z-20 flex gap-2">
									{project.github !== "#" && (
										<a
											href={project.github}
											target="_blank"
											rel="noreferrer"
											className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
										>
											<GithubIcon />
										</a>
									)}
									{project.live !== "#" && (
										<a
											href={project.live}
											target="_blank"
											rel="noreferrer"
											className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
										>
											<Globe size={18} />
										</a>
									)}
								</div>
							</div>
							<div className="flex justify-between items-start">
								<div>
									<h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-red-600 transition-colors">
										{project.title}
									</h3>
									<p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
										{project.desc}
									</p>
								</div>
								<div className="flex flex-wrap gap-1 max-w-37.5 justify-end">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-2 py-1 border border-zinc-200 rounded"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
