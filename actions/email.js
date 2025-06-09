"use server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";

import Template from "@/components/email/template";

export async function sendEmail(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const token = formData.get("g-recaptcha-response");

  let errors = {};

  if (!name || name.trim() === "") {
    errors.name = "Please enter your name";
  }

  if (!email || !email.trim().includes("@")) {
    errors.email = "Please enter your valid email";
  }

  if (!message || message.trim() === "") {
    errors.message = "Please enter your message";
  }

  if (!token) {
    errors.message = "CAPTCHA not completed.";
  }

  const secret = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });

  const result = await res.json();

  if (!result.success) {
    errors.message = "CAPTCHA failed.";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const emailHtml = await render(
    <Template name={name} email={email} message={message} />
  );

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_FROM,
    subject: "Email from Portfolio",
    html: emailHtml,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
