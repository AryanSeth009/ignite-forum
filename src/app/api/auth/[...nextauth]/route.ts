export const GET = async () => {
    return new Response(JSON.stringify({ error: 'Auth is disabled in this build' }), {
        status: 410,
        headers: { 'Content-Type': 'application/json' },
    });
};

export const POST = GET;
