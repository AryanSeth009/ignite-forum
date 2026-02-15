export async function POST(request: Request) {
    void request;
    return new Response(JSON.stringify({ error: 'Payments are disabled in this build' }), {
        status: 410,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function PUT(request: Request) {
    void request;
    return new Response(JSON.stringify({ error: 'Payments are disabled in this build' }), {
        status: 410,
        headers: { 'Content-Type': 'application/json' },
    });
}
