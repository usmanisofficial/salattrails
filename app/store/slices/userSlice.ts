import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other';
  location?: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  preferences: {
    prayerReminders: boolean;
    qiblaReminder: boolean;
    communityNotifications: boolean;
    language: string;
    timeFormat: '12h' | '24h';
    distanceUnit: 'km' | 'miles';
  };
  favorites: string[]; // Mosque IDs
  visitedMosques: string[]; // Mosque IDs
  createdAt: string;
  updatedAt: string;
}

interface UserState {
  profile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  isUpdating: boolean;
}

const initialState: UserState = {
  profile: null,
  isLoading: false,
  error: null,
  isUpdating: false,
};

// Async thunks
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (userId: string, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      // In a real app, you would fetch from your backend
      // const response = await fetch(`/api/users/${userId}`);
      // const data = await response.json();

      // For now, return mock data
      const mockProfile: UserProfile = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://via.placeholder.com/150',
        phone: '+1234567890',
        dateOfBirth: '1990-01-01',
        gender: 'male',
        location: {
          city: 'New York',
          country: 'USA',
          latitude: 40.7128,
          longitude: -74.006,
        },
        preferences: {
          prayerReminders: true,
          qiblaReminder: true,
          communityNotifications: true,
          language: 'en',
          timeFormat: '12h',
          distanceUnit: 'km',
        },
        favorites: ['1', '2'],
        visitedMosques: ['1', '3'],
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
      };

      return mockProfile;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch user profile');
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (updates: Partial<UserProfile>, { rejectWithValue, getState }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, you would update your backend
      // const response = await fetch(`/api/users/${userId}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(updates),
      // });
      // const data = await response.json();

      return updates;
    } catch (error: any) {
      return rejectWithValue('Failed to update user profile');
    }
  }
);

export const updateUserPreferences = createAsyncThunk(
  'user/updateUserPreferences',
  async (
    preferences: Partial<UserProfile['preferences']>,
    { rejectWithValue }
  ) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Save to AsyncStorage for persistence
      await AsyncStorage.setItem(
        'userPreferences',
        JSON.stringify(preferences)
      );

      return preferences;
    } catch (error: any) {
      return rejectWithValue('Failed to update preferences');
    }
  }
);

export const toggleFavoriteMosque = createAsyncThunk(
  'user/toggleFavoriteMosque',
  async (mosqueId: string, { rejectWithValue, getState }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300));

      return mosqueId;
    } catch (error: any) {
      return rejectWithValue('Failed to toggle favorite mosque');
    }
  }
);

export const addVisitedMosque = createAsyncThunk(
  'user/addVisitedMosque',
  async (mosqueId: string, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300));

      return mosqueId;
    } catch (error: any) {
      return rejectWithValue('Failed to add visited mosque');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setProfile: (state, action: PayloadAction<UserProfile | null>) => {
      state.profile = action.payload;
    },
    updateProfileField: (
      state,
      action: PayloadAction<Partial<UserProfile>>
    ) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch User Profile
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Update User Profile
      .addCase(updateUserProfile.pending, (state) => {
        state.isUpdating = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isUpdating = false;
        if (state.profile) {
          state.profile = { ...state.profile, ...action.payload };
        }
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isUpdating = false;
        state.error = action.payload as string;
      })
      // Update User Preferences
      .addCase(updateUserPreferences.pending, (state) => {
        state.isUpdating = true;
        state.error = null;
      })
      .addCase(updateUserPreferences.fulfilled, (state, action) => {
        state.isUpdating = false;
        if (state.profile) {
          state.profile.preferences = {
            ...state.profile.preferences,
            ...action.payload,
          };
        }
        state.error = null;
      })
      .addCase(updateUserPreferences.rejected, (state, action) => {
        state.isUpdating = false;
        state.error = action.payload as string;
      })
      // Toggle Favorite Mosque
      .addCase(toggleFavoriteMosque.fulfilled, (state, action) => {
        if (state.profile) {
          const mosqueId = action.payload;
          const favorites = state.profile.favorites;

          if (favorites.includes(mosqueId)) {
            state.profile.favorites = favorites.filter((id) => id !== mosqueId);
          } else {
            state.profile.favorites = [...favorites, mosqueId];
          }
        }
      })
      // Add Visited Mosque
      .addCase(addVisitedMosque.fulfilled, (state, action) => {
        if (state.profile) {
          const mosqueId = action.payload;
          if (!state.profile.visitedMosques.includes(mosqueId)) {
            state.profile.visitedMosques = [
              ...state.profile.visitedMosques,
              mosqueId,
            ];
          }
        }
      });
  },
});

export const { clearError, setProfile, updateProfileField } = userSlice.actions;

export default userSlice.reducer;
