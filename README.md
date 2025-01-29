# BirthdayBuzz

**BirthdayBuzz** is a Cloudflare Worker that runs at scheduled intervals to fetch calendar events from Google Calendar for the current day and sends them to a configured Telegram bot.

## Features
- Periodically fetches events from Google Calendar.
- Sends notifications to a Telegram bot using the Telegraf library.
- Utilizes Google SDKs for seamless calendar integration.

## Tech Stack
- **Cloudflare Workers**: Serverless execution environment.
- **Telegraf.js**: Telegram bot framework.
- **Google Calendar API**: Fetches daily events.
- **Node.js**: Runtime for executing the worker.

## Prerequisites
### Google Cloud Setup
1. Enable the [Google Calendar API](https://console.cloud.google.com/apis/library/calendar-json.googleapis.com).
2. Configure an OAuth consent screen in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials/consent).
3. Generate OAuth 2.0 credentials for authentication.

### Telegram Bot Setup
1. Create a Telegram bot using [@BotFather](https://t.me/BotFather) and obtain the bot token.

### Cloudflare Worker Setup
1. Deploy the worker to Cloudflare.

## Installation & Deployment

### Clone the Repository
```sh
git clone https://github.com/your-repo/birthdaybuzz.git
cd birthdaybuzz
```

### Install Dependencies
```sh
npm install
```

### Set Up Environment Variables
Create a `.env` file or configure Cloudflare KV:
```sh
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REFRESH_TOKEN=your_google_refresh_token
```

### Deploy the Worker
```sh
wrangler publish
```

## Usage
- The worker will automatically fetch events and send messages at scheduled intervals.
- You can configure scheduling using Cloudflare Cron Triggers.

---
Feel free to contribute or raise issues for improvements!

