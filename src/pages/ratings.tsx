import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { trpc } from '../utils/trpc';

const Ratings: NextPage = () => {
  const getMarvelQuery = trpc.character.getCharacters.useQuery({ limit: 20 });

  const marvel = getMarvelQuery.data?.response;

  return (
    <div>
      <h1 className='text-center text-[30px] font-bold'>Most popular hero</h1>
      <section className='mt-4 grid grid-cols-4 gap-3'>
        {marvel?.map((char) => (
          <div className='flex max-w-[200px] flex-col'>
            <Image src={char.image} alt={char.name} width={200} height={200} />
            <Link href={`/marvel/${char.name.replaceAll(' ', '-')}`}>{char.name}</Link>
            <div className='mt-3 flex flex-col'>
              <span>Likes: {char.likes}</span>
              <span className='mt-1'>Dislikes: {char.dislikes}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Ratings;
