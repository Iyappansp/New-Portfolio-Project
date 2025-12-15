import { Resend } from "resend";

// Initialize Resend client
export const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
export const FROM_EMAIL = process.env.EMAIL_FROM || "onboarding@resend.dev";
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "iyappansanthoosh27032004@gmail.com";
