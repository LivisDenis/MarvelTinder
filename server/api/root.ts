import { createTRPCRouter } from './trpc';
import { characterRouter } from './routers/characters/characters';

export const appRouter = createTRPCRouter({
  character: characterRouter
});

export type AppRouter = typeof appRouter;
