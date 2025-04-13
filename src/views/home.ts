/**
 * *********************************************************************************************************************************
 *  Home Page (root path)                                                                                                          *
 *  Cloudflare does not have support for bundling html content in its runtime, hence we store it as a string literal in a ts file  *
 *  which can then be imported and passed in directly to the Response context                                                      *
 * *********************************************************************************************************************************
 */

export default `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BirthdayBuzz</title>
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
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        header img {
            width: 24px;
            height: 24px;
            margin-right: 8px;
        }

        .container {
            margin-top: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .circle-container {
            position: relative;
            width: 320px;
            height: 320px;
            margin: 40px auto;
        }

        .circle-container img {
            position: absolute;
            width: 60px;
            height: 60px;
            background-color: white;
            border-radius: 50%;
            padding: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
            object-fit: contain;
        }

        .telegram {
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
        }

        .google-calendar {
            bottom: 10%;
            left: 0%;
            transform: translate(0, 0);
        }

        .cloudflare {
            bottom: 10%;
            right: 0%;
            transform: translate(0, 0);
        }

        svg.connector {
            position: absolute;
            top: 0;
            left: 0;
            width: 320px;
            height: 320px;
            pointer-events: none;
        }

        .description {
            margin-top: 20px;
            text-align: center;
            font-size: 1.1em;
            max-width: 600px;
        }

        footer {
            text-align: center;
            margin-top: 60px;
            font-size: 0.9em;
            color: #666;
        }

        .github {
            padding-left: 0.5em;
        }

        .g_id_signin {
            padding-right: 0.5em;
        }

        a,
        a:visited,
        a:hover,
        a:active {
            color: inherit;
        }

        .google-btn {
            display: inline-flex;
            align-items: center;
            padding: 10px 15px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: white;
            cursor: pointer;
            font-family: Arial, sans-serif;
        }

        .google-logo {
            height: 20px;
            margin-right: 10px;
        }

        .google-btn:hover {
            background-color: #f7f7f7;
        }
    </style>
</head>

<body>

    <!-- Header with Git logo and repo link -->
    <header
        style="display: flex; justify-content: space-between; align-items: center; padding: 16px 32px; background-color: #007acc; color: white; width: 100%; box-sizing: border-box;">
        <!-- Left-aligned name -->
        <span style="flex: 1; text-align: left;">
            <a href="https://whatsapp-reminder.s-gopikrishna2k.workers.dev" target="_blank"
                style="text-decoration:none;">BirthdayBuzz</a>
        </span>

        <button class="google-btn" onclick="signInWithGoogle()">
            <img class="google-logo" src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo">
            Sign in with Google
        </button>

        <script>
            function signInWithGoogle() {
                const params = new URLSearchParams({
                    client_id: '377391212877-8bnp9629l1kdb1v5ibtf53hvpprnct5u.apps.googleusercontent.com',
                    redirect_uri: 'https://whatsapp-reminder.s-gopikrishna2k.workers.dev/login-success',
                    response_type: 'code',
                    scope: 'https://www.googleapis.com/auth/calendar',
                    access_type: 'offline',
                });

                const stringifiedParams = params.toString();

                const url = 'https://accounts.google.com/o/oauth2/auth?' + stringifiedParams;

                console.log('gouath url', url);
                window.open(url, '_blank');
            }
        </script>

        <!-- Git logo right-aligned -->
        <div class="github">
            <a href="https://github.com/infinit10/birthday-buzz" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Git Logo"
                    style="width: 30px; height: 30px;" />
            </a>
        </div>
    </header>



    <div class="container">
        <div class="circle-container">
            <!-- SVG curved connections -->
            <svg class="connector">
                <path d="M160 30 C80 90, 30 180, 50 250" stroke="#007acc" stroke-width="2" fill="none" />
                <path d="M50 250 C160 280, 270 280, 270 250" stroke="#007acc" stroke-width="2" fill="none" />
                <path d="M270 250 C290 180, 240 90, 160 30" stroke="#007acc" stroke-width="2" fill="none" />
            </svg>

            <!-- Colored Logos -->
            <a href="https://telegram.org" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram"
                    class="telegram" />
            </a>

            <a href="https://calendar.google.com" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
                    alt="Google Calendar" class="google-calendar" />
            </a>

            <a href="https://workers.cloudflare.com/">
                <img src="https://www.svgrepo.com/show/349320/cloudflare.svg" alt="Cloudflare" class="cloudflare" />
            </a>
        </div>

        <div class="description">
            <p>This project is designed to help you receive your calendar events for the day, sent directly to your
                Telegram
                bot at the time you want it to!</p>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 BirthdayBuzz. All rights reserved.</p>
    </footer>

</body>

</html>`;