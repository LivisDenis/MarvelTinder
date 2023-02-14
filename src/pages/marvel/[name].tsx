import { GetStaticPropsContext, NextPage } from 'next';
import Image from 'next/image';
import { prisma } from '../../../server/db';
import { api } from '../../utils/api/api';
import { CharacterDataWrapper } from '../../types';
import Tabs from "../../components/Tabs";

interface CharacterPageProps {
  hero: CharacterDataWrapper;
}
export const getStaticPaths = async () => {
  const heroes = await prisma?.heroes.findMany();

  const paths = heroes?.map((hero) => ({
    params: { name: hero.name }
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ name: string }>) => {
  if (params?.name) {
    // const hero = await prisma?.heroes.findFirst({ where: { name: +params.name } });
    const { data: hero } = await api.get('', { params: { name: params.name } });

    if (!hero)
      return {
        redirect: {
          destination: '/',
          permanent: true
        }
      };

    return {
      props: {
        hero
      }
    };
  }

  throw new Error('no id');
};
const Character: NextPage<CharacterPageProps> = ({ hero }) => {
  const character = hero.data?.results?.[0]!;

  const imgPath = `${character.thumbnail?.path}.${character.thumbnail?.extension}`;

  return (
    <div className='flex flex-col gap-4 rounded-lg bg-slate-600 p-4 w-[745px]'>
      <div className={'flex'}>
        <div className={'mr-4'}>
          <h1 className={'text-[24px] font-bold'}>{character.name}</h1>
          <Image
            alt={`hero ${character.name}`}
            src={imgPath}
            width={300}
            height={300}
            className='mt-2 animate-fade-in h-[250px] w-[300px] object-cover'
          />
        </div>
        <Tabs comics={character.comics!} series={character.series!} stories={character.stories!}/>
      </div>
      <p className={'text-[18px] font-bold'}>{character.description}</p>
    </div>
  );
};

export default Character;
