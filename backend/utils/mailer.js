import nodemailer from "nodemailer";

export const sendContactEmail = async (name, email, message) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: `"devXbhabani-portfolio" <${process.env.EMAIL_USER}>`,
			to: process.env.TO_EMAIL_USER,
			subject: `New Portfolio Message from ${name}`,
			text: `You have a new message from your portfolio!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
		};

		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent successfully:", info.response);
		return true;
	} catch (error) {
		console.error("Error sending email notification:", error);
		return false;
	}
};

import { Resend } from "resend";

// (Make sure to add RESEND_API_KEY to your .env file and Render dashboard)

export const sendContactEmailResend = async (name, email, message) => {
	try {
		// Initialize inside the function to ensure process.env is fully loaded first
		const resend = new Resend(process.env.RESEND_API_KEY);

		const data = await resend.emails.send({
			from: '"devXbhabani-portfolio" <onboarding@resend.dev>', // MUST be this unless you own a custom domain
			to: process.env.TO_EMAIL_USER,
			subject: `New Portfolio Message from ${name}`,
			html: `
				<h3>You have a new message from your portfolio!</h3>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Message:</strong><br/>${message}</p>
			`,
		});

		console.log("Resend Email sent successfully:", data);
		return true;
	} catch (error) {
		console.error("Error sending Resend email notification:", error);
		return false;
	}
};
