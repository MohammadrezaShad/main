'use client';

import {css} from '@styled/css';
import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient();

// Version A: Modify it by changing the query

export default function Home() {
  return (
    <div className={css({w: '100%'})}>
      <div className={css({h: '300px', bg: 'red', w: '100%'})} />
      <div className={css({h: '300px', bg: 'amber.950', w: '100%'})} />
      <div className={css({h: '300px', bg: 'purple', w: '100%'})} />
      <div className={css({h: '300px', bg: 'violet', w: '100%'})} />
      <div className={css({h: '300px', bg: 'paleturquoise', w: '100%'})} />
    </div>
  );
}
