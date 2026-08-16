import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		try {
			const res = await fetch(
				`${import.meta.env.VITE_API_URL}/api/contact`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				},
			);
			const data = await res.json();
			if (data.success) {
				setStatus("Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatus(data.error || "Failed to send message.");
			}
		} catch (error) {
			console.error(error);
			setStatus("An error occurred. Is the backend running?");
		}
	};

	return (
		<section
			id="contact"
			className="relative w-full bg-black text-white py-24 px-6 border-t border-zinc-800"
		>
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
				<div className="md:w-1/2">
					<h2 className="text-[10vw] md:text-[6vw] font-black leading-[0.8] tracking-tighter uppercase mb-8">
						<span className="block text-outline opacity-50">GET IN</span>
						<span className="block">TOUCH</span>
					</h2>
					<p className="text-zinc-400 text-lg md:text-xl max-w-md font-medium mb-12">
						Have a project in mind, or just want to say hi? Fill out the
						form, and I'll get back to you as soon as possible.
					</p>
					<div className="flex flex-row gap-6 text-zinc-300">
						<a
							href="https://linkedin.com/in/bhabanisankarjana"
							target="_blank"
							rel="noreferrer"
							className="hover:text-white hover:scale-110 transition-all"
						>
							<FaLinkedin size={28} />
						</a>
						<a
							href="https://github.com/devxbhabani"
							target="_blank"
							rel="noreferrer"
							className="hover:text-white hover:scale-110 transition-all"
						>
							<FaGithub size={28} />
						</a>
						<a
							href="https://instagram.com/bsjana_007"
							target="_blank"
							rel="noreferrer"
							className="hover:text-white hover:scale-110 transition-all"
						>
							<FaInstagram size={28} />
						</a>
						<a
							href="mailto:bhabanisankarjana05@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="hover:text-white hover:scale-110 transition-all"
						>
							<FaEnvelope size={28} />
						</a>
					</div>
				</div>

				<div className="md:w-1/2 flex items-center">
					<form
						onSubmit={handleSubmit}
						className="w-full flex flex-col gap-6"
					>
						<div>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="YOUR NAME"
								required
								className="w-full bg-transparent border-b border-zinc-700 py-4 text-xl font-bold uppercase tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
							/>
						</div>
						<div>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="YOUR EMAIL"
								required
								className="w-full bg-transparent border-b border-zinc-700 py-4 text-xl font-bold uppercase tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
							/>
						</div>
						<div>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="YOUR MESSAGE"
								required
								rows="4"
								className="w-full bg-transparent border-b border-zinc-700 py-4 text-xl font-bold uppercase tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600 resize-none"
							></textarea>
						</div>
						<div className="mt-4 flex items-center justify-between">
							<span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
								{status}
							</span>
							<button
								type="submit"
								className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-black hover:scale-110 transition-transform"
							>
								<Send size={24} />
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
