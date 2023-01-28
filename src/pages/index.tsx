import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import {prisma} from "../../server/db";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'Clietn' });
  const char = trpc.character.character.useQuery({ filters: { limit: 100 } });
    console.log(char.data)

  if (!hello.data || !char.data) {
    return <div>Loading...</div>;
  }

  const character = char.data.response;

  return (
    <div>
      <p className='text-3xl font-bold underline'>{hello.data.greeting}</p>
      <div className='w-[400px]'>
        {character?.results?.map((char) => (
          <div className='mt-4'>
            <h2 className='text-[24px] text-red-600'>{char.name}</h2>
            <p>{char.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
