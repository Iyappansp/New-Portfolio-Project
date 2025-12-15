import axios from "axios";
import { telegramConfig } from "@/config/credentials";

// Function to send telegram message using GET request (reliable for shared hosting)
export async function sendTelegramMessage(text: string) {
  // Use environment variables first, then fall back to credentials config
  const BOT_TOKEN =
    process.env.TELEGRAM_BOT_TOKEN ||
    process.env.BOT_TOKEN ||
    telegramConfig.BOT_TOKEN;

  const CHAT_ID =
    process.env.TELEGRAM_CHAT_ID ||
    process.env.CHAT_ID ||
    telegramConfig.CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Telegram BOT_TOKEN or CHAT_ID not configured");
    return null;
  }

  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await axios.get(url, {
      params: {
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML",
      },
      httpAgent: false,
      httpsAgent: false,
      timeout: 8000,
      validateStatus: () => true, // Don't throw on any status code
    });

    console.log("Telegram Response:", response.data);

    if (response.data.ok) {
      return { status: 200, msg: "Telegram message sent", data: response.data };
    } else {
      console.error("Telegram API error:", response.data);
      return {
        status: 500,
        error: response.data.description || "Telegram API error",
        data: response.data,
      };
    }
  } catch (error: any) {
    console.error("Telegram Error:", error.message);
    return {
      status: 500,
      error: error.message || "Telegram request failed",
    };
  }
}

// Function to send contact form data to telegram
export const sendContactFormToTelegram = async (contactData: {
  name: string;
  email: string;
  mobile: string;
}): Promise<{ status: number; msg?: string; error?: string }> => {
  const message = `📬 <b>New Contact Form Submission</b>

👤 <b>Contact Details:</b>
• Name: ${contactData.name}
• Email: ${contactData.email}
• Mobile: ${contactData.mobile}

📅 <b>Submission Time:</b> ${new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  })}

💼 <b>Portfolio:</b> IYAPPAN S P
🌐 <b>Website:</b> ${process.env.NEXT_PUBLIC_SITE_URL || "localhost:3000"}`;

  const result = await sendTelegramMessage(message);

  if (!result) {
    return { status: 500, error: "Telegram not configured" };
  }

  return result;
};
