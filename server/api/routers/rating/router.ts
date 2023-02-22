import { createTRPCRouter, publicProcedure } from '../../trpc';
import { RATING } from './schemas';
import { wrapSuccess } from '../../../utils/wrapSuccess';
import { prisma } from '../../../db';

export const ratingRouter = createTRPCRouter({
  rate: publicProcedure.input(RATING.rateChar).mutation(async ({ input }) => {
    const characterResponse = await prisma.heroes.update({
      where: { id: input.id },
      data: {
        ...(input.rate === 'like' && {
          likes: {
            increment: 1
          }
        }),
        ...(input.rate === 'dislike' && {
          dislikes: {
            increment: 1
          }
        })
      }
    });

    return wrapSuccess(characterResponse);
  })
});
