# Telegram Bot Setup Instructions

Follow these steps to get your Telegram Bot Token and Chat ID:

## Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat and send `/newbot`
3. Choose a name for your bot (e.g., "Portfolio Contact Bot")
4. Choose a username (must end with 'bot', e.g., "portfolio_contact_bot")
5. Copy the **Bot Token** that BotFather sends you
   - Format: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

## Step 2: Get Your Chat ID

### Method 1 - Using @userinfobot:
1. Search for `@userinfobot` in Telegram
2. Start a chat with it
3. The bot will send you your **Chat ID** (a number like `123456789`)

### Method 2 - Manual Way:
1. Start a chat with your newly created bot
2. Send any message to it (e.g., "Hello")
3. Open this URL in your browser (replace `YOUR_BOT_TOKEN`):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for `"chat":{"id":123456789` in the response
5. The number is your **Chat ID**

## Step 3: Test Your Bot

Test with this URL (replace placeholders):
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage?chat_id=<YOUR_CHAT_ID>&text=Test
```

You should receive a "Test" message from your bot!

## Step 4: Add to .env.local

Create a `.env.local` file in your project root with:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace `your_bot_token_here` and `your_chat_id_here` with your actual values.

## Step 5: Install Dependencies

Run:
```bash
npm install axios
```

## Step 6: Restart Your Dev Server

Stop your dev server (Ctrl+C) and restart:
```bash
npm run dev
```

---

## Testing

1. Fill out the contact form on your portfolio
2. Click "Connect"
3. You should receive a message in your Telegram chat with the contact details!

## Troubleshooting

- **No message received?** Check your console for errors
- **401 Unauthorized?** Your Bot Token is incorrect
- **400 Bad Request?** Your Chat ID is incorrect
- **Chat not found?** Make sure you've sent at least one message to your bot first
