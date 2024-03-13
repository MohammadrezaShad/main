import {defineGlobalStyles} from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  'html, body': {
    fontSize: '16px',
    height: '100%',
  },
  body: {
    bg: 'backgroundSecondary',
    direction: 'ltr',
  },
  main: {
    direction: 'ltr',
    overflowY: 'auto',
    height: '100%',
  },
  '.root': {
    display: 'flex',
    flexDirection: 'column',
    direction: 'ltr',
    minH: '100%',
  },
  '.otp': {
    w: {base: '98px !important', smDown: '100% !important'},
    h: {base: '98px', smDown: '90px'},
    borderRadius: 'lg',
    border: '1px solid token(colors.text.variant)',
    textStyle: 'h1',
    '&:not(:last-child)': {
      mr: 3,
    },
  },
});
