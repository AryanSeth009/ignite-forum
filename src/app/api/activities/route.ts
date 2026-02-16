import { getMongoDb } from '@/db';
import { NextResponse } from 'next/server';

export type ActivityDto = {
    title: string;
    description: string;
    date?: string;
    tags?: string[];
};

const SAMPLE_ACTIVITIES: ActivityDto[] = [
    {
        title: 'Workshop Series',
        description: 'Hands-on technical workshops conducted by the department team.',
        date: new Date().toISOString(),
        tags: ['workshop'],
    },
];

export async function GET() {
    try {
        const db = await getMongoDb();
        const activities = await db
            .collection<ActivityDto>('activities')
            .find({}, { projection: { _id: 0 } })
            .sort({ date: -1 })
            .toArray();

        return NextResponse.json(activities.length > 0 ? activities : SAMPLE_ACTIVITIES);
    } catch {
        return NextResponse.json(SAMPLE_ACTIVITIES);
    }
}
