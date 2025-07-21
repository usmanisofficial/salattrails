import React from 'react';
import { Stack } from 'expo-router';
import { useAppSelector } from '../store/hooks';

export default function ThemedStack() {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: { color: theme.colors.text, fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="add-mosque"
        options={{
          presentation: 'modal',
          headerShown: true,
          title: 'Add Mosque',
        }}
      />
      <Stack.Screen
        name="prayer-times"
        options={{
          headerShown: true,
          title: 'Prayer Times',
        }}
      />
      <Stack.Screen
        name="mosque-details"
        options={{
          headerShown: true,
          title: 'Mosque Details',
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: true,
          title: 'Settings',
        }}
      />
      <Stack.Screen
        name="edit-profile"
        options={{
          headerShown: true,
          title: 'Edit Profile',
        }}
      />
    </Stack>
  );
}
