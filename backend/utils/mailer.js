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
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER,
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
