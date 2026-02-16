import ky from 'ky';

const isAbsoluteUrl = (url: string) => /^https?:\/\//i.test(url);

const getServerBaseUrl = async () => {
    try {
        const { headers } = await import('next/headers');
        const h = headers();
        const proto = h.get('x-forwarded-proto') ?? 'http';
        const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'localhost:3000';
        return `${proto}://${host}`;
    } catch {
        return 'http://localhost:3000';
    }
};

const withApiPrefix = (url: string) => {
    if (url.startsWith('/api/')) return url;
    if (url.startsWith('/')) return `/api${url}`;
    return `/api/${url}`;
};

const METHODS = ['get', 'post', 'put', 'delete', 'patch'] as const;
type Methods = (typeof METHODS)[number];

type Fetcher = {
    [Method in Methods]: {
        query: (args: any[]) => Promise<any>;
        mutate: (url: string, { arg }: { arg: unknown }) => Promise<any>;
    };
};
export const fetcher = METHODS.reduce(
    (acc, method) => ({
        ...acc,
        [method]: {
            query: async (args: any[]) => {
                const [url, options] = args as [string, any];
                if (isAbsoluteUrl(url)) {
                    return (await ky[method](url, options).json()) as any;
                }

                const path = withApiPrefix(url);
                if (typeof window !== 'undefined') {
                    return (await ky[method](path, options).json()) as any;
                }

                const baseUrl = await getServerBaseUrl();
                return (await ky[method](`${baseUrl}${path}`, options).json()) as any;
            },
            mutate: async (url: string, { arg }: { arg: unknown }) =>
                (await ky[method](withApiPrefix(url), { json: arg }).json()) as any,
        },
    }),
    {} as Fetcher
);
