import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_MODE_KEY = '@salattrails_theme_mode';

export const themeStorage = {
  async getThemeMode(): Promise<'light' | 'dark' | 'system' | null> {
    try {
      const themeMode = await AsyncStorage.getItem(THEME_MODE_KEY);
      return themeMode as 'light' | 'dark' | 'system' | null;
    } catch (error) {
      console.error('Error getting theme mode:', error);
      return null;
    }
  },

  async setThemeMode(themeMode: 'light' | 'dark' | 'system'): Promise<void> {
    try {
      await AsyncStorage.setItem(THEME_MODE_KEY, themeMode);
    } catch (error) {
      console.error('Error setting theme mode:', error);
    }
  },

  async clearThemeMode(): Promise<void> {
    try {
      await AsyncStorage.removeItem(THEME_MODE_KEY);
    } catch (error) {
      console.error('Error clearing theme mode:', error);
    }
  },
};
