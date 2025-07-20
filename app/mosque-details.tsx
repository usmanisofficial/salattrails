import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MosqueDetailsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View style={styles.mosqueImage}>
            <Ionicons name="business" size={80} color="#fff" />
          </View>
          <View style={styles.mosqueInfo}>
            <Text style={styles.mosqueName}>Central Mosque</Text>
            <Text style={styles.mosqueAddress}>
              123 Main Street, City, Country
            </Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>4.8 (120 reviews)</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prayer Times</Text>
          <View style={styles.prayerTimesGrid}>
            <View style={styles.prayerTimeItem}>
              <Text style={styles.prayerName}>Fajr</Text>
              <Text style={styles.prayerTime}>5:30 AM</Text>
            </View>
            <View style={styles.prayerTimeItem}>
              <Text style={styles.prayerName}>Dhuhr</Text>
              <Text style={styles.prayerTime}>12:30 PM</Text>
            </View>
            <View style={styles.prayerTimeItem}>
              <Text style={styles.prayerName}>Asr</Text>
              <Text style={styles.prayerTime}>3:45 PM</Text>
            </View>
            <View style={styles.prayerTimeItem}>
              <Text style={styles.prayerName}>Maghrib</Text>
              <Text style={styles.prayerTime}>6:20 PM</Text>
            </View>
            <View style={styles.prayerTimeItem}>
              <Text style={styles.prayerName}>Isha</Text>
              <Text style={styles.prayerTime}>7:45 PM</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Facilities</Text>
          <View style={styles.facilitiesContainer}>
            <View style={styles.facilityItem}>
              <Ionicons name="water" size={20} color="#4CAF50" />
              <Text style={styles.facilityText}>Wudu Area</Text>
            </View>
            <View style={styles.facilityItem}>
              <Ionicons name="car" size={20} color="#4CAF50" />
              <Text style={styles.facilityText}>Parking</Text>
            </View>
            <View style={styles.facilityItem}>
              <Ionicons name="wifi" size={20} color="#4CAF50" />
              <Text style={styles.facilityText}>WiFi</Text>
            </View>
            <View style={styles.facilityItem}>
              <Ionicons name="accessibility" size={20} color="#4CAF50" />
              <Text style={styles.facilityText}>Wheelchair Access</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.contactItem}>
            <Ionicons name="call" size={20} color="#4CAF50" />
            <Text style={styles.contactText}>+1 234 567 8900</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="mail" size={20} color="#4CAF50" />
            <Text style={styles.contactText}>info@centralmosque.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="globe" size={20} color="#4CAF50" />
            <Text style={styles.contactText}>www.centralmosque.com</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions</Text>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="add-circle" size={24} color="#4CAF50" />
            <Text style={styles.actionButtonText}>Mark as Visited</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="star" size={24} color="#4CAF50" />
            <Text style={styles.actionButtonText}>Rate This Mosque</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share" size={24} color="#4CAF50" />
            <Text style={styles.actionButtonText}>Share with Friends</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="navigate" size={24} color="#4CAF50" />
            <Text style={styles.actionButtonText}>Get Directions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Reviews</Text>

          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={styles.reviewerInfo}>
                <View style={styles.reviewerAvatar}>
                  <Text style={styles.reviewerAvatarText}>A</Text>
                </View>
                <View>
                  <Text style={styles.reviewerName}>Ahmed Ali</Text>
                  <View style={styles.reviewStars}>
                    <Ionicons name="star" size={12} color="#FFD700" />
                    <Ionicons name="star" size={12} color="#FFD700" />
                    <Ionicons name="star" size={12} color="#FFD700" />
                    <Ionicons name="star" size={12} color="#FFD700" />
                    <Ionicons name="star" size={12} color="#FFD700" />
                  </View>
                </View>
              </View>
              <Text style={styles.reviewDate}>2 days ago</Text>
            </View>
            <Text style={styles.reviewText}>
              Beautiful mosque with excellent facilities. The prayer area is
              spacious and well-maintained.
            </Text>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  mosqueImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  mosqueInfo: {
    flex: 1,
  },
  mosqueName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  mosqueAddress: {
    fontSize: 14,
    color: '#e8f5e8',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    color: '#e8f5e8',
  },
  section: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  prayerTimesGrid: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  prayerTimeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  prayerName: {
    fontSize: 16,
    color: '#333',
  },
  prayerTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  facilitiesContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  facilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  facilityText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  contactItem: {
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
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  actionButton: {
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
  actionButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  reviewCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewerAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  reviewerAvatarText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  reviewStars: {
    flexDirection: 'row',
  },
  reviewDate: {
    fontSize: 12,
    color: '#999',
  },
  reviewText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
