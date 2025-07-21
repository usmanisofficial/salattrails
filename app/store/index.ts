import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import mosqueReducer from './slices/mosqueSlice';
import prayerTimesReducer from './slices/prayerTimesSlice';
import userReducer from './slices/userSlice';
import themeReducer from './slices/themeSlice';
import locationReducer from './slices/locationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mosque: mosqueReducer,
    prayerTimes: prayerTimesReducer,
    user: userReducer,
    theme: themeReducer,
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Default export for Expo Router
export default store;
