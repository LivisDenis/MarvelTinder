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
  getCharacter: z.object({ params: z.object({ id: z.number() }) }),
  getCharacters: z
    .object({
      // params: z
      //     .object({
      //         page: z.number().optional()
      //     })
      //     .optional(),
      filters: CHARACTER_FILTER_INPUT
    })
    .optional(),
  getCharactersInfo: z
    .object({
      filters: CHARACTER_FILTER_INPUT
    })
    .optional(),
  getCharactersMultiple: z.object({
    params: z.object({
      multiple: z.number().array()
    }),
    filters: CHARACTER_FILTER_INPUT
  })
};
