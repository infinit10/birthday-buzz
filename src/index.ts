import Env from './interfaces/env.interface';
import { sendNotification } from './handler';

export default {
	async fetch(request: Request, env: Env, ctx) {
		return new Response("Hello from worker!");
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
			REFRESH_TOKEN: env.REFRESH_TOKEN
		};

		ctx.waitUntil(sendNotification(props));
	},
} satisfies ExportedHandler<Env>;
