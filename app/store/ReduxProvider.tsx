import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './index';
import { useAppDispatch, useAppSelector } from './hooks';
import {
  setUser,
  loginUser,
  registerUser,
  logoutUser,
  forgotPassword,
} from './slices/authSlice';
import {
  loadThemeMode,
  setThemeMode,
  updateSystemTheme,
} from './slices/themeSlice';
import {
  getCurrentLocation,
  loadLastKnownLocation,
  requestLocationPermission,
} from './slices/locationSlice';
import { fetchUserProfile } from './slices/userSlice';
import { fetchPrayerTimes } from './slices/prayerTimesSlice';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useColorScheme } from 'react-native';

// Component to handle Redux initialization and side effects
const ReduxInitializer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { themeMode } = useAppSelector((state) => state.theme);
  const colorScheme = useColorScheme();

  // Initialize theme
  useEffect(() => {
    dispatch(loadThemeMode());
  }, [dispatch]);

  // Handle system theme changes
  useEffect(() => {
    if (colorScheme && themeMode === 'system') {
      dispatch(updateSystemTheme(colorScheme));
    }
  }, [colorScheme, themeMode, dispatch]);

  // Initialize Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          const userData = {
            id: firebaseUser.uid,
            email: firebaseUser.email || '',
            name:
              firebaseUser.displayName ||
              firebaseUser.email?.split('@')[0] ||
              'User',
            avatar: firebaseUser.photoURL || undefined,
          };
          dispatch(setUser(userData));

          // Fetch user profile and prayer times
          dispatch(fetchUserProfile(firebaseUser.uid));
        } else {
          dispatch(setUser(null));
        }
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  // Initialize location services when user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(requestLocationPermission());
      dispatch(loadLastKnownLocation());
    }
  }, [isAuthenticated, dispatch]);

  // Fetch prayer times when location is available
  useEffect(() => {
    if (isAuthenticated) {
      // For now, use default coordinates (New York)
      // In a real app, you would get this from the location slice
      dispatch(
        fetchPrayerTimes({
          latitude: 40.7128,
          longitude: -74.006,
        })
      );
    }
  }, [isAuthenticated, dispatch]);

  return <>{children}</>;
};

// Main Redux Provider component
export const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <ReduxInitializer>{children}</ReduxInitializer>
    </Provider>
  );
};

export default ReduxProvider;
