// src/theme/useTheme.ts

import { lightColors } from './color';

export const useTheme = () => {
    return {
        colors: {
          ...lightColors,
          background: lightColors.background,
          text: lightColors.textPrimary,
        },
    };
};