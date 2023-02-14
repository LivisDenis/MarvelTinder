import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { ComicList, SeriesList, StoryList } from '../types';

interface DropdownProps {
  comics: ComicList;
  series: SeriesList;
  stories: StoryList;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Tabs = ({ stories, series, comics }: DropdownProps) => {
  const [categories] = useState({
    Stories: stories.items,
    Series: series.items,
    Comics: comics.items
  });

  return (
    <div className='w-full max-w-md px-2 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-slate-700 p-1'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(categories).map((posts, i) => (
            <Tab.Panel
              key={i}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {!posts[0] && <div className='text-center text-black'>There is nothing 😕</div>}
                {posts.map((post, idx) => (
                  <li key={idx} className='relative rounded-md p-3 hover:bg-gray-100'>
                    <h3 className='text-sm font-medium leading-5 text-black'>{post.name}</h3>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
