import { NextRequest, NextResponse } from "next/server";
import { sendContactFormToTelegram } from "@/lib/telegram";
import { sendBrevoMail } from "@/lib/brevoMail";
import { clientEmailTemplate } from "@/emails/clientEmail";
import { adminEmailTemplate } from "@/emails/adminEmail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, mobile } = body;

    // Validate required fields
    if (!name || !email || !mobile) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let emailSuccess = false;
    let telegramSuccess = false;
    const errors: string[] = [];

    // 1️⃣ Send client confirmation email
    try {
      console.log(`📧 Sending client confirmation to: ${email}`);
      await sendBrevoMail({
        to: email,
        subject: "We received your message ✅",
        html: clientEmailTemplate({ name, mobile }),
      });
      console.log("✅ Client email sent successfully");
      emailSuccess = true;
    } catch (emailError: any) {
      console.error("❌ Client email error:", emailError.message);
      errors.push(`Client email failed: ${emailError.message}`);
    }

    // 2️⃣ Send admin notification email
    try {
      const adminEmail = process.env.ADMIN_EMAIL || "iyappansanthoosh27032004@gmail.com";
      console.log(`📧 Sending admin notification to: ${adminEmail}`);
      await sendBrevoMail({
        to: adminEmail,
        subject: `📩 New Contact: ${name}`,
        html: adminEmailTemplate({ name, email, mobile }),
        replyTo: email, // Reply goes to client
      });
      console.log("✅ Admin email sent successfully");
      emailSuccess = true;
    } catch (emailError: any) {
      console.error("❌ Admin email error:", emailError.message);
      errors.push(`Admin email failed: ${emailError.message}`);
    }

    // 3️⃣ Send to Telegram (backup notification)
    try {
      const telegramResult = await sendContactFormToTelegram({
        name,
        email,
        mobile,
      });

      if (telegramResult.status === 200) {
        console.log("✅ Telegram notification sent successfully");
        telegramSuccess = true;
      } else {
        console.error("❌ Telegram error:", telegramResult.error);
        errors.push(`Telegram failed: ${telegramResult.error}`);
      }
    } catch (telegramError: any) {
      console.error("❌ Telegram error:", telegramError.message);
      errors.push(`Telegram failed: ${telegramError.message}`);
    }

    // Return success if at least one notification method worked
    if (emailSuccess || telegramSuccess) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
        details: {
          email: emailSuccess,
          telegram: telegramSuccess,
          warnings: errors.length > 0 ? errors : undefined,
        },
      });
    } else {
      return NextResponse.json(
        {
          error: "Failed to send notifications",
          details: errors,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
