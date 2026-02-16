import { env } from '@/env.mjs';
import { createClient } from 'redis';

export const redisClient = env.REDIS_URI
    ? createClient({ url: env.REDIS_URI })
    : {
          connect: async () => {},
          ping: async () => 'PONG',
          get: async (_key: string) => null,
          set: async (_key: string, _value: string) => {},
          hSet: async (_key: string, _values: Record<string, string>) => {},
          hGet: async (_key: string, _field: string) => {},
          del: async (_key: string) => {},
      };

if (env.REDIS_URI) {
    await redisClient.connect();
    await redisClient.ping();
}
