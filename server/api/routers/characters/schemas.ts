import { z } from 'zod';

export const CHARACTER_FILTER_INPUT = z
  .object({
    offset: z.number().optional(),
    limit: z.number().optional(),
    total: z.number().optional(),
    count: z.number().optional()
  })
  .optional();

export const CHARACTER_INPUTS = {
  getCharacter: z.object({}).optional(),
  getCharacters: z
    .object({
      limit: z.number(),
      params: CHARACTER_FILTER_INPUT
    })
    .optional()
};
