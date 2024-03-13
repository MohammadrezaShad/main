'use client';

import {useObservable} from '@legendapp/state/react';
import {css} from '@styled/css';
import Link from 'next/link';

import {Paths} from '@/utils';

import {Container, Wrap} from './header.styled';

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const isOpen$ = useObservable(false);

  return (
    <Container>
      <div
        className={css({
          p: 3,
          bg: 'gray.100',
          w: '100%',
          borderBottom: '1px solid token(colors.strokeSecondary)',
        })}
      />
      <Wrap>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            maxW: '8xl',
            w: '100%',
            margin: 'auto',
          })}
        >
          <Link href={Paths.Home.getPath()} className={css({display: 'flex', gap: 4})}>
            <div
              className={css({
                maxW: '80px',
                px: 4,
                py: 4,
                flex: '0 0 80px',
                bg: 'primary',
                color: 'white',
                marginTop: '-26px',
              })}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0.5 0.5 266.4 368.6'
                role='img'
                aria-hidden='true'
              >
                <path d='M185.1 231.5H44l-5.2 16.9h37.7l7.2 23.2h61.9l7.1-23.2h37.6l-5-17zM67 136.6a33.4 33.4 0 0 0 7.4 46.7l33.8 24.5a8.4 8.4 0 0 1 2 11.7l5 3.7 17.9-24.7a33.2 33.2 0 0 0 6.3-19.5 34 34 0 0 0-.4-5.4 33.2 33.2 0 0 0-13.4-21.7l-33.8-24.6a8.3 8.3 0 0 1-3.4-5.4 9 9 0 0 1 0-1.4 8.2 8.2 0 0 1 1.5-4.8l-5-3.7zM87.3 38A48 48 0 0 0 78 66.2a49 49 0 0 0 .6 7.7A48.1 48.1 0 0 0 98 105.5l42.5 30.8a25.8 25.8 0 0 1 10.4 16.9 26.4 26.4 0 0 1 .3 4.1 25.8 25.8 0 0 1-5 15.2l4.1 3 33.5-46.3A48.4 48.4 0 0 0 173 61.6l-51.3-37.3a15 15 0 0 1-3.3-20.9l-4-2.9zM.5 285.8h38.7c9.5 0 17 2.6 21.8 7.3a19.1 19.1 0 0 1 5.7 14.2v.2c0 9.4-5 14.7-11 18 9.6 3.7 15.6 9.3 15.6 20.5v.2c0 15.3-12.4 22.9-31.2 22.9H.5zm34.8 33.6c8 0 13.2-2.6 13.2-8.8v-.2c0-5.5-4.3-8.6-12-8.6H18.4v17.6zm4.9 33.6c8 0 13-2.8 13-9v-.2c0-5.6-4.2-9-13.6-9H18.4V353zm39.1-67.3H118c9.6 0 17 2.7 21.8 7.4a19.1 19.1 0 0 1 5.7 14.2v.2c0 9.4-5 14.7-11 18 9.7 3.7 15.6 9.3 15.6 20.5v.2c0 15.3-12.4 22.9-31.2 22.9H79.3zm34.8 33.8c8 0 13.2-2.7 13.2-8.9v-.2c0-5.5-4.3-8.6-12-8.6H97.2v17.6zM119 353c8 0 13-2.8 13-9v-.2c0-5.6-4.2-9-13.6-9H97.2V353zm39.1-67.3H197c9.5 0 17 2.7 21.7 7.4a19.1 19.1 0 0 1 5.8 14.2v.2c0 9.4-5 14.7-11 18 9.6 3.7 15.6 9.3 15.6 20.5v.2c0 15.3-12.4 22.9-31.2 22.9h-39.6zm34.8 33.8c8.1 0 13.2-2.7 13.2-8.9v-.2c0-5.5-4.2-8.6-12-8.6h-18v17.6zm4.9 33.5c8.1 0 13-2.8 13-9v-.2c0-5.6-4.2-9-13.6-9H176V353zm35-1.3v-.1a17 17 0 0 1 34-.1 17 17 0 0 1-34 .2m32-.1v-.1a15 15 0 1 0-30 0v.2a15 15 0 1 0 30-.1m-22-9.5h8a7.6 7.6 0 0 1 5.6 2 5.4 5.4 0 0 1 1.6 4 5.6 5.6 0 0 1-4 5.6l4.5 6.4h-4.7l-3.8-5.8h-3.2v5.8h-4zm8 8.8c2 0 3.2-1 3.2-2.6 0-1.8-1.3-2.7-3.2-2.7h-4v5.3z' />
              </svg>
            </div>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '4px',
                textStyle: '2xl',
                whiteSpace: 'nowrap',
              })}
            >
              Better Business Bureau
            </div>
          </Link>
          <Link
            href={Paths.Home.getPath()}
            className={css({
              display: 'flex',
              alignItems: 'center',
              ml: 'auto',
              mr: 5,
              _hover: {
                textDecoration: 'underline',
              },
            })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              aria-hidden='true'
              focusable='false'
              height='1em'
              width='1em'
              className={css({fill: 'primary', mr: 1})}
            >
              <path d='M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8m-56 8v40H64c-35.3 0-64 28.7-64 64v96h512v-96c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56m384 232H320v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z' />
            </svg>
            Resources for Businesses
          </Link>
          <Link
            href={Paths.Home.getPath()}
            className={css({
              display: 'flex',
              alignItems: 'center',
              mr: 5,
              _hover: {
                textDecoration: 'underline',
              },
            })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
              aria-hidden='true'
              focusable='false'
              height='1em'
              width='1em'
              className={css({
                fill: 'primary',
                mr: 1,
              })}
            >
              <path d='M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0M192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128' />
            </svg>
            Set my location
          </Link>
          <div className={css({cursor: 'pointer'})}>
            <span
              className={css({
                display: 'block',
                rounded: 'full',
                bg: '#002f6c',
                h: '4px',
                w: '34px',
                mb: '6px',
              })}
            />
            <span
              className={css({
                display: 'block',
                rounded: 'full',
                bg: '#002f6c',
                h: '4px',
                w: '34px',
                mb: '6px',
              })}
            />
            <span
              className={css({
                display: 'block',
                rounded: 'full',
                bg: '#002f6c',
                h: '4px',
                w: '34px',
              })}
            />
          </div>
        </div>
      </Wrap>
      <div
        className={css({
          h: '60px',
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          background: '#1f84a5',
          w: '100%',
          boxShadow: '0 2px 4px 0 rgba(0,0,0,.1)',
        })}
      />
    </Container>
  );
}
