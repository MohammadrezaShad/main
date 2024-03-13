import {styled} from '@styled/jsx';

export const Container = styled('div', {
  base: {display: 'block'},
});

export const Form = styled('form', {
  base: {
    display: {smDown: 'flex'},
    flexDir: {smDown: 'column'},
  },
});

export const Note = styled('span', {
  base: {display: 'block', textStyle: 'body2', mb: 4},
});

export const Label = styled('span', {
  base: {display: 'block'},
});

export const Copyright = styled('span', {
  base: {display: 'block', textStyle: 'caption', pb: {base: 16, smDown: 8}},
});

export const EmailText = styled('span', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgColor: 'backgroundSecondary',
    textStyle: 'caption',
    pos: {base: 'absolute', smDown: 'relative'},
    bottom: 0,
    right: 0,
    left: 0,
    height: '48px',
    borderBottomRightRadius: 'lg',
    borderBottomLeftRadius: 'lg',
    ml: {smDown: -6},
    mr: {smDown: -6},
  },
});

export const ErrorText = styled('span', {
  base: {display: 'block', textStyle: 'caption', mt: 1, color: 'danger'},
});
