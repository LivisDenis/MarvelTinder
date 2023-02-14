import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={300}
    height={292}
    viewBox='0 0 300 292'
    backgroundColor='#f3f3f3'
    foregroundColor='#c2c2c2'
    {...props}
  >
    <rect x='0' y='42' rx='5' ry='5' width='300' height='250' />
    <rect x='0' y='0' rx='5' ry='5' width='300' height='30' />
  </ContentLoader>
);
