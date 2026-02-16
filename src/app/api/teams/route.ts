import { getMongoDb } from '@/db';
import { NextResponse } from 'next/server';

export type TeamDto = {
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

export async function GET() {
    try {
        const db = await getMongoDb();
        const teams = await db
            .collection<TeamDto>('teams')
            .find({}, { projection: { _id: 0 } })
            .sort({ name: 1 })
            .toArray();

        return NextResponse.json(teams.length > 0 ? teams : SAMPLE_TEAMS);
    } catch {
        return NextResponse.json(SAMPLE_TEAMS);
    }
}
