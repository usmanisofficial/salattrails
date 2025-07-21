import React from 'react';
import { Slot, Stack } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from './config/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="add-mosque"
            options={{
              presentation: 'modal',
              headerShown: true,
              title: 'Add Mosque',
              headerStyle: { backgroundColor: '#202020' },
              headerTintColor: '#E2BE7F',
              headerTitleStyle: { color: '#E2BE7F' },
            }}
          />
          <Stack.Screen
            name="prayer-times"
            options={{
              headerShown: true,
              title: 'Prayer Times',
              headerStyle: { backgroundColor: '#202020' },
              headerTintColor: '#E2BE7F',
              headerTitleStyle: { color: '#E2BE7F' },
            }}
          />
          <Stack.Screen
            name="mosque-details"
            options={{
              headerShown: true,
              title: 'Mosque Details',
              headerStyle: { backgroundColor: '#202020' },
              headerTintColor: '#E2BE7F',
              headerTitleStyle: { color: '#E2BE7F' },
            }}
          />
          <Stack.Screen
            name="settings"
            options={{
              headerShown: true,
              title: 'Settings',
              headerStyle: { backgroundColor: '#202020' },
              headerTintColor: '#E2BE7F',
              headerTitleStyle: { color: '#E2BE7F' },
            }}
          />
          <Stack.Screen
            name="edit-profile"
            options={{
              headerShown: true,
              title: 'Edit Profile',
              headerStyle: { backgroundColor: '#202020' },
              headerTintColor: '#E2BE7F',
              headerTitleStyle: { color: '#E2BE7F' },
            }}
          />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}
