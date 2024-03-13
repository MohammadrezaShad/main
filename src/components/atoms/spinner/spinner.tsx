'use client';

import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import {CircularProgressbarProps} from 'react-circular-progressbar/dist/types';
import {css} from '@styled/css';
import {token} from '@styled/tokens';

import 'react-circular-progressbar/dist/styles.css';

interface SpinnedProps extends Partial<CircularProgressbarProps> {
  w?: string;
  h?: string;
}

const Spinner: React.FC<SpinnedProps> = ({
  value = 75,
  strokeWidth = 12,
  w = '16px',
  h = '16px',
  styles = {
    trail: {
      stroke: token('colors.primary'),
    },
    path: {
      stroke: token('colors.white'),
    },
  },
  ...otherprops
}) => (
  <div
    className={css({
      w,
      h,
      animation: 'spin 0.5s linear infinite',
    })}
  >
    <CircularProgressbar value={value} styles={styles} strokeWidth={strokeWidth} {...otherprops} />
  </div>
);

export default Spinner;
