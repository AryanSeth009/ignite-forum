export async function GET(request: Request) {
    void request;
    return new Response(JSON.stringify({ error: 'Notifications API is disabled in this build' }), {
        status: 410,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function PUT(request: Request) {
    void request;
    return new Response(JSON.stringify({ error: 'Notifications API is disabled in this build' }), {
        status: 410,
        headers: { 'Content-Type': 'application/json' },
    });
}
