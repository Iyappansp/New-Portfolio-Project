# Resend Email Setup Guide

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get Your Resend API Key

1. **Sign up for Resend**: Go to [https://resend.com/signup](https://resend.com/signup)
2. **Verify your email** address
3. **Go to API Keys**: Navigate to [https://resend.com/api-keys](https://resend.com/api-keys)
4. **Create new API key**: Click "Create API Key"
5. **Copy the key**: It looks like `re_123abc456def...`
   - ⚠️ **Save it immediately** - you can't see it again!

### Step 2: Add to Environment Variables

Open your `.env.local` file and add these lines:

```env
# Resend Email Configuration
RESEND_API_KEY=re_your_api_key_here
EMAIL_FROM=onboarding@resend.dev
ADMIN_EMAIL=iyappansanthoosh27032004@gmail.com

# Keep your existing Telegram config (as backup)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

**For Testing:**
- Use `EMAIL_FROM=onboarding@resend.dev` (Resend's test sender)
- Use your real email as `ADMIN_EMAIL` to receive notifications

**For Production:**
- You'll need to verify your own domain
- Then use `EMAIL_FROM=noreply@yourdomain.com`

### Step 3: Restart Your Dev Server

```bash
# Stop the current server (Ctrl + C)
npm run dev
```

---

## 🧪 Testing Your Setup

### Test the Contact Form

1. **Navigate to Contact section**: http://localhost:3000/#contact
2. **Fill out the form**:
   - Name: "Test User"
   - Email: **YOUR REAL EMAIL** (to receive client confirmation)
   - Mobile: "+91 9876543210"
3. **Click "Connect"**
4. **Wait for success message**

### What You Should Receive

**✅ Client Email** (sent to the email you entered in the form):
- **Subject**: "We received your message ✅"
- **Design**: Premium gradient header, professional layout
- **Content**: Personalized greeting, your contact details

**✅ Admin Email** (sent to iyappansanthoosh27032004@gmail.com):
- **Subject**: "📩 New Contact: Test User"
- **Design**: Clean, actionable notification
- **Content**: Name, email, mobile with clickable links

**✅ Telegram Message** (backup notification):
- Formatted message with all contact details

---

## 🎨 Email Templates

### Client Email Features
- 🎨 Premium gradient header (purple/indigo)
- 💼 Professional branding
- 📱 Responsive design
- ✅ Automated confirmation

### Admin Email Features  
- 📊 Clean, scannable layout
- 🔗 Clickable email & phone links
- ⚡ Action reminder
- 📅 Timestamp in Indian timezone

---

## 🔧 Configuration Options

### Using Your Own Domain

1. **Add domain in Resend**: https://resend.com/domains
2. **Add DNS records** (they'll give you the records)
3. **Verify domain** (usually takes 5-10 minutes)
4. **Update `.env.local`**:
   ```env
   EMAIL_FROM=noreply@yourdomain.com
   ```

### Customizing Email Templates

**Client Email**: `emails/clientEmail.ts`
- Change colors, branding, text
- Modify gradient colors in the header
- Add your logo

**Admin Email**: `emails/adminEmail.ts`
- Customize notification format
- Add more fields
- Change action notes

---

## 📊 How It Works

```
User submits form
    ↓
API: /api/contact
    ↓
    ├─→ Resend → Client Email ✅
    ├─→ Resend → Admin Email ✅
    └─→ Telegram → Backup Notification ✅
    ↓
Success (if at least 1 works)
```

**Resilience**: If Resend fails, Telegram still works (and vice versa)

---

## 🐛 Troubleshooting

### "Validation error" from Resend

**Problem**: Invalid sender email
**Solution**: Make sure you're using `onboarding@resend.dev` for testing

### No emails received

**Check**:
1. Is `RESEND_API_KEY` set correctly in `.env.local`?
2. Did you restart the dev server after adding env vars?
3. Check your spam folder
4. Look at terminal logs for error messages

### Only Telegram works, no emails

**Problem**: Resend API key issue
**Solution**: 
- Verify API key is correct
- Check console for specific error
- Make sure you have credits (free tier = 100 emails/day)

### Emails go to spam

**For testing**: This is normal with `onboarding@resend.dev`
**For production**: Verify your domain and set up SPF/DKIM

---

## 📈 Resend Free Tier Limits

- ✅ **100 emails per day** (free)
- ✅ **No credit card required**
- ✅ **Works on Vercel**
- ✅ **Enterprise-grade infrastructure**

For your portfolio, this is more than enough!

---

## 🎯 Next Steps

1. **Test the form** with your real email
2. **Customize email templates** with your branding
3. **Add domain** for production
4. **Deploy to Vercel** (Resend works perfectly!)

---

## 📞 Support

- **Resend Docs**: https://resend.com/docs
- **API Reference**: https://resend.com/docs/api-reference
- **Status Page**: https://resend.statuspage.io

Your contact form now has **enterprise-grade email delivery** with **premium templates**! 🚀
