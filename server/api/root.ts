import { createTRPCRouter } from './trpc';
import { exampleRouter } from './routers/example';
import { characterRouter } from './routers/characters/characters';

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  character: characterRouter,
});

export type AppRouter = typeof appRouter;
