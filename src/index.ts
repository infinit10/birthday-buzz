import Env from './interfaces/env.interface';
import { sendNotification } from './handler';

import views from './views/index';

export default {
	async fetch(request: Request, env: Env, ctx) {
		const url: URL = new URL(request.url);
		if (url.pathname === '/') {
			return new Response(views.home, {
				headers: {
					'content-type': 'text/html;charset=UTF-8',
				},
			});
		} else if (url.pathname === '/privacy-policy') {
			return new Response(views.privacyPolicy, {
				headers: {
					'content-type': 'text/html;charset=UTF-8',
				},
			});
		} else if (url.pathname === '/login-success') {
			return new Response(views.loginSuccess, {
				headers: {
					'content-type': 'text/html;charset=UTF-8',
				},
			});
		}

		return new Response('Hello from worker!');
	},

	async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext) {
		const base64EncodedKey = env.BASE64_SERVICE_ACCOUNT;
		const { client_email, private_key } = JSON.parse(
			Buffer.from(
				base64EncodedKey,
				'base64'
			).toString()
		);

		const props = {
			CLIENT_EMAIL: client_email,
			PRIVATE_KEY: private_key,
			TELEGRAM_CHAT_ID: env.TELEGRAM_CHAT_ID,
			TELEGRAM_API_TOKEN: env.TELEGRAM_API_TOKEN,
			CLIENT_ID: env.CLIENT_ID,
			CLIENT_SECRET: env.CLIENT_SECRET,
			REFRESH_TOKEN: env.REFRESH_TOKEN,
			calendarId: env.CALENDAR_ID
		};

		ctx.waitUntil(sendNotification(props));
	},
} satisfies ExportedHandler<Env>;
