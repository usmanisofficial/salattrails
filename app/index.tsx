import { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from './hooks/useAuth';
import LoadingScreen from '../components/LoadingScreen';

export default function Index() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen message="Checking authentication..." />;
  }

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/login" />;
}
