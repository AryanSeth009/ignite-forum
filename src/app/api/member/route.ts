export async function POST(request: Request) {
    void request;
    return new Response(JSON.stringify({ error: 'Member API is disabled in this build' }), {
        status: 410,
        headers: { 'Content-Type': 'application/json' },
    });
}
