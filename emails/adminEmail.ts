export const adminEmailTemplate = ({
  name,
  email,
  mobile,
}: {
  name: string;
  email: string;
  mobile: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      background: #f3f4f6;
      font-family: Arial, sans-serif;
      padding: 24px;
      margin: 0;
    }
    .box {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      border-radius: 10px;
      padding: 24px;
      border-left: 6px solid #6366f1;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    h3 {
      margin-top: 0;
      color: #111827;
      font-size: 20px;
    }
    p {
      color: #374151;
      line-height: 1.6;
      margin: 8px 0;
    }
    .label {
      font-weight: bold;
      color: #111827;
    }
    .info-block {
      background: #f9fafb;
      padding: 16px;
      border-radius: 6px;
      margin: 16px 0;
    }
    .action-note {
      margin-top: 20px;
      padding: 12px;
      background: #fef3c7;
      border-radius: 6px;
      font-size: 14px;
      color: #92400e;
    }
    .timestamp {
      font-size: 12px;
      color: #6b7280;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h3>📩 New Contact Form Submission</h3>

    <div class="info-block">
      <p><span class="label">Name:</span> ${name}</p>
      <p><span class="label">Email:</span> <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></p>
      <p><span class="label">Mobile:</span> <a href="tel:${mobile}" style="color: #6366f1; text-decoration: none;">${mobile}</a></p>
    </div>

    <div class="action-note">
      <strong>⚡ Action Required:</strong> Review and respond to this connection request when ready.
    </div>

    <p class="timestamp">
      📅 Received: ${new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
      })}
    </p>
  </div>
</body>
</html>
`;
