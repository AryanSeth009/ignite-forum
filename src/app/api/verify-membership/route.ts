import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    void req;
    return NextResponse.json(
        { error: 'Membership verification is disabled in this build' },
        { status: 410 }
    );
}
