import {css} from '@styled/css';
import {flex} from '@styled/patterns';
import {headers} from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import {IconChevronRight, Logo} from '@/assets';
import {HeaderName} from '@/constants';
import {ForgetPasswordDataProvider, LoginDataProvider} from '@/providers';
import {Paths} from '@/utils';

import '@/styles/globals.css';

export default function UsersLayout({children}: {children: React.ReactNode}) {
  const currentUrl = headers().get(HeaderName.PATHNAME) || '';

  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: {smDown: 'column'},
        bgColor: 'backgroundSecondary',
        flex: 1,
        p: {base: 8, lgDown: 6, smDown: '0'},
        pos: 'relative',
        zIndex: 1,
      })}
    >
      <Image
        alt='background logo'
        src='/images/bg-logo.png'
        fill
        className={css({w: 'auto !important', zIndex: '-1', m: 'auto'})}
        unoptimized
      />
      <div
        className={css({
          display: {smDown: 'flex'},
          flexDir: {smDown: 'column'},
          bg: 'white',
          m: 'auto',
          p: 8,
          rounded: 'lg',
          minW: {base: '432px', smDown: '100%'},
          maxW: '480px',
          width: '100%',
          flex: {smDown: '1'},
          position: 'relative',
          boxShadow: 's4',
        })}
      >
        <a
          href={Paths.Home.getPath()}
          className={flex({alignItems: 'center', mb: 9, mt: {smDown: 'auto'}})}
        >
          <Logo />
          <h1 className={css({textStyle: 'h1', mr: 4})}>اگیبی</h1>
        </a>
        <LoginDataProvider>
          <ForgetPasswordDataProvider>{children}</ForgetPasswordDataProvider>
        </LoginDataProvider>
        <Link
          href={Paths.Home.getPath()}
          className={css({
            display: {base: 'flex'},
            alignItems: 'center',
            justifyContent: 'center',
            pos: {base: 'absolute', smDown: 'static'},
            bottom: {base: '-30px', smDown: '5px'},
            right: '50%',
            transform: {base: 'translateX(50%)', smDown: 'none'},
            textStyle: 'caption',
            mt: {smDown: 6},
          })}
        >
          <IconChevronRight />
          بازگشت به خانه
        </Link>
        <span className={css({mb: 'auto', display: {base: 'none', smDown: 'block'}})} />
      </div>
    </div>
  );
}
