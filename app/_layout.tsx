import React from 'react';
import { Slot, Stack } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';

export default function RootLayout() {
  return (
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
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="prayer-times"
          options={{
            headerShown: true,
            title: 'Prayer Times',
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="mosque-details"
          options={{
            headerShown: true,
            title: 'Mosque Details',
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            headerShown: true,
            title: 'Settings',
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="edit-profile"
          options={{
            headerShown: true,
            title: 'Edit Profile',
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff',
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
