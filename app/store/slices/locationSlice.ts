import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Location {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  address?: string;
}

interface LocationState {
  currentLocation: Location | null;
  lastKnownLocation: Location | null;
  isLoading: boolean;
  error: string | null;
  hasPermission: boolean;
  isLocationEnabled: boolean;
}

const initialState: LocationState = {
  currentLocation: null,
  lastKnownLocation: null,
  isLoading: false,
  error: null,
  hasPermission: false,
  isLocationEnabled: false,
};

// Async thunks
export const getCurrentLocation = createAsyncThunk(
  'location/getCurrentLocation',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate getting current location
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, you would use expo-location
      // import * as Location from 'expo-location';
      // const { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== 'granted') {
      //   throw new Error('Location permission denied');
      // }
      // const location = await Location.getCurrentPositionAsync({});
      // const address = await Location.reverseGeocodeAsync({
      //   latitude: location.coords.latitude,
      //   longitude: location.coords.longitude,
      // });

      // Mock location data
      const mockLocation: Location = {
        latitude: 40.7128,
        longitude: -74.006,
        city: 'New York',
        country: 'USA',
        address: 'New York, NY, USA',
      };

      return mockLocation;
    } catch (error: any) {
      return rejectWithValue('Failed to get current location');
    }
  }
);

export const saveLastKnownLocation = createAsyncThunk(
  'location/saveLastKnownLocation',
  async (location: Location, { rejectWithValue }) => {
    try {
      await AsyncStorage.setItem('lastKnownLocation', JSON.stringify(location));
      return location;
    } catch (error: any) {
      return rejectWithValue('Failed to save location');
    }
  }
);

export const loadLastKnownLocation = createAsyncThunk(
  'location/loadLastKnownLocation',
  async (_, { rejectWithValue }) => {
    try {
      const savedLocation = await AsyncStorage.getItem('lastKnownLocation');
      if (savedLocation) {
        return JSON.parse(savedLocation) as Location;
      }
      return null;
    } catch (error: any) {
      return rejectWithValue('Failed to load saved location');
    }
  }
);

export const requestLocationPermission = createAsyncThunk(
  'location/requestLocationPermission',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate permission request
      await new Promise((resolve) => setTimeout(resolve, 500));

      // In a real app, you would use expo-location
      // import * as Location from 'expo-location';
      // const { status } = await Location.requestForegroundPermissionsAsync();
      // return status === 'granted';

      return true; // Mock permission granted
    } catch (error: any) {
      return rejectWithValue('Failed to request location permission');
    }
  }
);

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<Location>) => {
      state.currentLocation = action.payload;
      state.lastKnownLocation = action.payload;
    },
    setLocationPermission: (state, action: PayloadAction<boolean>) => {
      state.hasPermission = action.payload;
    },
    setLocationEnabled: (state, action: PayloadAction<boolean>) => {
      state.isLocationEnabled = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearLocation: (state) => {
      state.currentLocation = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Current Location
      .addCase(getCurrentLocation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentLocation = action.payload;
        state.lastKnownLocation = action.payload;
        state.error = null;
      })
      .addCase(getCurrentLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Save Last Known Location
      .addCase(saveLastKnownLocation.fulfilled, (state, action) => {
        state.lastKnownLocation = action.payload;
      })
      // Load Last Known Location
      .addCase(loadLastKnownLocation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadLastKnownLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.lastKnownLocation = action.payload;
        }
        state.error = null;
      })
      .addCase(loadLastKnownLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Request Location Permission
      .addCase(requestLocationPermission.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestLocationPermission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasPermission = action.payload;
        state.error = null;
      })
      .addCase(requestLocationPermission.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setCurrentLocation,
  setLocationPermission,
  setLocationEnabled,
  clearError,
  clearLocation,
} = locationSlice.actions;

export default locationSlice.reducer;
