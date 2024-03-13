import {styled} from '@styled/jsx';

export const Container = styled('div', {
  base: {display: 'block'},
});

export const Title = styled('span', {
  base: {display: 'block', textStyle: 'subtitle1', mb: 1},
});

export const SubTitle = styled('span', {
  base: {display: 'block', textStyle: 'body2', mb: 6},
});

export const Label = styled('span', {
  base: {display: 'block'},
});

export const Copyright = styled('span', {
  base: {display: 'block', textStyle: 'caption', pb: 16},
});

export const EmailText = styled('span', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgColor: 'backgroundSecondary',
    textStyle: 'caption',
    pos: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: '48px',
    borderBottomRightRadius: 'lg',
    borderBottomLeftRadius: 'lg',
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
