import {getCookie} from 'cookies-next';
import {NextRequest, NextResponse} from 'next/server';

import {CookieName} from '@/constants';

export const getTokens = ({req, res}: {req?: NextRequest; res?: NextResponse}) => {
  const accessToken = getCookie(CookieName.ACCESS_TOKEN, {res, req});
  const refreshToken = getCookie(CookieName.REFRESH_TOKEN, {res, req});

  return {
    accessToken: accessToken as string,
    refreshToken: refreshToken as string,
  };
};
