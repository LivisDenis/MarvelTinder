import { createTRPCRouter, publicProcedure } from '../../trpc';
import { CHARACTER_INPUTS } from './schemas';
import { wrapSuccess } from '../../../utils/wrapSuccess';

export const characterRouter = createTRPCRouter({
  getCharacter: publicProcedure.input(CHARACTER_INPUTS.getCharacter).query(async () => {
    const randomId = Math.ceil(Math.random() * 1000);
    const characterResponse = await prisma?.heroes.findFirst({ where: { id: randomId } });

    return wrapSuccess(characterResponse);
  }),

  getCharacters: publicProcedure.input(CHARACTER_INPUTS.getCharacters).query(async ({ input }) => {
    const characters = await prisma?.heroes.findMany({
      take: input?.limit,
      orderBy: {
        likes: 'asc'
      }
    });

    return wrapSuccess(characters);
  })
});
