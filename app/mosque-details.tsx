import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from './config/ThemeContext';

export default function MosqueDetailsScreen() {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView style={styles.content}>
        <View
          style={[styles.header, { backgroundColor: theme.colors.surface }]}
        >
          <View
            style={[
              styles.mosqueImage,
              { backgroundColor: theme.colors.primary },
            ]}
          >
            <Ionicons
              name="business"
              size={80}
              color={theme.colors.secondary}
            />
          </View>
          <View style={styles.mosqueInfo}>
            <Text style={[styles.mosqueName, { color: theme.colors.text }]}>
              Central Mosque
            </Text>
            <Text
              style={[
                styles.mosqueAddress,
                { color: theme.colors.textSecondary },
              ]}
            >
              123 Main Street, City, Country
            </Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color={theme.colors.warning} />
              <Text style={[styles.rating, { color: theme.colors.text }]}>
                4.8 (120 reviews)
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Prayer Times
          </Text>
          <View
            style={[
              styles.prayerTimesGrid,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View
              style={[
                styles.prayerTimeItem,
                {
                  backgroundColor: theme.colors.surface,
                  borderBottomColor: theme.colors.border,
                },
              ]}
            >
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Fajr
              </Text>
              <Text
                style={[styles.prayerTime, { color: theme.colors.primary }]}
              >
                5:30 AM
              </Text>
            </View>
            <View
              style={[
                styles.prayerTimeItem,
                {
                  backgroundColor: theme.colors.surface,
                  borderBottomColor: theme.colors.border,
                },
              ]}
            >
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Dhuhr
              </Text>
              <Text
                style={[styles.prayerTime, { color: theme.colors.primary }]}
              >
                12:30 PM
              </Text>
            </View>
            <View
              style={[
                styles.prayerTimeItem,
                {
                  backgroundColor: theme.colors.surface,
                  borderBottomColor: theme.colors.border,
                },
              ]}
            >
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Asr
              </Text>
              <Text
                style={[styles.prayerTime, { color: theme.colors.primary }]}
              >
                3:45 PM
              </Text>
            </View>
            <View
              style={[
                styles.prayerTimeItem,
                {
                  backgroundColor: theme.colors.surface,
                  borderBottomColor: theme.colors.border,
                },
              ]}
            >
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Maghrib
              </Text>
              <Text
                style={[styles.prayerTime, { color: theme.colors.primary }]}
              >
                6:20 PM
              </Text>
            </View>
            <View
              style={[
                styles.prayerTimeItem,
                {
                  backgroundColor: theme.colors.surface,
                  borderBottomColor: theme.colors.border,
                },
              ]}
            >
              <Text style={[styles.prayerName, { color: theme.colors.text }]}>
                Isha
              </Text>
              <Text
                style={[styles.prayerTime, { color: theme.colors.primary }]}
              >
                7:45 PM
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Facilities
          </Text>
          <View
            style={[
              styles.facilitiesContainer,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View
              style={[
                styles.facilityItem,
                { backgroundColor: theme.colors.surface },
              ]}
            >
              <Ionicons name="water" size={20} color={theme.colors.primary} />
              <Text style={[styles.facilityText, { color: theme.colors.text }]}>
                Wudu Area
              </Text>
            </View>
            <View
              style={[
                styles.facilityItem,
                { backgroundColor: theme.colors.surface },
              ]}
            >
              <Ionicons name="car" size={20} color={theme.colors.primary} />
              <Text style={[styles.facilityText, { color: theme.colors.text }]}>
                Parking
              </Text>
            </View>
            <View
              style={[
                styles.facilityItem,
                { backgroundColor: theme.colors.surface },
              ]}
            >
              <Ionicons name="wifi" size={20} color={theme.colors.primary} />
              <Text style={[styles.facilityText, { color: theme.colors.text }]}>
                WiFi
              </Text>
            </View>
            <View
              style={[
                styles.facilityItem,
                { backgroundColor: theme.colors.surface },
              ]}
            >
              <Ionicons
                name="accessibility"
                size={20}
                color={theme.colors.primary}
              />
              <Text style={[styles.facilityText, { color: theme.colors.text }]}>
                Wheelchair Access
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Contact Information
          </Text>
          <View
            style={[
              styles.contactItem,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Ionicons name="call" size={20} color={theme.colors.primary} />
            <Text style={[styles.contactText, { color: theme.colors.text }]}>
              +1 234 567 8900
            </Text>
          </View>
          <View
            style={[
              styles.contactItem,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Ionicons name="mail" size={20} color={theme.colors.primary} />
            <Text style={[styles.contactText, { color: theme.colors.text }]}>
              info@centralmosque.com
            </Text>
          </View>
          <View
            style={[
              styles.contactItem,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Ionicons name="globe" size={20} color={theme.colors.primary} />
            <Text style={[styles.contactText, { color: theme.colors.text }]}>
              www.centralmosque.com
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Actions
          </Text>

          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: theme.colors.primary },
            ]}
          >
            <Ionicons name="add-circle" size={24} color="#202020" />
            <Text style={[styles.actionButtonText, { color: '#202020' }]}>
              Mark as Visited
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: theme.colors.primary },
            ]}
          >
            <Ionicons name="star" size={24} color="#202020" />
            <Text style={[styles.actionButtonText, { color: '#202020' }]}>
              Rate This Mosque
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: theme.colors.primary },
            ]}
          >
            <Ionicons name="share" size={24} color="#202020" />
            <Text style={[styles.actionButtonText, { color: '#202020' }]}>
              Share with Friends
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: theme.colors.primary },
            ]}
          >
            <Ionicons name="navigate" size={24} color="#202020" />
            <Text style={[styles.actionButtonText, { color: '#202020' }]}>
              Get Directions
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Recent Reviews
          </Text>

          <View
            style={[
              styles.reviewCard,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.reviewHeader}>
              <View style={styles.reviewerInfo}>
                <View
                  style={[
                    styles.reviewerAvatar,
                    { backgroundColor: theme.colors.primary },
                  ]}
                >
                  <Text
                    style={[
                      styles.reviewerAvatarText,
                      { color: theme.colors.secondary },
                    ]}
                  >
                    A
                  </Text>
                </View>
                <View>
                  <Text
                    style={[styles.reviewerName, { color: theme.colors.text }]}
                  >
                    Ahmed Ali
                  </Text>
                  <View style={styles.reviewStars}>
                    <Ionicons
                      name="star"
                      size={12}
                      color={theme.colors.warning}
                    />
                    <Ionicons
                      name="star"
                      size={12}
                      color={theme.colors.warning}
                    />
                    <Ionicons
                      name="star"
                      size={12}
                      color={theme.colors.warning}
                    />
                    <Ionicons
                      name="star"
                      size={12}
                      color={theme.colors.warning}
                    />
                    <Ionicons
                      name="star"
                      size={12}
                      color={theme.colors.warning}
                    />
                  </View>
                </View>
              </View>
              <Text
                style={[
                  styles.reviewDate,
                  { color: theme.colors.textSecondary },
                ]}
              >
                2 days ago
              </Text>
            </View>
            <Text
              style={[styles.reviewText, { color: theme.colors.textSecondary }]}
            >
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
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mosqueImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
    marginBottom: 5,
  },
  mosqueAddress: {
    fontSize: 14,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
  },
  section: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  prayerTimesGrid: {
    borderRadius: 10,
    padding: 15,
  },
  prayerTimeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  prayerName: {
    fontSize: 16,
  },
  prayerTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  facilitiesContainer: {
    borderRadius: 10,
    padding: 15,
  },
  facilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  facilityText: {
    marginLeft: 10,
    fontSize: 16,
  },
  contactItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
  },
  actionButton: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  reviewCard: {
    padding: 15,
    borderRadius: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  reviewerAvatarText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  reviewStars: {
    flexDirection: 'row',
  },
  reviewDate: {
    fontSize: 12,
  },
  reviewText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
