import { getCharacters } from '../../src/utils/api/characters';
import {prisma} from "../db";

export const fillDataBase = async () => {
  const data = await getCharacters({
    params: {
      limit: 100,
      offset: 1000
    }
  });

  const characters = data?.results?.map((char) => ({
    name: char.name!,
    image: `${char.thumbnail?.path}.${char.thumbnail?.extension}`
  }));

  await prisma.heroes.createMany({ data: characters! });
};
