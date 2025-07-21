import React from 'react';
import { Slot, Stack } from 'expo-router';
import ReduxProvider from './store/ReduxProvider';
import ThemedStack from './components/ThemedStack';

export default function RootLayout() {
  return (
    <ReduxProvider>
      <ThemedStack />
    </ReduxProvider>
  );
}
