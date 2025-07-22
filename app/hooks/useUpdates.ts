import { useEffect, useState } from 'react';
import * as Updates from 'expo-updates';
import { Alert } from 'react-native';

export const useUpdates = () => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        setIsUpdateAvailable(true);
        return update;
      }
      return null;
    } catch (error) {
      console.error('Error checking for updates:', error);
      return null;
    }
  };

  const applyUpdate = async () => {
    try {
      setIsUpdating(true);
      const update = await Updates.fetchUpdateAsync();
      if (update.isNew) {
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.error('Error applying update:', error);
      Alert.alert(
        'Update Error',
        'Failed to apply update. Please try again later.',
        [{ text: 'OK' }]
      );
    } finally {
      setIsUpdating(false);
    }
  };

  const checkAndApplyUpdate = async () => {
    const update = await checkForUpdates();
    if (update) {
      Alert.alert(
        'Update Available',
        'A new version of SalatTrails is available. Would you like to update now?',
        [
          { text: 'Later', style: 'cancel' },
          { text: 'Update Now', onPress: applyUpdate },
        ]
      );
    }
  };

  useEffect(() => {
    // Check for updates when the app starts
    checkForUpdates();
  }, []);

  return {
    isUpdateAvailable,
    isUpdating,
    checkForUpdates,
    applyUpdate,
    checkAndApplyUpdate,
  };
};
