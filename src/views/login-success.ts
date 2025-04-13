/**
 * *********************************************************************************************************************************
 *  Login success (accessed via /login-success)                                                                                   *
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
            padding-top: 80px;
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

        .main-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        .code-container {
            display: flex;
            align-items: center;
            background-color: #f1f1f1;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 12px 16px;
            position: relative;
            font-size: 18px;
            word-break: break-word;
        }

        #code-text {
            flex-grow: 1;
            overflow-wrap: break-word;
        }

        .copy-icon {
            margin-left: 12px;
            cursor: pointer;
            display: inline-block;
        }

        .copy-icon img {
            width: 20px;
            height: 20px;
        }

        .hidden {
            display: none;
        }

        /* Toast styling */
        .toast {
            visibility: hidden;
            min-width: 200px;
            background-color: #007acc;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 12px 20px;
            position: fixed;
            z-index: 9999;
            left: 50%;
            bottom: 40px;
            transform: translateX(-50%);
            font-size: 16px;
            opacity: 0;
            transition: opacity 0.4s ease, visibility 0.4s;
        }

        .toast.show {
            visibility: visible;
            opacity: 1;
        }

        a,
        a:visited,
        a:hover,
        a:active {
            color: inherit;
        }

        header a {
            text-decoration: none;
            color: white;
            outline: none;
            border: none;
        }

        .home-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            background-color: #005a99;
            border-radius: 50%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            color: white;
            font-size: 24px;
            text-align: center;
            cursor: pointer;
            z-index: 1000;
            transition: transform 0.3s ease;
        }

        .home-button:hover {
            transform: scale(1);
        }

        .home-button img {
            width: 30px;
            height: 30px;
            display: block;
            margin: auto;
        }
    </style>
</head>

<body>

    <header
        style="display: flex; justify-content: space-between; align-items: center; padding: 16px 32px; background-color: #007acc; color: white; width: 100%; box-sizing: border-box;">
        <span style="flex: 1; text-align: left;">
            <a href="https://whatsapp-reminder.s-gopikrishna2k.workers.dev" target="_blank"
                style="text-decoration:none;">BirthdayBuzz</a>
        </span>

        <span>
            <a href="https://whatsapp-reminder.s-gopikrishna2k.workers.dev" class="home-button">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/home.png" alt="Home">
            </a>
        </span>
    </header>

    <div class="main-content">
        <h2>You're signed in!</h2>
        <p>Here is your authorization code:</p>

        <div class="code-container">
            <span id="code-text">Loading...</span>
            <span class="copy-icon" id="copy-icon" onclick="copyCode()">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/copy.png" alt="Copy">
            </span>
        </div>
    </div>

    <div class="toast" id="toast">Copied to clipboard!</div>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const authCode = urlParams.get('code');

        const codeText = document.getElementById('code-text');
        const copyIcon = document.getElementById('copy-icon');
        const toast = document.getElementById('toast');

        if (authCode) {
            codeText.textContent = authCode;
        } else {
            codeText.textContent = 'No code found';
            copyIcon.classList.add('hidden');
        }

        function copyCode() {
            if (!authCode) return;

            navigator.clipboard.writeText(authCode)
                .then(() => {
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 2000);
                })
                .catch(() => {
                    toast.textContent = 'Copy failed';
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                        toast.textContent = 'Copied to clipboard!';
                    }, 2000);
                });
        }
    </script>

</body>

</html>`