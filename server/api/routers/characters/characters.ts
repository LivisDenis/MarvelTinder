import { createTRPCRouter, publicProcedure } from '../../trpc';
import { CHARACTER_INPUTS } from './schemas';
import { getCharacters } from '../../../../src/utils/api/characters';
import { wrapSuccess } from '../../../utils/wrapSuccess';

export const characterRouter = createTRPCRouter({
  character: publicProcedure.input(CHARACTER_INPUTS.getCharacters).query(async ({ input }) => {
    const characterResponse = await getCharacters({ params: { ...input?.filters } });

    return wrapSuccess(characterResponse);
  })
});
