import { getMongoDb } from '@/db';
import { NextResponse } from 'next/server';

type Month =
    | 'JAN'
    | 'FEB'
    | 'MAR'
    | 'APR'
    | 'MAY'
    | 'JUN'
    | 'JUL'
    | 'AUG'
    | 'SEP'
    | 'OCT'
    | 'NOV'
    | 'DEC';

export type EventDto = {
    title: string;
    date: { year: number; month: Month; day: number; timestamp: string };
    time: string;
    location: string;
    details: string;
    image: string;
};

const SAMPLE_EVENTS: EventDto[] = [
    {
        title: 'Welcome Session',
        date: {
            year: 2026,
            month: 'FEB',
            day: 15,
            timestamp: new Date('2026-02-15T10:00:00Z').toISOString(),
        },
        time: '10:00 AM - 12:00 PM',
        location: 'Main Auditorium',
        details: 'Kick-off session introducing the department activities and roadmap.',
        image: '/images/events/upcoming-event.jpg',
    },
];

export async function GET() {
    try {
        const db = await getMongoDb();
        const events = await db
            .collection<EventDto>('events')
            .find({}, { projection: { _id: 0 } })
            .sort({ 'date.timestamp': 1 })
            .toArray();

        return NextResponse.json(events.length > 0 ? events : SAMPLE_EVENTS);
    } catch {
        return NextResponse.json(SAMPLE_EVENTS);
    }
}
