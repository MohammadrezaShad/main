import {styled} from '@styled/jsx';
import Link from 'next/link';

export const Block = styled('div', {
  base: {display: 'block', pos: 'relative'},
});

export const Note = styled('span', {
  base: {display: 'block', textStyle: 'body2', mb: 4},
});

export const ForgetText = styled(Link, {
  base: {pos: 'absolute', color: 'info', top: 0, left: 0, zIndex: 5},
});

export const SubText = styled('span', {
  base: {display: 'block', textStyle: 'caption', pt: 2, color: 'text.secondary'},
  variants: {
    hasError: {
      true: {
        color: 'danger',
      },
    },
  },
});

export const InputWrap = styled('div', {
  base: {display: 'block', pos: 'relative'},
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

export const Evaluate = styled('span', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textStyle: 'caption',
    pos: 'absolute',
    top: 2,
    left: 1,
    zIndex: 5,
  },
});

export const EvaluateText = styled('span', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textStyle: 'caption',
  },
  variants: {
    strength: {
      Weak: {
        color: 'danger',
      },
      Medium: {
        color: 'warning',
      },
      Strong: {
        color: 'success',
      },
    },
  },
});

export const EvaluateProgress = styled('span', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgColor: 'text.variant',
    textStyle: 'caption',
    w: '80px',
    h: '4px',
    pos: 'relative',
    rounded: 'sm',
    mr: 3,
    _before: {
      content: "''",
      position: 'absolute',
      right: '0',
      top: '0',
      h: '4px',
      bg: 'danger',
      rounded: 'sm',
    },
  },
  variants: {
    strength: {
      Weak: {
        _before: {
          bg: 'danger',
          w: '25%',
        },
      },
      Medium: {
        _before: {
          bg: 'warning',
          w: '50%',
        },
      },
      Strong: {
        _before: {
          bg: 'success',
          w: '100%',
        },
      },
    },
  },
});

export const Form = styled('form', {
  base: {
    display: {smDown: 'flex'},
    flexDir: {smDown: 'column'},
  },
});
