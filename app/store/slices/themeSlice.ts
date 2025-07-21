import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme, Theme } from '../../config/theme';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  themeMode: ThemeMode;
  isDark: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: ThemeState = {
  theme: lightTheme,
  themeMode: 'system',
  isDark: false,
  isLoading: false,
  error: null,
};

// Async thunks
export const loadThemeMode = createAsyncThunk(
  'theme/loadThemeMode',
  async (_, { rejectWithValue }) => {
    try {
      const savedThemeMode = await AsyncStorage.getItem('themeMode');
      return (savedThemeMode as ThemeMode) || 'system';
    } catch (error: any) {
      return rejectWithValue('Failed to load theme mode');
    }
  }
);

export const setThemeMode = createAsyncThunk(
  'theme/setThemeMode',
  async (mode: ThemeMode, { rejectWithValue }) => {
    try {
      await AsyncStorage.setItem('themeMode', mode);
      return mode;
    } catch (error: any) {
      return rejectWithValue('Failed to save theme mode');
    }
  }
);

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateSystemTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      if (state.themeMode === 'system') {
        state.isDark = action.payload === 'dark';
        state.theme = action.payload === 'dark' ? darkTheme : lightTheme;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Load Theme Mode
      .addCase(loadThemeMode.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadThemeMode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.themeMode = action.payload;
        state.error = null;
      })
      .addCase(loadThemeMode.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Set Theme Mode
      .addCase(setThemeMode.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setThemeMode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.themeMode = action.payload;

        // Update theme based on mode
        if (action.payload === 'light') {
          state.theme = lightTheme;
          state.isDark = false;
        } else if (action.payload === 'dark') {
          state.theme = darkTheme;
          state.isDark = true;
        }
        // For 'system', the theme will be updated by updateSystemTheme action

        state.error = null;
      })
      .addCase(setThemeMode.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { updateSystemTheme, clearError } = themeSlice.actions;

export default themeSlice.reducer;
