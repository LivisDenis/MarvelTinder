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
      <section className='mt-4 grid grid-cols-4 gap-x-3 gap-y-4'>
        {marvel?.map((char) => (
          <div key={char.id} className='flex max-w-[200px] flex-col bg-gray-600 rounded-[5px]'>
            <Image
              src={char.image}
              alt={char.name}
              width={200}
              height={200}
              className='h-[200px] w-[200px] object-cover rounded-tl-[5px] rounded-tr-[5px]'
            />
            <div className='flex flex-col p-2'>
                <Link
                    href={`/marvel/${char.name.replaceAll(' ', '-')}`}
                    className={'mb-2 text-[14px] font-bold'}
                >{char.name}</Link>
              <span className={'text-[12px]'}>Likes: {char.likes}</span>
              <span className='mt-1 text-[12px]'>Dislikes: {char.dislikes}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Ratings;
