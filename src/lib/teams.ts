import { getMongoDb } from '@/db';

export interface TeamMember {
    name: string;
    role: string;
    image: string; // Cloudinary URL
}

export interface TeamData {
    id: string;
    name: string;
    description: string;
    slug: string;
    head: TeamMember;
    members: TeamMember[];
}

export interface President {
    name: string;
    role: string;
    image: string; // Cloudinary URL
}

/**
 * Fetches the specific document for the President from the 'leadership' collection. Assumes there
 * is a document with { type: 'president' } or similar identifier, or simply the single document in
 * the collection if it's dedicated. For this implementation, we will look for a document with
 * specific role or just the first one. Let's assume a 'leadership' collection where we can find the
 * president.
 */
export async function getPresident(): Promise<President | null> {
    const db = await getMongoDb();
    // Adjust the query as needed based on how you store the president.
    // For now, fetching the document where role is 'President'.
    const president = await db.collection('leadership').findOne<President>({ role: 'President' });

    if (!president) return null;

    return {
        name: president.name,
        role: president.role,
        image: president.image,
    };
}

/** Fetches all team documents from the 'teams' collection. */
export async function getTeams(): Promise<TeamData[]> {
    const db = await getMongoDb();
    // Fetch all teams, sorted by order if you have an 'order' field, or just as is.
    // We map the _id to string transformation if necessary, but TeamData id is 'media', etc.
    const teams = await db.collection('teams').find<TeamData>({}).toArray();

    // Ensure the data matches the interface, remove internal MongoDB _id if needed
    return teams.map((team) => ({
        id: team.id,
        name: team.name,
        description: team.description,
        slug: team.slug,
        head: team.head,
        members: team.members,
    }));
}
