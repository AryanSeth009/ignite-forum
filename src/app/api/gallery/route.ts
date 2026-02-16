import { getMongoDb } from '@/db';
import { NextResponse } from 'next/server';

export type GalleryDto = {
    eventName: string;
    eventDate: { year: number; month: number; day: number };
    images: { url: string; width: number; height: number }[];
};

const SAMPLE_GALLERIES: GalleryDto[] = [
    {
        eventName: 'Department Highlights',
        eventDate: { year: 2026, month: 2, day: 15 },
        images: [],
    },
];

export async function GET() {
    try {
        const db = await getMongoDb();
        const galleries = await db
            .collection<GalleryDto>('gallery')
            .find({}, { projection: { _id: 0 } })
            .toArray();

        return NextResponse.json(galleries.length > 0 ? galleries : SAMPLE_GALLERIES);
    } catch {
        return NextResponse.json(SAMPLE_GALLERIES);
    }
}
