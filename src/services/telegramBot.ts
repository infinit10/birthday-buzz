import { Telegraf } from "telegraf";

interface Credentials {
    token: string;
}

interface MessageSuccess {
    success: Boolean;
}

export class TelegramMessaging {
    private telegramClient: Telegraf;

    constructor(creds: Credentials) {
        this.telegramClient = new Telegraf(creds.token);
    }

    /**
     * 
     * @param message Message to send
     * @param chat_id Chat ID between you and telegram bot
     * @returns success state of message sent
     */
    async sendMessage (message: string, chat_id: string): Promise<MessageSuccess> {
        try {
            await this.telegramClient.telegram.sendMessage(chat_id, message);
            return { success: true };
        } catch (err) {
            console.error('Error in sending message: ', err);
            return { success: false };
        }
    }
}