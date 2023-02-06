import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const { data } = trpc.character.character.useQuery(
    { params: { limit: 1 } },
    {
      refetchOnWindowFocus: false
    }
  );

  if (!data?.response) {
    return <div>Loading...</div>;
  }

  const character = data.response;

  return (
    <section className='flex h-screen flex-col items-center justify-center'>
      <div className='mb-4'>
        <h1 className='text-xl font-bold'>Do you like them all ☄️ ?</h1>
      </div>
      <div className='flex flex-col gap-4 rounded-lg bg-slate-600 p-4'>
        <Link href={`/pokemon/${character.id}`}>
          <div>
            <div className='flex items-center justify-between'>
              <h2 className='text-[28px] font-medium'>{character.name}</h2>
              <span>#{character.id}</span>
            </div>

            <div className='item-center mt-3 flex justify-center'>
              <Image
                alt={`pokemon ${character.name}`}
                src={character.image}
                width={300}
                height={300}
                layout='fixed'
                className='animate-fade-in'
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
