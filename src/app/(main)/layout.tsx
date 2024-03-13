import {css} from '@styled/css';
import {flex} from '@styled/patterns';
import {headers} from 'next/headers';

import {Footer, Header} from '@/components';
import {HeaderName} from '@/constants';

import '@/styles/globals.css';

export default function MainLayout({children}: {children: React.ReactNode}) {
  const currentUrl = headers().get(HeaderName.PATHNAME) || '';

  return (
    <>
      <Header />
      <div
        className={css({
          flex: 1,
        })}
      >
        <div
          className={flex({
            maxW: 'layout',
            width: '100%',
            mr: 'auto',
            ml: 'auto',
            flex: 1,
            gap: {base: '8', lgDown: 'normal'},
            alignItems: 'flex-start',
          })}
        >
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
