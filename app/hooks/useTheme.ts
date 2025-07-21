import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setThemeMode, clearError } from '../store/slices/themeSlice';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const { theme, themeMode, isDark, isLoading, error } = useAppSelector(
    (state) => state.theme
  );

  const setTheme = async (mode: 'light' | 'dark' | 'system') => {
    try {
      await dispatch(setThemeMode(mode)).unwrap();
    } catch (error) {
      // Error is already handled in the slice
      throw error;
    }
  };

  const clearThemeError = () => {
    dispatch(clearError());
  };

  return {
    theme,
    themeMode,
    isDark,
    isLoading,
    error,
    setThemeMode: setTheme,
    clearError: clearThemeError,
  };
};

// Default export for Expo Router
export default useTheme;
