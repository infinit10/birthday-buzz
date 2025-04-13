/**
 * *********************************************************************************************************************************
 *  Privacy Policy Page (accessed via /privacy-policy)                                                                             *
 *  Cloudflare does not have support for bundling html content in its runtime, hence we store it as a string literal in a ts file  *
 *  which can then be imported and passed in directly to the Response context                                                      *
 * *********************************************************************************************************************************
 */

export default `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Privacy Policy - BirthdayBuzz</title>
  <style>
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: #eaf6ff;
      color: #333;
    }

    header {
      background-color: #007acc;
      color: white;
      padding: 16px 32px;
      font-size: 1.5em;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .container {
      margin: 100px auto 40px;
      padding: 0 32px;
      max-width: 800px;
    }

    h1,
    h2 {
      color: #005b99;
    }

    h1 {
      margin-top: 0;
    }

    ul {
      padding-left: 20px;
    }

    a {
      color: #005b99;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    footer {
      margin-top: 60px;
      font-size: 0.9em;
      text-align: center;
      color: #666;
    }
  </style>
</head>

<body>

  <header>
    Privacy Policy
  </header>

  <div class="container">
    <h1>Privacy Policy</h1>
    <p><strong>Last updated:</strong> April 13, 2025</p>

    <p><strong>BirthdayBuzz</strong> is a lightweight application that connects with your Google Calendar to fetch
      events and sends them to your configured Telegram bot. We are committed to protecting your privacy and ensuring
      that your data remains secure.</p>

    <h2>No Data Storage</h2>
    <p>BirthdayBuzz does not store, log, or share any data. All operations are performed in-memory and data is processed
      temporarily only for the purpose of fetching calendar events and sending them via Telegram.</p>

    <h2>User-Managed Cloudflare Worker</h2>
    <p>The Cloudflare Worker that powers BirthdayBuzz is entirely managed by you, the individual user. This means:</p>
    <ul>
      <li>You deploy and control the worker on your own Cloudflare account.</li>
      <li>All credentials, tokens, and configurations are handled within your private environment.</li>
    </ul>

    <h2>What We Access</h2>
    <p>BirthdayBuzz accesses only the following information:</p>
    <ul>
      <li>Calendar event data for the current day from your Google Calendar.</li>
      <li>Your Telegram user ID (used only for sending messages via the Telegram Bot API).</li>
    </ul>

    <h2>Authentication & Security</h2>
    <p>BirthdayBuzz uses OAuth 2.0 to securely authenticate with your Google account. Your access tokens are stored
      securely within your Cloudflare Worker environment and are never shared or exposed publicly.</p>

    <h2>Third-Party Services</h2>
    <p>BirthdayBuzz relies on the following third-party services:</p>
    <ul>
      <li>Google Calendar API (to access your calendar events).</li>
      <li>Telegram Bot API (to send event reminders to your bot).</li>
    </ul>

    <h2>Your Consent</h2>
    <p>By using BirthdayBuzz, you consent to the access and use of your Google Calendar and Telegram Bot solely for the
      purposes described above. You retain full control over the deployment and operation of the Cloudflare Worker.</p>

    <h2>Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. Significant changes will be communicated via the Telegram
      bot or the hosted site.</p>

    <h2>Contact</h2>
    <p>If you have any questions or concerns about this Privacy Policy, please contact us through the support channel
      mentioned in the bot or this page.</p>

    <footer>
      &copy; 2025 BirthdayBuzz. All rights reserved.
    </footer>
  </div>

</body>

</html>`