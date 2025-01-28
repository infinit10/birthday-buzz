import { google, calendar_v3 } from 'googleapis';
import { JWT, OAuth2Client } from 'google-auth-library';

interface CalendarEventDetails {
    id: string;
    summary: string;
    startTime: Date;
    endTime: Date;
}

interface Credentials {
    clientEmail: string;
    privateKey: string;
    clientId: string;
    clientSecret: string;
    refreshToken: string;
}

export class GoogleCalendarService {
    private oauth2Client: OAuth2Client;
    // private auth: JWT;
    private calendar: calendar_v3.Calendar;

    constructor(creds: Credentials) {
        this.oauth2Client = new OAuth2Client(
            creds.clientId,
            creds.clientSecret,
            'https://whatsapp-reminder.s-gopikrishna2k.workers.dev'
        );

        this.oauth2Client.setCredentials({ 
            refresh_token: creds.refreshToken 
        });
        
        // this.auth = new google.auth.JWT(
        //     creds.clientEmail,
        //     undefined,
        //     creds.privateKey,
        //     ['https://www.googleapis.com/auth/calendar']
        // )

        this.calendar = google.calendar({ version: 'v3', auth: this.oauth2Client });
    }

    async getTodaysEvents(): Promise<CalendarEventDetails[]> {
        const now = new Date();
        const startOfDay = new Date(now.setHours(0, 0, 0, 0));
        const endOfDay = new Date(now.setHours(23, 59, 59, 999));

        try {
            const response = await this.calendar.events.list({
                // auth: this.auth,
                calendarId: 's.gopikrishna2k@gmail.com',
                timeMin: startOfDay.toISOString(),
                timeMax: endOfDay.toISOString(),
                orderBy: 'startTime',
                singleEvents: true
            });

            return (response.data.items || [])
                .filter((event): event is calendar_v3.Schema$Event => !!event.id)
                .map(event => ({
                    id: event.id!,
                    summary: event.summary || 'Untitled Event',
                    startTime: new Date(event.start?.dateTime || event.start?.date || Date.now()),
                    endTime: new Date(event.end?.dateTime || event.end?.date || Date.now())
                }));
        } catch (error) {
            console.error('Error fetching calendar events:', error);
            return [];
        }
    }
}
