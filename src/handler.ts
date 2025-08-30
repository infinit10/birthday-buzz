import { TelegramMessaging } from './services/telegramBot';
import NotifProps from './interfaces/notification.interface';

interface ReminderData {
  id: number;
  name: string;
  birthday: string;
}

// import { GoogleCalendarService } from './services/googleCalendar';
// async function calendarEventFetchCode() {
//     const calendarClient = new GoogleCalendarService(
//         {
//             clientEmail: props.CLIENT_EMAIL,
//             privateKey: props.PRIVATE_KEY,
//             clientId: props.CLIENT_ID,
//             clientSecret: props.CLIENT_SECRET,
//             refreshToken: props.REFRESH_TOKEN
//         },
//         props.calendarId
//     );

//     const calendarEvents = await calendarClient.getTodaysEvents();

//     await Promise.all(calendarEvents.map((event) => {
//         const { summary } = event;
//         const messageString = `Reminder:\n\nToday is ${summary}. Reminding you as you're a very forgetful person\n\n~ BirthdayBuzz`

//         return messageClient.sendMessage(messageString, chatId);
//     }));
// }

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

    const dbInst: any = props.DB;

    const queryResponse = await dbInst.prepare("SELECT * FROM reminders").run();

    const reminderList: ReminderData[] = queryResponse.results;
    const currentMonth = new Date().getMonth() + 1; // returns zero-indexed month, hence adding one
    const currentDate = new Date().getDate();

    const toSendNotification = [];

    for (const reminder of reminderList) {
      const { birthday, name } = reminder;

      const [date, month] = birthday.split('-').map(Number);

      if (currentMonth === month && currentDate === date) {
        toSendNotification.push(name);
      }
    }

    await Promise.all(toSendNotification.map((name) => {
      const messageString = `Reminder:\n\nToday is ${name}'s birthday. Reminding you as you're a very forgetful person\n\n~ BirthdayBuzz`
      return messageClient.sendMessage(messageString, chatId);
    }));
  } catch (error) {
    console.error('Worker error: ', error);
  } finally {
    return Promise.resolve();
  }
}