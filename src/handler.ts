import { GoogleCalendarService } from './services/googleCalendar';
import { TelegramMessaging } from './services/telegramBot';

import NotifProps from './interfaces/notification.interface';

/**
 * This method sends notification to the said chat ID in telegram
 * 
 * @param props Properties like API token, chat thread ID, google service account information
 * @returns 
 */
export async function sendNotification(props: NotifProps): Promise<void> {
    try {
        const messageClient = new TelegramMessaging({ token: props.TELEGRAM_API_TOKEN });
        const chatId = props.TELEGRAM_CHAT_ID;

        const calendarClient = new GoogleCalendarService(
            {
                clientEmail: props.CLIENT_EMAIL,
                privateKey: props.PRIVATE_KEY,
                clientId: props.CLIENT_ID,
                clientSecret: props.CLIENT_SECRET,
                refreshToken: props.REFRESH_TOKEN
            },
            props.calendarId
        );

        const calendarEvents = await calendarClient.getTodaysEvents();

        await Promise.all(calendarEvents.map((event) => {
            const { summary } = event;
            const messageString = `Reminder:\n\nToday is ${summary}. Reminding you as you're a very forgetful person\n\n~ BirthdayBuzz`

            return messageClient.sendMessage(messageString, chatId);
        }));
    } catch (error) {
        console.error('Worker error: ', error);
    } finally {
        return Promise.resolve();
    }
}