export async function sendBrevoMail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;
  
  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured in .env.local");
  }

  console.log("🔑 Brevo API Key present:", apiKey.substring(0, 20) + "...");
  console.log("📧 Sending to:", to);
  console.log("📝 Subject:", subject);

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: process.env.APP_NAME || "Portfolio",
        email: "no-reply@brevo.com", // FREE shared sender
      },
      to: [{ email: to }],
      subject,
      htmlContent: html,
      replyTo: replyTo ? { email: replyTo } : undefined,
    }),
  });

  const responseData = await res.json();
  console.log("📬 Brevo Response Status:", res.status);
  console.log("📬 Brevo Response Data:", JSON.stringify(responseData, null, 2));

  if (!res.ok) {
    throw new Error(`Brevo API error (${res.status}): ${JSON.stringify(responseData)}`);
  }

  return responseData;
}
