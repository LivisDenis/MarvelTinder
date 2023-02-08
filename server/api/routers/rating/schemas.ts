import { z } from 'zod';

export const RATING = {
  rateChar: z.object({
    id: z.number(),
    rate: z.union([z.literal('like'), z.literal('dislike')])
  })
};
