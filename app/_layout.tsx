import React, { useEffect } from 'react';
import { Slot, Stack } from 'expo-router';
import ReduxProvider from './store/ReduxProvider';
import ThemedStack from './components/ThemedStack';
import { useUpdates } from './hooks/useUpdates';

export default function RootLayout() {
  const { checkAndApplyUpdate } = useUpdates();

  useEffect(() => {
    // Check for updates when the app starts
    checkAndApplyUpdate();
  }, []);

  return (
    <ReduxProvider>
      <ThemedStack />
    </ReduxProvider>
  );
}
