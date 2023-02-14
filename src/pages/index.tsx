import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/Button';
import { trpc } from '../utils/trpc';
import { Skeleton } from '../components/Skeleton';

const Home: NextPage = () => {
  const getMarvelQuery = trpc.character.getCharacterRandom.useQuery();

  const rateMarvelQuery = trpc.rate.rate.useMutation({
    onSuccess: () => getMarvelQuery.refetch()
  });

  if (!getMarvelQuery.data?.response) {
    return <div>loading...</div>;
  }

  const character = getMarvelQuery.data.response;

  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='mb-4'>
        <h1 className='text-xl font-bold'>Do you like them all ☄️ ?</h1>
      </div>
      <div className='flex flex-col gap-4 rounded-lg bg-slate-600 p-4'>
        {(getMarvelQuery.isRefetching || !getMarvelQuery.data?.response) && <Skeleton />}
        {!getMarvelQuery.isRefetching && (
          <Link href={`/marvel/${character.name}`}>
            <div>
              <div className='flex items-center justify-between'>
                <h2 className='text-[20px] font-medium'>{character.name}</h2>
                <span>#{character.id}</span>
              </div>

              <div className='item-center mt-3 flex justify-center'>
                <Image
                  alt={`pokemon ${character.name}`}
                  src={character.image}
                  width={300}
                  height={300}
                  className='animate-fade-in h-[250px] w-[300px] object-cover'
                />
              </div>
            </div>
          </Link>
        )}
        <div className='flex gap-3'>
          <Button
            onClick={() => rateMarvelQuery.mutate({ id: character?.id!, rate: 'like' })}
            disabled={rateMarvelQuery.isLoading}
          >
            LIKE
          </Button>
          <Button
            onClick={() => rateMarvelQuery.mutate({ id: character?.id!, rate: 'dislike' })}
            disabled={rateMarvelQuery.isLoading}
          >
            DISLIKE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
