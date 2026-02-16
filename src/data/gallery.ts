import { fetcher } from '@/lib/fetcher';

export type Gallery = {
    eventName: string;
    eventDate: { year: number; month: number; day: number };
    images: {
        url: string;
        width: number;
        height: number;
    }[];
};

// API response format from PayloadCMS
export type PayloadGallery = {
    id: string;
    eventName: string;
    eventDate: { year: number; month: number; day: number };
    images?: {
        id: string;
        alt?: string;
        filename: string;
        mimeType: string;
        filesize: number;
        width: number;
        height: number;
        focalX?: number;
        focalY?: number;
        createdAt: string;
        updatedAt: string;
        url: string;
        thumbnailURL?: string | null;
    };
};

type GalleryDto = Gallery;

/*
    Fetches galleries from Payload CMS and transforms them into the required format.
*/
export async function fetchGalleries(): Promise<Gallery[]> {
    try {
        const data = (await fetcher.get.query([
            'gallery',
            { cache: 'no-store', prefixUrl: '' },
        ])) as GalleryDto[];

        return data || [];
    } catch (error) {
        console.error('Error fetching galleries:', error);
        return [];
    }
}

// Function to parse Payload data to Gallery type
export const parseGalleries = (raw: PayloadGallery): Gallery => {
    let eventDateObj = raw.eventDate;

    if (typeof raw.eventDate === 'string') {
        const date = new Date(raw.eventDate);
        eventDateObj = {
            year: date.getUTCFullYear(),
            month: date.getUTCMonth() + 1,
            day: date.getUTCDate(),
        };
    }

    return {
        eventName: raw.eventName,
        eventDate: {
            year: eventDateObj.year,
            month: eventDateObj.month,
            day: eventDateObj.day,
        },
        images: Array.isArray(raw.images)
            ? raw.images
                  .map((image) => ({
                      url: image.url,
                      width: image.width,
                      height: image.height,
                  }))
                  .reverse()
            : [],
    };
};
