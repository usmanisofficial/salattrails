import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from './hooks/useTheme';
import type { Theme } from './config/theme';

export default function PrayerTimesScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const prayers = [
    {
      name: 'Fajr',
      time: '5:30 AM',
      icon: 'sunny' as const,
      color: theme.colors.warning,
    },
    {
      name: 'Sunrise',
      time: '7:15 AM',
      icon: 'sunny' as const,
      color: theme.colors.warning,
    },
    {
      name: 'Dhuhr',
      time: '12:30 PM',
      icon: 'sunny' as const,
      color: theme.colors.warning,
    },
    {
      name: 'Asr',
      time: '3:45 PM',
      icon: 'sunny' as const,
      color: theme.colors.warning,
    },
    {
      name: 'Maghrib',
      time: '6:20 PM',
      icon: 'moon' as const,
      color: theme.colors.info,
    },
    {
      name: 'Isha',
      time: '7:45 PM',
      icon: 'moon' as const,
      color: theme.colors.info,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Prayer Times</Text>
          <Text style={styles.subtitle}>Today's Prayer Schedule</Text>
        </View>

        <View style={styles.locationInfo}>
          <Ionicons name="location" size={20} color={theme.colors.primary} />
          <Text style={styles.locationText}>Current Location</Text>
          <TouchableOpacity style={styles.changeLocationButton}>
            <Text style={styles.changeLocationText}>Change</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.prayerTimesContainer}>
          {prayers.map((prayer) => (
            <View key={prayer.name} style={styles.prayerCard}>
              <View style={styles.prayerInfo}>
                <Ionicons name={prayer.icon} size={24} color={prayer.color} />
                <Text style={styles.prayerName}>{prayer.name}</Text>
              </View>
              <Text style={styles.prayerTime}>{prayer.time}</Text>
            </View>
          ))}
        </View>

        <View style={styles.qiblaSection}>
          <Text style={styles.sectionTitle}>Qibla Direction</Text>
          <View style={styles.qiblaContainer}>
            <View style={styles.compassContainer}>
              <Ionicons name="compass" size={80} color={theme.colors.primary} />
              <View style={styles.qiblaArrow}>
                <Ionicons
                  name="arrow-up"
                  size={30}
                  color={theme.colors.error}
                />
              </View>
            </View>
            <Text style={styles.qiblaText}>Qibla Direction: 45° NE</Text>
          </View>
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Settings</Text>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons
              name="calculator"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.settingText}>Calculation Method</Text>
            <Text style={styles.settingValue}>Muslim World League</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons
              name="notifications"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.settingText}>Prayer Notifications</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons
              name="volume-high"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.settingText}>Adhan Sound</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function createStyles(theme: Theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
    },
    header: {
      backgroundColor: theme.colors.surface,
      padding: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 16,
      color: theme.colors.textSecondary,
    },
    locationInfo: {
      backgroundColor: theme.colors.surface,
      padding: 15,
      margin: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    locationText: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: theme.colors.text,
    },
    changeLocationButton: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      backgroundColor: theme.colors.primary,
      borderRadius: 15,
    },
    changeLocationText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    prayerTimesContainer: {
      margin: 15,
    },
    prayerCard: {
      backgroundColor: theme.colors.surface,
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    prayerInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    prayerName: {
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    prayerTime: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    qiblaSection: {
      margin: 15,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
      color: theme.colors.text,
    },
    qiblaContainer: {
      backgroundColor: theme.colors.surface,
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    compassContainer: {
      position: 'relative',
      marginBottom: 15,
    },
    qiblaArrow: {
      position: 'absolute',
      top: 25,
      left: 25,
    },
    qiblaText: {
      fontSize: 16,
      color: theme.colors.textSecondary,
    },
    settingsSection: {
      margin: 15,
    },
    settingItem: {
      backgroundColor: theme.colors.surface,
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    settingText: {
      flex: 1,
      marginLeft: 15,
      fontSize: 16,
      color: theme.colors.text,
    },
    settingValue: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginRight: 10,
    },
  });
}
