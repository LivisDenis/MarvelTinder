import { createTRPCRouter } from './trpc';
import { characterRouter } from './routers/characters/router';
import { ratingRouter } from './routers/rating/router';

export const appRouter = createTRPCRouter({
  character: characterRouter,
  rate: ratingRouter
});

export type AppRouter = typeof appRouter;
