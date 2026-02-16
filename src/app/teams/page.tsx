import { getMongoDb } from '@/db';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Teams',
};

type TeamDto = {
    name: string;
    description?: string;
    members?: { name: string; role?: string; imageUrl?: string }[];
};

const SAMPLE_TEAMS: TeamDto[] = [
    {
        name: 'Core Team',
        description: 'Leads planning and execution of department initiatives.',
        members: [],
    },
];

export default async function TeamsPage() {
    let teams: TeamDto[] = SAMPLE_TEAMS;
    try {
        const db = await getMongoDb();
        const dbTeams = await db
            .collection<TeamDto>('teams')
            .find({}, { projection: { _id: 0 } })
            .sort({ name: 1 })
            .toArray();
        teams = dbTeams.length > 0 ? dbTeams : SAMPLE_TEAMS;
    } catch {
        teams = SAMPLE_TEAMS;
    }

    return (
        <main className="flex flex-col items-center gap-8 md:gap-16">
            <div className="flex justify-center">
                <h1 className="text-4xl font-black">Teams</h1>
            </div>
            <section className="w-full max-w-[62rem] border-4 border-black bg-white px-8 py-8 text-black md:px-12 md:py-12">
                <div className="space-y-6">
                    {teams.map((t) => (
                        <div key={t.name} className="space-y-2">
                            <h2 className="text-2xl font-bold">{t.name}</h2>
                            {t.description && <p>{t.description}</p>}
                            {t.members && t.members.length > 0 && (
                                <div className="space-y-1">
                                    {t.members.map((m) => (
                                        <div
                                            key={m.name}
                                            className="flex items-center justify-between gap-4"
                                        >
                                            <span className="font-semibold">{m.name}</span>
                                            <span className="text-sm opacity-80">
                                                {m.role ?? ''}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
