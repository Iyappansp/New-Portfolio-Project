# Brevo Email Setup Guide (FREE - 300 emails/day)

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create Brevo Account

1. **Go to**: https://app.brevo.com/account/register
2. **Sign up for FREE** (no credit card needed)
3. **Verify your email** address

### Step 2: Get Your API Key

1. **Login to Brevo**: https://app.brevo.com
2. **Click your name** (top right) → **API Keys**
3. **Create a new API Key**:
   - Name: "Portfolio Contact Form"
   - Click **Generate**
4. **Copy the API key** (starts with `xkeysib-...`)
   - ⚠️ **Save it immediately** - you can't see it again!

### Step 3: Update Your `.env.local`

**Remove old Resend variables** and add these:

```env
# Brevo Email Configuration
BREVO_API_KEY=xkeysib-your_api_key_here
ADMIN_EMAIL=iyappansanthoosh27032004@gmail.com
APP_NAME=IYAPPAN S P Portfolio

# Keep Telegram (backup)  
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

**Important:**
- No quotes around values
- Replace `xkeysib-your_api_key_here` with your actual key
- Save the file

### Step 4: Restart Dev Server

```bash
# Stop current server (Ctrl + C)
npm run dev
```

---

## ✅ **What You Get with Brevo**

### Benefits:
- ✅ **300 emails per day** (FREE forever)
- ✅ **Send to ANY email address** (no domain verification needed!)
- ✅ **Client confirmation emails work**
- ✅ **Admin notification emails work**
- ✅ **No credit card required**
- ✅ **Works on Vercel/any host**
- ✅ **₹0 cost**

### Email Flow:
1. **Visitor fills form** with their email (hr@company.com)
2. **Client email** → Sent to visitor ✅
3. **Admin email** → Sent to you (iyappansanthoosh27032004@gmail.com) ✅
4. **Telegram** → Backup notification ✅

---

## 🧪 Testing

1. **Fill out your contact form** with any email address
2. **Check visitor's inbox**: They should receive "We received your message ✅"
3. **Check your inbox**: You should receive "📩 New Contact: [Name]"
4. **Check Telegram**: You should receive notification
5. **Click Reply** in admin email → Goes directly to visitor's email

---

## 📊 Brevo Dashboard

Monitor your emails: https://app.brevo.com/statistics/email

You can see:
- Emails sent
- Delivery rate
- Opens/clicks
- Daily quota usage

---

## 🔧 Optional: Add Your Own Domain

**For production** (appears more professional):

1. **Go to**: https://app.brevo.com/senders/domain
2. **Add your domain** (e.g., iyappansp.dev)
3. **Add DNS records** (they provide specific values)
4. **Verify**
5. **Update `.env.local`**:
   ```env
   BREVO_SENDER_EMAIL=noreply@yourdomain.com
   ```
6. **Update** `lib/brevoMail.ts`:
   ```typescript
   sender: {
     name: process.env.APP_NAME || "Portfolio",
     email: process.env.BREVO_SENDER_EMAIL || "no-reply@brevo.com",
   },
   ```

**But this is optional!** The default `no-reply@brevo.com` works perfectly.

---

## 🎉 Comparison: Resend vs Brevo

| Feature | Resend (Old) | Brevo (New) |
|---------|--------------|-------------|
| Free tier | 100/day | 300/day |
| Domain required | ✅ Yes | ❌ NO! |
| Client emails | ❌ Failed | ✅ Works! |
| Setup time | 10+ min | 5 min |
| Cost | Free | Free |

---

## 🐛 Troubleshooting

### "Invalid API key"
- Check your `.env.local` for typos
- Make sure key starts with `xkeysib-`
- No quotes around the value

### "Failed to send email"
- Check Brevo dashboard for quota
- Make sure email address is valid
- Check console logs for specific error

### Emails going to spam
- Normal for first few emails
- Gets better over time
- Add domain (optional) to improve

---

## 📞 Resources

- **Brevo Dashboard**: https://app.brevo.com
- **API Keys**: https://app.brevo.com/settings/keys/api
- **Documentation**: https://developers.brevo.com
- **Support**: https://help.brevo.com

---

Your contact form now has **professional email delivery** with **zero cost**! 🚀
