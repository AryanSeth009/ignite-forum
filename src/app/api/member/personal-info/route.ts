export async function POST(request: Request) {
    void request;
    return new Response(JSON.stringify({ error: 'Personal info API is disabled in this build' }), {
        status: 410,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function GET() {
    return new Response(JSON.stringify({ error: 'Personal info API is disabled in this build' }), {
        status: 410,
        headers: { 'Content-Type': 'application/json' },
    });
}
