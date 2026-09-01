import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, X } from "lucide-react";

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
		longDesc: "A comprehensive point-of-sale system designed specifically for modern restaurants. It seamlessly bridges the gap between kitchen staff and customers by offering a digital QR-code ordering system alongside a robust admin dashboard for order management and analytics.",
		features: [
			"Real-time order synchronization using Socket.io",
			"Secure QR-code generation for tableside ordering",
			"Comprehensive inventory management",
			"Role-based access control (Admin, Waitstaff, Kitchen)"
		],
		challenges: "Ensuring zero latency between the customer placing an order via their phone and the kitchen display system receiving it. This was solved by migrating from standard REST polling to a fully bidirectional WebSocket architecture.",
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
		longDesc: "movieLand is a sleek, responsive platform for cinephiles to discover, rate, and curate their favorite films and series. Featuring a fluid UI, dark mode aesthetics, and deep integration with external movie databases to fetch the latest trailers and ratings.",
		features: [
			"Dynamic search and filtering by genre and rating",
			"User authentication and personalized watchlists",
			"Interactive movie carousels with smooth animations",
			"Responsive design optimized for both mobile and desktop"
		],
		challenges: "Handling the vast amount of data coming from the external movie API while keeping the initial page load extremely fast. We implemented server-side pagination and aggressive client-side caching to maintain a buttery smooth user experience.",
		image: "/projects/movieland.png",
		tags: ["React", "Node.js", "Express", "MongoDB"],
		github: "https://github.com/devxbhabani/movieLand",
		live: "https://movieland-weld-iota.vercel.app",
		year: "2026",
	},
	{
		id: 3,
		title: "MakeLyft",
		desc: "Enterprise carpooling platform enabling employees to securely discover and share rides.",
		longDesc: "MakeLyft was developed as a solution to the daily commuting challenges faced by corporate employees, such as high transportation costs, traffic congestion, and environmental impact. This Enterprise Carpooling Platform allows employees from registered organizations to seamlessly coordinate shared transportation, track journeys in real-time, and handle payments securely.",
		features: [
			"Automated ride matching based on overlapping routes and schedules",
			"Real-time journey tracking and mapping integration",
			"Secure in-app payment handling and split fares",
			"Organization-based user verification and access control"
		],
		challenges: "Implementing a highly efficient geospatial matching algorithm that could accurately pair riders and drivers in real-time based on live traffic data and strict schedule constraints.",
		image: "/projects/makelyft.jpg",
		tags: ["React", "Node.js", "Express", "PostgreSQL", "WebSockets"],
		github: "https://github.com/Kashcx-dev/MakeLyft",
		live: "#",
		year: "2026",
	},
	{
		id: 4,
		title: "Image Based Calorie Estimator",
		desc: "A website to estimate calories from image.",
		longDesc: "Leveraging the power of computer vision and deep learning, this application allows users to upload a photo of their meal and instantly receive an estimated calorie breakdown. Built with a Python/Flask backend utilizing PyTorch and OpenCV for image processing.",
		features: [
			"YOLO-based object detection for food items",
			"Volume estimation algorithms using reference scaling",
			"Automated nutritional value calculation",
			"Sleek TailwindCSS frontend interface"
		],
		challenges: "Accurately estimating the physical volume of food from a 2D image is inherently difficult. We tackled this by requiring a standard reference object (like a coin or card) in the frame, allowing the OpenCV pipeline to calculate depth and scale dynamically.",
		image: "/projects/calorie-estimator.png",
		tags: ["REACT", "TAILWINDCSS", "PYTHON", "FLASK", "PYTORCH", "OPENCV"],
		github: "https://github.com/devxbhabani/Image-Based-Calorie-Estimator",
		live: "https://calorie-estimator-neon.vercel.app/",
		year: "2026",
	},
	{
		id: 5,
		title: "AyuScan: ECG 1D-CNN Model",
		desc: "Deep learning 1D-CNN model designed for real-time ECG signal classification and cardiac anomaly detection.",
		longDesc: "AyuScan's core artificial intelligence component. This deep learning model utilizes a 1-Dimensional Convolutional Neural Network (1D-CNN) built with TensorFlow and Keras to process raw electrocardiogram (ECG) time-series data. It is trained to detect microscopic cardiac anomalies in real-time, functioning as an early warning system for arrhythmias.",
		features: [
			"Custom 1D-CNN architecture optimized for time-series data",
			"Real-time signal noise reduction and artifact filtering",
			"High-accuracy anomaly detection (Arrhythmia, AFib)",
			"Lightweight model weights optimized for edge deployment"
		],
		challenges: "Raw ECG data is notoriously noisy due to muscle movement and baseline wander. Before training the model, we had to engineer a robust digital signal processing (DSP) pipeline using Butterworth bandpass filters to isolate the clean QRS complex.",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
		tags: ["PYTHON", "TENSORFLOW", "KERAS", "SIGNAL PROCESSING"],
		github: "https://github.com/devxbhabani/AyuScan",
		live: "#",
		year: "2026",
	},
	{
		id: 6,
		title: "AyuScan: SpO2 Embedded Integration",
		desc: "Integration of an SpO2 GRU trend analysis model with an ESP32 embedded system for continuous pulse oximetry monitoring.",
		longDesc: "The hardware bridge for the AyuScan ecosystem. This project involved writing low-level C++ firmware for the ESP32 microcontroller to interface with photoplethysmography (PPG) sensors. The hardware continuously streams raw red and infrared light data over WebSockets to a Python backend, where a Gated Recurrent Unit (GRU) model predicts SpO2 trends.",
		features: [
			"ESP32 firmware written in C++ for I2C sensor communication",
			"Ultra-low latency WebSocket data streaming (8080)",
			"Integration with a Python backend running GRU prediction models",
			"Automated hardware GPIO alerts via Raspberry Pi 5"
		],
		challenges: "Maintaining a stable, high-frequency data stream (100Hz+) over a local wireless network without packet dropping. We migrated from standard HTTP to raw WebSockets and implemented a circular buffer on the ESP32 to prevent memory overflow during network spikes.",
		image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2000",
		tags: ["C++", "PYTHON", "ESP32", "WEBSOCKETS", "HARDWARE"],
		github: "https://github.com/devxbhabani/AyuScan",
		live: "#",
		year: "2026",
	},
];

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [privateModal, setPrivateModal] = useState(false);
	const [checkingRepo, setCheckingRepo] = useState(null);

	const handleGithubClick = async (e, url) => {
		e.preventDefault();
		e.stopPropagation();
		
		if (url === "#") return;

		setCheckingRepo(url);
		const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
		
		if (match) {
			try {
				const res = await fetch(`https://api.github.com/repos/${match[1]}/${match[2]}`);
				if (res.status === 404) {
					setPrivateModal(true);
					setCheckingRepo(null);
					return;
				}
			} catch (err) {
				console.error("Error checking github repo:", err);
			}
		}
		
		setCheckingRepo(null);
		window.open(url, "_blank");
	};

	// Lock body scroll when modal is open
	useEffect(() => {
		if (selectedProject || privateModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [selectedProject, privateModal]);

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
							Exploring the intersection of software, artificial intelligence, and hardware through purpose-driven engineering.
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
							onClick={() => setSelectedProject(project)}
						>
							<div className="relative aspect-4/3 md:aspect-16/10 overflow-hidden rounded-2xl bg-zinc-100 mb-6 group-hover:shadow-2xl transition-all duration-500">
								<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center overflow-hidden">
									<h3 className="text-4xl font-black text-zinc-700 opacity-20 uppercase tracking-tighter scale-150 rotate-12 transition-transform duration-700 group-hover:scale-110">
										{project.title}
									</h3>
								</div>

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
										<button
											onClick={(e) => handleGithubClick(e, project.github)}
											className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-lg"
										>
											{checkingRepo === project.github ? (
												<div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
											) : (
												<GithubIcon />
											)}
										</button>
									)}
									{project.live !== "#" && (
										<a
											href={project.live}
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.stopPropagation()}
											className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-lg"
										>
											<Globe size={18} />
										</a>
									)}
								</div>
								
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
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

			{/* Detailed Project Modal */}
			<AnimatePresence>
				{selectedProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
						onClick={() => setSelectedProject(null)}
					>
						<motion.div
							initial={{ y: 50, opacity: 0, scale: 0.95 }}
							animate={{ y: 0, opacity: 1, scale: 1 }}
							exit={{ y: 20, opacity: 0, scale: 0.95 }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
							className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close Button */}
							<button
								onClick={() => setSelectedProject(null)}
								className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-900 hover:bg-black hover:text-white transition-all shadow-lg cursor-pointer"
							>
								<X size={24} />
							</button>

							<div className="overflow-y-auto overflow-x-hidden flex-1 no-scrollbar" data-lenis-prevent="true">
								{/* Header Image */}
								<div className="relative w-full h-[40vh] md:h-[50vh] bg-zinc-900">
									<img 
										src={selectedProject.image} 
										alt={selectedProject.title}
										className="w-full h-full object-cover opacity-80"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
									<div className="absolute bottom-8 left-8 right-8">
										<div className="flex flex-wrap gap-2 mb-4">
											{selectedProject.tags.map((tag) => (
												<span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20">
													{tag}
												</span>
											))}
										</div>
										<h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
											{selectedProject.title}
										</h2>
									</div>
								</div>

								{/* Content */}
								<div className="p-8 md:p-12 lg:p-16 bg-white">
									<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
										<div className="lg:col-span-2">
											<h3 className="text-xl font-bold uppercase tracking-widest text-zinc-400 mb-4 border-b border-zinc-100 pb-4">Overview</h3>
											<p className="text-lg text-zinc-800 leading-relaxed font-medium mb-12">
												{selectedProject.longDesc}
											</p>

											<h3 className="text-xl font-bold uppercase tracking-widest text-zinc-400 mb-4 border-b border-zinc-100 pb-4">Key Features</h3>
											<ul className="space-y-4 mb-12">
												{selectedProject.features.map((feature, i) => (
													<li key={i} className="flex items-start gap-4">
														<div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2.5 shrink-0" />
														<span className="text-zinc-700 text-lg">{feature}</span>
													</li>
												))}
											</ul>

											<h3 className="text-xl font-bold uppercase tracking-widest text-zinc-400 mb-4 border-b border-zinc-100 pb-4">Technical Challenge</h3>
											<p className="text-lg text-zinc-600 leading-relaxed italic border-l-4 border-red-600 pl-6">
												"{selectedProject.challenges}"
											</p>
										</div>

										{/* Sidebar */}
										<div className="flex flex-col gap-8">
											<div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
												<h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">Project Links</h4>
												<div className="flex flex-col gap-4">
													{selectedProject.github !== "#" && (
														<button 
															onClick={(e) => handleGithubClick(e, selectedProject.github)} 
															className="w-full flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-zinc-200 group"
														>
															<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover:bg-black group-hover:text-white transition-colors">
																{checkingRepo === selectedProject.github ? (
																	<div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
																) : (
																	<GithubIcon />
																)}
															</div>
															<span className="font-bold text-zinc-900">View Source</span>
														</button>
													)}
													{selectedProject.live !== "#" && (
														<a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-black rounded-xl shadow-sm hover:shadow-lg transition-shadow group">
															<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
																<Globe size={18} />
															</div>
															<span className="font-bold text-white">Live Preview</span>
														</a>
													)}
												</div>
											</div>
											
											<div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
												<h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Timeline</h4>
												<p className="text-2xl font-black text-zinc-900 tracking-tighter">{selectedProject.year}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{privateModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
						onClick={(e) => {
							e.stopPropagation();
							setPrivateModal(false);
						}}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center relative border border-zinc-100"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
							</div>
							<h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 mb-2">Repository Private</h3>
							<p className="text-zinc-500 font-medium mb-8">
								The source code for this project is currently private and cannot be viewed publicly.
							</p>
							<button 
								onClick={() => setPrivateModal(false)}
								className="w-full py-4 bg-black text-white font-bold tracking-widest uppercase rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer"
							>
								Understood
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Projects;
