import { createTRPCRouter, publicProcedure } from '../../trpc';
import { CHARACTER_INPUTS } from './schemas';
import { wrapSuccess } from '../../../utils/wrapSuccess';

export const characterRouter = createTRPCRouter({
  character: publicProcedure.input(CHARACTER_INPUTS.getCharacters).query(async ({ input }) => {
    const randomId = Math.ceil(Math.random() * 1000);
    console.log(randomId);
    const characterResponse = await prisma?.heroes.findFirst({ where: { id: randomId } });

    return wrapSuccess(characterResponse);
  })
});
