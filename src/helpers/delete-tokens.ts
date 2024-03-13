import {deleteCookie} from 'cookies-next';
import {NextRequest, NextResponse} from 'next/server';

import {CookieName} from '@/constants';

export const deleteTokens = ({req, res}: {req?: NextRequest; res?: NextResponse}) => {
  deleteCookie(CookieName.ACCESS_TOKEN, {req, res});
  deleteCookie(CookieName.REFRESH_TOKEN, {req, res});
};
