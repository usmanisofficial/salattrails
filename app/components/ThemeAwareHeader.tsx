import React from 'react';
import { useTheme } from '../hooks/useTheme';

const useThemeAwareHeader = () => {
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

export { useThemeAwareHeader };
export default useThemeAwareHeader;
