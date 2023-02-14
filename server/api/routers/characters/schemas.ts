import { z } from 'zod';

export const CHARACTERS_FILTER_INPUT = z
  .object({
    offset: z.number().optional(),
    limit: z.number().optional(),
    total: z.number().optional(),
    count: z.number().optional()
  })
  .optional();

export const CHARACTER_FILTER_INPUT = z
  .object({
    name: z.string().optional()
  })
  .optional();

export const CHARACTER_INPUTS = {
  getCharacter: z.object({ name: z.string().optional() }).optional(),
  getCharacterRandom: z.object({}).optional(),
  getCharacters: z
    .object({
      limit: z.number(),
      params: CHARACTERS_FILTER_INPUT
    })
    .optional()
};
