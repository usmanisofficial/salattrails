import React from 'react';
import { useTheme } from '../config/ThemeContext';

export const useThemeAwareHeader = () => {
  const { theme } = useTheme();

  return {
    headerStyle: { backgroundColor: theme.colors.primary },
    headerTintColor: theme.colors.secondary,
    headerTitleStyle: {
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.secondary,
    },
  };
};
