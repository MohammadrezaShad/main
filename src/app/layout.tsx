import {token} from '@styled/tokens';
import type {Metadata} from 'next';
import {Lato} from 'next/font/google';
import {cookies} from 'next/headers';
import NextTopLoader from 'nextjs-toploader';

import {CookieName, ThemeType} from '@/constants';
import {MainProviders} from '@/providers';

import '@/styles/globals.css';

const lato = Lato({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'فروشگاه اینترنتی اگیبی',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const cookieStore = cookies();
  const theme = cookieStore.get(CookieName.THEME);

  return (
    <html lang='en' dir='ltr' data-color-mode={theme?.value}>
      <body className={lato.className}>
        <MainProviders theme={theme?.value as ThemeType}>
          <NextTopLoader color={token('colors.primary')} showSpinner={false} />
          <main>
            <div className='root'>{children}</div>
          </main>
        </MainProviders>
      </body>
    </html>
  );
}
