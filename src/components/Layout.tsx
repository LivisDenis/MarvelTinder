import { ReactNode } from 'react';
import Link from 'next/link';
import { HOME, RATINGS } from '../utils/routes';
import { Button } from './Button';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => (
  <div className='flex flex-col'>
    <div className='flex justify-center p-7 [&_a]:mx-4'>
      <Link href={HOME}>
        <Button>Home</Button>
      </Link>
      <Link href={RATINGS}>
        <Button>Ratings</Button>
      </Link>
    </div>
    <section className='mx-auto mt-8 max-w-[900px]'>{children}</section>
  </div>
);

export default Layout;
