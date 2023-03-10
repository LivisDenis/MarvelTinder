import { ReactNode } from 'react';
import Link from 'next/link';
import { HOME, RATINGS, SEARCH } from '../utils/routes';
import { Button } from './Button';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => (
  <div className='flex flex-col py-7'>
    <div className='flex justify-center  [&_a]:mx-4'>
      <Link href={HOME}>
        <Button>Home</Button>
      </Link>
      <Link href={RATINGS}>
        <Button>Ratings</Button>
      </Link>
      <Link href={SEARCH}>
        <Button>Search</Button>
      </Link>
    </div>
    <section className='mx-auto mt-8 max-w-[900px]'>{children}</section>
  </div>
);

export default Layout;
