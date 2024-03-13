import {styled} from '@styled/jsx';

export const Container = styled('div', {
  base: {display: 'block'},
});

export const Title = styled('span', {
  base: {display: 'block', textStyle: 'subtitle1', mb: 1},
});

export const SubTitle = styled('span', {
  base: {display: 'block', textStyle: 'body2', mb: 4},
});

export const Section = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textStyle: 'body2',
    mb: 2,
    rounded: 'lg',
    border: '1px solid token(colors.text.variant)',
    pr: 6,
    pl: 4,
    py: 5,
    cursor: 'pointer',
    '& PATH': {
      fill: 'primary',
    },
  },
});
