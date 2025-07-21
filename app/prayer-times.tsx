import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from './config/ThemeContext';

export default function PrayerTimesScreen() {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            Prayer Times
          </Text>
          <Text
            style={[styles.subtitle, { color: theme.colors.textSecondary }]}
          >
            Today's Prayer Schedule
          </Text>
        </View>

        <View style={styles.locationInfo}>
          <Ionicons name="location" size={20} color={theme.colors.primary} />
          <Text style={[styles.locationText, { color: theme.colors.text }]}>
            Current Location
          </Text>
          <TouchableOpacity style={styles.changeLocationButton}>
            <Text
              style={[
                styles.changeLocationText,
                { color: theme.colors.primary },
              ]}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.prayerTimesContainer}>
          <View
            style={[
              styles.prayerCard,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.prayerInfo}>
              <Ionicons name="sunny" size={24} color={theme.colors.warning} />
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Fajr
              </Text>
            </View>
            <Text style={[styles.prayerTime, { color: theme.colors.text }]}>
              5:30 AM
            </Text>
          </View>

          <View
            style={[
              styles.prayerCard,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.prayerInfo}>
              <Ionicons name="sunny" size={24} color={theme.colors.warning} />
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Sunrise
              </Text>
            </View>
            <Text style={[styles.prayerTime, { color: theme.colors.text }]}>
              7:15 AM
            </Text>
          </View>

          <View
            style={[
              styles.prayerCard,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.prayerInfo}>
              <Ionicons name="sunny" size={24} color={theme.colors.warning} />
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Dhuhr
              </Text>
            </View>
            <Text style={[styles.prayerTime, { color: theme.colors.text }]}>
              12:30 PM
            </Text>
          </View>

          <View
            style={[
              styles.prayerCard,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.prayerInfo}>
              <Ionicons name="sunny" size={24} color={theme.colors.warning} />
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Asr
              </Text>
            </View>
            <Text style={[styles.prayerTime, { color: theme.colors.text }]}>
              3:45 PM
            </Text>
          </View>

          <View
            style={[
              styles.prayerCard,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.prayerInfo}>
              <Ionicons name="moon" size={24} color={theme.colors.info} />
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Maghrib
              </Text>
            </View>
            <Text style={[styles.prayerTime, { color: theme.colors.text }]}>
              6:20 PM
            </Text>
          </View>

          <View
            style={[
              styles.prayerCard,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.prayerInfo}>
              <Ionicons name="moon" size={24} color={theme.colors.info} />
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Isha
              </Text>
            </View>
            <Text style={[styles.prayerTime, { color: theme.colors.text }]}>
              7:45 PM
            </Text>
          </View>
        </View>

        <View style={styles.qiblaSection}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Qibla Direction
          </Text>
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
            <Text style={[styles.qiblaText, { color: theme.colors.text }]}>
              Qibla Direction: 45° NE
            </Text>
          </View>
        </View>

        <View style={styles.settingsSection}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Settings
          </Text>

          <TouchableOpacity
            style={[
              styles.settingItem,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Ionicons
              name="calculator"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={[styles.settingText, { color: theme.colors.text }]}>
              Calculation Method
            </Text>
            <Text
              style={[
                styles.settingValue,
                { color: theme.colors.textSecondary },
              ]}
            >
              Muslim World League
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.settingItem,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Ionicons
              name="notifications"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={[styles.settingText, { color: theme.colors.text }]}>
              Prayer Notifications
            </Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.settingItem,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Ionicons
              name="volume-high"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={[styles.settingText, { color: theme.colors.text }]}>
              Adhan Sound
            </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#e8f5e8',
  },
  locationInfo: {
    backgroundColor: '#fff',
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
    color: '#333',
  },
  changeLocationButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#4CAF50',
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
    backgroundColor: '#fff',
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
    color: '#333',
  },
  prayerTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  qiblaSection: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  qiblaContainer: {
    backgroundColor: '#fff',
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
    color: '#666',
  },
  settingsSection: {
    margin: 15,
  },
  settingItem: {
    backgroundColor: '#fff',
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
    color: '#333',
  },
  settingValue: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
});
