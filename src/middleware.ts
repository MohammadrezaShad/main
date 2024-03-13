import {getCookie} from 'cookies-next';
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {CookieName} from '@/constants';
import {getProfileQuery, refreshTokenMutation} from '@/graphql';
import {deleteTokens, setTokens} from '@/helpers';
import {Paths} from '@/utils';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  let accessToken = getCookie(CookieName.ACCESS_TOKEN, {res, req});
  let refreshToken = getCookie(CookieName.REFRESH_TOKEN, {res, req});
  const originalPath = req.headers.get('x-original-url') || new URL(req.url).pathname;

  const loginPath = Paths.Auth.Login().getPath();
  const homePath = Paths.Home.getPath();
  let user = null;
  try {
    user = accessToken ? await getProfileQuery(accessToken as string) : null;
  } catch (error) {
    console.log(error);
  }

  if (!user) {
    try {
      const tokenData = refreshToken ? await refreshTokenMutation(refreshToken as string) : null;
      const tokens = tokenData?.auth?.refreshToken;
      accessToken = tokens?.accessToken as string;
      refreshToken = tokens?.refreshToken as string;
      tokens &&
        setTokens({
          accessToken: tokens?.accessToken as string,
          refreshToken: tokens?.refreshToken as string,
          res,
          req,
        });
      user = accessToken ? await getProfileQuery(accessToken as string) : null;
    } catch (error) {
      deleteTokens({res, req});
      accessToken = undefined;
      refreshToken = undefined;
    }

    if (!user) {
      deleteTokens({res, req});
      accessToken = undefined;
      refreshToken = undefined;
    }
  }

  if (accessToken && originalPath === loginPath) {
    return NextResponse.redirect(new URL(homePath, req.url));
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
