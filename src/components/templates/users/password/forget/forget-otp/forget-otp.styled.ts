import {styled} from '@styled/jsx';

export const Container = styled('div', {
  base: {display: 'block'},
});

export const Note = styled('span', {
  base: {display: 'block', textStyle: 'subtitle1'},
});

export const Label = styled('span', {
  base: {display: 'block'},
});

export const Text = styled('span', {
  base: {display: 'block', textStyle: 'body2', pb: 6},
});

export const Retry = styled('span', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textStyle: 'caption',
    color: 'text.secondary',
    mt: 9,
  },
  variants: {
    isActive: {
      false: {
        cursor: 'pointer',
        color: 'info',
      },
    },
  },
});

export const ErrorText = styled('span', {
  base: {display: 'block', textStyle: 'caption', mt: 1, color: 'danger'},
});

export const GoBack = styled('span', {
  base: {
    display: 'flex',
    alignItems: 'center',
    pos: 'absolute',
    top: 11,
    left: 6,
    cursor: 'pointer',
    textStyle: 'caption',
  },
});

export const Form = styled('form', {
  base: {
    display: {smDown: 'flex'},
    flexDir: {smDown: 'column'},
  },
});
