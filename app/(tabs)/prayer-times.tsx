import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { fetchPrayerTimes } from '../store/slices/prayerTimesSlice';

export default function PrayerTimesScreen() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  const { user } = useAuth();
  const { prayerTimes, nextPrayer, timeUntilNextPrayer, isLoading } =
    useAppSelector((state) => state.prayerTimes);
  const { profile } = useAppSelector((state) => state.user);
  const styles = createStyles(theme);

  useEffect(() => {
    // Fetch prayer times for current location (using default coordinates for now)
    dispatch(fetchPrayerTimes({ latitude: 40.7128, longitude: -74.006 }));
  }, [dispatch]);

  return (
    <ScrollView style={styles.container}>
      {/* Prayer Times Section */}
      <View style={styles.prayerTimesSection}>
        <Text style={styles.sectionTitle}>Prayer Times</Text>

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading prayer times...</Text>
          </View>
        ) : prayerTimes ? (
          <View style={styles.prayerTimesContainer}>
            <View style={styles.nextPrayerCard}>
              <Text style={styles.nextPrayerLabel}>Next Prayer</Text>
              <Text style={styles.nextPrayerName}>
                {nextPrayer
                  ? nextPrayer.charAt(0).toUpperCase() + nextPrayer.slice(1)
                  : 'Fajr'}
              </Text>
              <Text style={styles.nextPrayerTime}>
                {timeUntilNextPrayer || 'Loading...'}
              </Text>
            </View>

            <View style={styles.prayerTimesGrid}>
              {Object.entries(prayerTimes).map(([prayer, time]) => (
                <View
                  key={prayer}
                  style={[
                    styles.prayerTimeCard,
                    nextPrayer === prayer && styles.currentPrayerCard,
                  ]}
                >
                  <Text style={styles.prayerName}>
                    {prayer.charAt(0).toUpperCase() + prayer.slice(1)}
                  </Text>
                  <Text style={styles.prayerTime}>{time}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Unable to load prayer times</Text>
          </View>
        )}
      </View>

      {/* Quick Actions Section */}
      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => router.push('/add-mosque')}
        >
          <Ionicons name="add-circle" size={24} color={theme.colors.primary} />
          <Text style={styles.actionText}>Add New Prayer Location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => router.push('/(tabs)/')}
        >
          <Ionicons name="map" size={24} color={theme.colors.primary} />
          <Text style={styles.actionText}>View My Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => router.push('/(tabs)/discover')}
        >
          <Ionicons name="search" size={24} color={theme.colors.primary} />
          <Text style={styles.actionText}>Find Nearby Mosques</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => {
            // Handle Qibla direction
            console.log('Opening Qibla direction...');
          }}
        >
          <Ionicons name="compass" size={24} color={theme.colors.primary} />
          <Text style={styles.actionText}>Qibla Direction</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.stats}>
        <Text style={styles.sectionTitle}>Your Journey</Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {profile?.visitedMosques?.length || 0}
            </Text>
            <Text style={styles.statLabel}>Mosques Visited</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {profile?.favorites?.length || 0}
            </Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    prayerTimesSection: {
      padding: theme.spacing.lg,
    },
    sectionTitle: {
      fontSize: theme.typography.fontSize.xl,
      fontWeight: theme.typography.fontWeight.bold,
      marginBottom: theme.spacing.md,
      color: theme.colors.text,
    },
    loadingContainer: {
      alignItems: 'center',
      padding: theme.spacing.lg,
    },
    loadingText: {
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.textSecondary,
    },
    errorContainer: {
      alignItems: 'center',
      padding: theme.spacing.lg,
    },
    errorText: {
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.error,
    },
    prayerTimesContainer: {
      gap: theme.spacing.md,
    },
    nextPrayerCard: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
      ...theme.shadows.md,
    },
    nextPrayerLabel: {
      fontSize: theme.typography.fontSize.sm,
      color: '#202020',
      marginBottom: theme.spacing.xs,
    },
    nextPrayerName: {
      fontSize: theme.typography.fontSize['2xl'],
      fontWeight: theme.typography.fontWeight.bold,
      color: '#202020',
      marginBottom: theme.spacing.xs,
    },
    nextPrayerTime: {
      fontSize: theme.typography.fontSize.lg,
      color: '#202020',
    },
    prayerTimesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: theme.spacing.sm,
    },
    prayerTimeCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      width: '48%',
      alignItems: 'center',
      ...theme.shadows.sm,
    },
    currentPrayerCard: {
      backgroundColor: theme.colors.warning,
    },
    prayerName: {
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    prayerTime: {
      fontSize: theme.typography.fontSize.lg,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.primary,
    },
    quickActions: {
      padding: theme.spacing.lg,
    },
    actionCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.sm,
      flexDirection: 'row',
      alignItems: 'center',
      ...theme.shadows.md,
    },
    actionText: {
      marginLeft: theme.spacing.md,
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.text,
    },
    stats: {
      padding: theme.spacing.lg,
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    statCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
      flex: 1,
      marginHorizontal: theme.spacing.xs,
      alignItems: 'center',
      ...theme.shadows.md,
    },
    statNumber: {
      fontSize: theme.typography.fontSize['4xl'],
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.primary,
    },
    statLabel: {
      fontSize: theme.typography.fontSize.sm,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xs,
    },
  });
