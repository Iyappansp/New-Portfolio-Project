export const clientEmailTemplate = ({
  name,
  mobile,
}: {
  name: string;
  mobile: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      background: #f4f6f8;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 30px;
      margin: 0;
    }
    .card {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    }
    .header {
      background: linear-gradient(135deg, #6366f1, #4f46e5);
      color: white;
      padding: 28px;
      text-align: center;
    }
    .header h2 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }
    .content {
      padding: 32px;
      color: #1f2937;
      line-height: 1.6;
    }
    .content p {
      margin: 0 0 16px 0;
    }
    .content strong {
      color: #111827;
    }
    .highlight {
      background: #f3f4f6;
      border-left: 4px solid #6366f1;
      padding: 16px;
      margin: 20px 0;
      border-radius: 6px;
    }
    .footer {
      padding: 20px;
      text-align: center;
      font-size: 13px;
      color: #6b7280;
      background: #f9fafb;
    }
    .emoji {
      font-size: 28px;
      display: inline-block;
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="emoji">🚀</div>
      <h2>We've got your message!</h2>
    </div>
    <div class="content">
      <p>Hi <strong>${name}</strong>,</p>

      <p>
        Thanks for reaching out! I've received your connection request and I'm excited to hear from you.
      </p>

      <div class="highlight">
        <p><strong>Your contact details:</strong></p>
        <p>📱 Mobile: ${mobile}</p>
      </div>

      <p>
        I'll get back to you shortly to discuss how we can work together. In the meantime, feel free to check out my portfolio and recent projects.
      </p>

      <p style="margin-top: 24px;">
        Best regards,<br/>
        <strong>IYAPPAN S P</strong><br/>
        Full Stack Developer
      </p>
    </div>
    <div class="footer">
      This is an automated confirmation. No action needed.
    </div>
  </div>
</body>
</html>
`;
