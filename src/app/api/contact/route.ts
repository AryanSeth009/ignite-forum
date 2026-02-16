import { getMongoDb } from '@/db';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    subject: z.string().min(1),
    message: z.string().min(1),
});

export async function POST(req: Request) {
    try {
        const json = await req.json();
        const parsed = contactSchema.safeParse(json);
        if (!parsed.success) {
            return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
        }

        const db = await getMongoDb();
        await db.collection('contact_messages').insertOne({
            ...parsed.data,
            createdAt: new Date().toISOString(),
            status: 'new',
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed to submit message' }, { status: 500 });
    }
}
