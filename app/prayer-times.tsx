import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PrayerTimesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Prayer Times</Text>
          <Text style={styles.subtitle}>Today's Prayer Schedule</Text>
        </View>

        <View style={styles.locationInfo}>
          <Ionicons name="location" size={20} color="#4CAF50" />
          <Text style={styles.locationText}>Current Location</Text>
          <TouchableOpacity style={styles.changeLocationButton}>
            <Text style={styles.changeLocationText}>Change</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.prayerTimesContainer}>
          <View style={styles.prayerCard}>
            <View style={styles.prayerInfo}>
              <Ionicons name="sunny" size={24} color="#FF9800" />
              <Text style={styles.prayerName}>Fajr</Text>
            </View>
            <Text style={styles.prayerTime}>5:30 AM</Text>
          </View>

          <View style={styles.prayerCard}>
            <View style={styles.prayerInfo}>
              <Ionicons name="sunny" size={24} color="#FFC107" />
              <Text style={styles.prayerName}>Sunrise</Text>
            </View>
            <Text style={styles.prayerTime}>7:15 AM</Text>
          </View>

          <View style={styles.prayerCard}>
            <View style={styles.prayerInfo}>
              <Ionicons name="sunny" size={24} color="#FF5722" />
              <Text style={styles.prayerName}>Dhuhr</Text>
            </View>
            <Text style={styles.prayerTime}>12:30 PM</Text>
          </View>

          <View style={styles.prayerCard}>
            <View style={styles.prayerInfo}>
              <Ionicons name="sunny" size={24} color="#FF9800" />
              <Text style={styles.prayerName}>Asr</Text>
            </View>
            <Text style={styles.prayerTime}>3:45 PM</Text>
          </View>

          <View style={styles.prayerCard}>
            <View style={styles.prayerInfo}>
              <Ionicons name="moon" size={24} color="#9C27B0" />
              <Text style={styles.prayerName}>Maghrib</Text>
            </View>
            <Text style={styles.prayerTime}>6:20 PM</Text>
          </View>

          <View style={styles.prayerCard}>
            <View style={styles.prayerInfo}>
              <Ionicons name="moon" size={24} color="#3F51B5" />
              <Text style={styles.prayerName}>Isha</Text>
            </View>
            <Text style={styles.prayerTime}>7:45 PM</Text>
          </View>
        </View>

        <View style={styles.qiblaSection}>
          <Text style={styles.sectionTitle}>Qibla Direction</Text>
          <View style={styles.qiblaContainer}>
            <View style={styles.compassContainer}>
              <Ionicons name="compass" size={80} color="#4CAF50" />
              <View style={styles.qiblaArrow}>
                <Ionicons name="arrow-up" size={30} color="#e74c3c" />
              </View>
            </View>
            <Text style={styles.qiblaText}>Qibla Direction: 45° NE</Text>
          </View>
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Settings</Text>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="calculator" size={24} color="#4CAF50" />
            <Text style={styles.settingText}>Calculation Method</Text>
            <Text style={styles.settingValue}>Muslim World League</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="notifications" size={24} color="#4CAF50" />
            <Text style={styles.settingText}>Prayer Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="volume-high" size={24} color="#4CAF50" />
            <Text style={styles.settingText}>Adhan Sound</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
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
