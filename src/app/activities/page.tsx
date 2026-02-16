import { getMongoDb } from '@/db';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Activities',
};

type ActivityDto = {
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

export default async function ActivitiesPage() {
    let items: ActivityDto[] = SAMPLE_ACTIVITIES;
    try {
        const db = await getMongoDb();
        const activities = await db
            .collection<ActivityDto>('activities')
            .find({}, { projection: { _id: 0 } })
            .sort({ date: -1 })
            .toArray();
        items = activities.length > 0 ? activities : SAMPLE_ACTIVITIES;
    } catch {
        items = SAMPLE_ACTIVITIES;
    }

    return (
        <main className="flex flex-col items-center gap-8 md:gap-16">
            <div className="flex justify-center">
                <h1 className="text-4xl font-black">Activities</h1>
            </div>
            <section className="w-full max-w-[62rem] border-4 border-black bg-white px-8 py-8 text-black md:px-12 md:py-12">
                <div className="space-y-6">
                    {items.map((a) => (
                        <div key={a.title} className="space-y-1">
                            <h2 className="text-2xl font-bold">{a.title}</h2>
                            <p>{a.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
