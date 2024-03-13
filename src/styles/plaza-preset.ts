import {definePreset} from '@pandacss/dev';

import {badgeRecipe, buttonRecipe} from '@/styles/reciptes';
import {colors, globalCss, textStyles} from '@/styles/theme';

export default definePreset({
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },
  globalCss,
  theme: {
    semanticTokens: {
      colors,
    },
    extend: {
      breakpoints: {
        xs: '320px',
      },
      tokens: {
        sizes: {
          layout: {
            value: '1366px',
          },
        },
        shadows: {
          s1: {
            value: '0 2px 4px rgba(0,0,0,0.08)',
          },
          s2: {
            value: '0 4px 8px rgba(0,0,0,0.08)',
          },
          s3: {
            value: '0 8px 16px rgba(0,0,0,0.08)',
          },
          s4: {
            value: '0 16px 32px rgba(0,0,0,0.08)',
          },
        },
      },
      textStyles,
      recipes: {
        button: buttonRecipe,
        badge: badgeRecipe,
      },
    },
  },
  utilities: {
    extend: {
      truncate: {
        className: 'truncate',
        values: {type: 'boolean'},
        transform(value: boolean) {
          if (!value) return {};
          return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          };
        },
      },
    },
  },
});
