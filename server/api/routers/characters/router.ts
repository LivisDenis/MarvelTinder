import { createTRPCRouter, publicProcedure } from '../../trpc';
import { CHARACTER_INPUTS } from './schemas';
import { wrapSuccess } from '../../../utils/wrapSuccess';
import {prisma} from '../../../db'

export const characterRouter = createTRPCRouter({
  getCharacter: publicProcedure.input(CHARACTER_INPUTS.getCharacter).query(async ({ input }) => {
    const characterResponse = await prisma?.heroes.findFirst({ where: { name: input?.name } });

    return wrapSuccess(characterResponse);
  }),

  getCharacterRandom: publicProcedure.input(CHARACTER_INPUTS.getCharacterRandom).query(async () => {
    const randomId = Math.ceil(Math.random() * 649);
    const characterResponse = await prisma?.heroes.findFirst({ where: { id: randomId } });

    return wrapSuccess(characterResponse);
  }),

  getCharacters: publicProcedure.input(CHARACTER_INPUTS.getCharacters).query(async ({ input }) => {
    const characters = await prisma?.heroes.findMany({
      take: input?.limit,
      orderBy: {
        likes: 'desc'
      }
    });

    return wrapSuccess(characters);
  })
});
