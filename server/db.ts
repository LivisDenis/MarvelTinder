import { PrismaClient } from '@prisma/client';

// import { env } from '../src/env/server.mjs';

// declare global {
//   // eslint-disable-next-line no-var,vars-on-top
//   var prisma: PrismaClient | undefined;
// }
export const prisma = new PrismaClient()
// export const prisma =
//   global.prisma ||
//   new PrismaClient({
//     log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
//   });
//
// if (env.NODE_ENV !== 'production') {
//   global.prisma = prisma;
// }
