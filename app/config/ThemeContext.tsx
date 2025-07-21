import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme, Appearance } from 'react-native';
import { lightTheme, darkTheme, Theme } from './theme';
import { themeStorage } from './themeStorage';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { useTheme };

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>('system'); // Default to system theme
  const [isLoading, setIsLoading] = useState(true);

  // More reliable system theme detection
  const getSystemTheme = () => {
    const appearance = Appearance.getColorScheme();
    console.log('🔍 Appearance.getColorScheme():', appearance);
    console.log('🔍 useColorScheme():', systemColorScheme);
    return appearance || systemColorScheme;
  };

  // Load saved theme mode on app start
  useEffect(() => {
    const loadThemeMode = async () => {
      try {
        // Clear saved theme mode to force system theme
        await themeStorage.clearThemeMode();

        const savedThemeMode = await themeStorage.getThemeMode();
        console.log('📱 Loading theme mode from storage:', savedThemeMode);
        console.log('🔍 Theme Debug:', {
          isSystemMode: savedThemeMode === 'system',
          systemColorScheme,
          themeMode: savedThemeMode || 'system',
        });
        if (savedThemeMode) {
          setThemeMode(savedThemeMode);
        }
      } catch (error) {
        console.error('Error loading theme mode:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadThemeMode();
  }, [systemColorScheme]);

  // Listen for system color scheme changes
  useEffect(() => {
    console.log('🔄 System color scheme changed:', systemColorScheme);
  }, [systemColorScheme]);

  const handleSetThemeMode = async (mode: ThemeMode) => {
    setThemeMode(mode);
    await themeStorage.setThemeMode(mode);
  };

  const getCurrentTheme = (): Theme => {
    const actualSystemTheme = getSystemTheme();

    const selectedTheme = (() => {
      switch (themeMode) {
        case 'light':
          return lightTheme;
        case 'dark':
          return darkTheme;
        case 'system':
          return actualSystemTheme === 'dark' ? darkTheme : lightTheme;
        default:
          return actualSystemTheme === 'dark' ? darkTheme : lightTheme;
      }
    })();

    console.log('🎨 Theme Selection:', {
      selectedTheme:
        themeMode === 'system'
          ? actualSystemTheme === 'dark'
            ? 'dark'
            : 'light'
          : themeMode,
      systemColorScheme,
      actualSystemTheme,
      themeMode,
    });

    return selectedTheme;
  };

  const theme = getCurrentTheme();
  const isDark =
    themeMode === 'dark' ||
    (themeMode === 'system' && systemColorScheme === 'dark');

  const value: ThemeContextType = {
    theme,
    themeMode,
    setThemeMode: handleSetThemeMode,
    isDark,
  };

  if (isLoading) {
    // You can return a loading screen here if needed
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
