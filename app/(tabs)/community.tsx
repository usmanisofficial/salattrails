import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useTheme } from '../hooks/useTheme';

export default function CommunityScreen() {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView style={styles.content}>
        <View
          style={[styles.header, { backgroundColor: theme.colors.surface }]}
        >
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
            Community
          </Text>
          <Text
            style={[
              styles.headerSubtitle,
              { color: theme.colors.textSecondary },
            ]}
          >
            Connect with fellow believers
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Recent Activity
          </Text>

          <View
            style={[
              styles.activityCard,
              { backgroundColor: theme.colors.surface, ...theme.shadows.md },
            ]}
          >
            <View style={styles.userInfo}>
              <View
                style={[
                  styles.avatar,
                  { backgroundColor: theme.colors.primary },
                ]}
              >
                <Text
                  style={[styles.avatarText, { color: theme.colors.secondary }]}
                >
                  A
                </Text>
              </View>
              <View style={styles.activityInfo}>
                <Text style={[styles.userName, { color: theme.colors.text }]}>
                  Ahmed Ali
                </Text>
                <Text
                  style={[
                    styles.activityText,
                    { color: theme.colors.textSecondary },
                  ]}
                >
                  visited Central Mosque
                </Text>
                <Text
                  style={[
                    styles.activityTime,
                    { color: theme.colors.textSecondary },
                  ]}
                >
                  2 hours ago
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.likeButton}
              onPress={() => {
                console.log('Liking activity...');
              }}
            >
              <Ionicons
                name="heart-outline"
                size={20}
                color={theme.colors.textSecondary}
              />
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.activityCard,
              { backgroundColor: theme.colors.surface, ...theme.shadows.md },
            ]}
          >
            <View style={styles.userInfo}>
              <View
                style={[
                  styles.avatar,
                  { backgroundColor: theme.colors.primary },
                ]}
              >
                <Text
                  style={[styles.avatarText, { color: theme.colors.secondary }]}
                >
                  F
                </Text>
              </View>
              <View style={styles.activityInfo}>
                <Text style={[styles.userName, { color: theme.colors.text }]}>
                  Fatima Khan
                </Text>
                <Text
                  style={[
                    styles.activityText,
                    { color: theme.colors.textSecondary },
                  ]}
                >
                  added a new prayer location
                </Text>
                <Text
                  style={[
                    styles.activityTime,
                    { color: theme.colors.textSecondary },
                  ]}
                >
                  5 hours ago
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.likeButton}
              onPress={() => {
                console.log('Unliking activity...');
              }}
            >
              <Ionicons name="heart" size={20} color={theme.colors.error} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Friends
          </Text>

          <View style={styles.friendsContainer}>
            <TouchableOpacity
              style={[
                styles.friendCard,
                { backgroundColor: theme.colors.surface, ...theme.shadows.md },
              ]}
            >
              <View
                style={[
                  styles.avatar,
                  { backgroundColor: theme.colors.primary },
                ]}
              >
                <Text
                  style={[styles.avatarText, { color: theme.colors.secondary }]}
                >
                  M
                </Text>
              </View>
              <Text style={[styles.friendName, { color: theme.colors.text }]}>
                Mohammed
              </Text>
              <Text
                style={[
                  styles.friendStats,
                  { color: theme.colors.textSecondary },
                ]}
              >
                15 mosques
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.friendCard,
                { backgroundColor: theme.colors.surface, ...theme.shadows.md },
              ]}
            >
              <View
                style={[
                  styles.avatar,
                  { backgroundColor: theme.colors.primary },
                ]}
              >
                <Text
                  style={[styles.avatarText, { color: theme.colors.secondary }]}
                >
                  S
                </Text>
              </View>
              <Text style={[styles.friendName, { color: theme.colors.text }]}>
                Sarah
              </Text>
              <Text
                style={[
                  styles.friendStats,
                  { color: theme.colors.textSecondary },
                ]}
              >
                8 mosques
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.friendCard,
                { backgroundColor: theme.colors.surface, ...theme.shadows.md },
              ]}
            >
              <View
                style={[
                  styles.avatar,
                  { backgroundColor: theme.colors.primary },
                ]}
              >
                <Text
                  style={[styles.avatarText, { color: theme.colors.secondary }]}
                >
                  I
                </Text>
              </View>
              <Text style={[styles.friendName, { color: theme.colors.text }]}>
                Ibrahim
              </Text>
              <Text
                style={[
                  styles.friendStats,
                  { color: theme.colors.textSecondary },
                ]}
              >
                23 mosques
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Community Stats
          </Text>

          <View style={styles.statsContainer}>
            <View
              style={[
                styles.statCard,
                { backgroundColor: theme.colors.surface, ...theme.shadows.md },
              ]}
            >
              <Text
                style={[styles.statNumber, { color: theme.colors.primary }]}
              >
                1,234
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: theme.colors.textSecondary },
                ]}
              >
                Total Users
              </Text>
            </View>
            <View
              style={[
                styles.statCard,
                { backgroundColor: theme.colors.surface, ...theme.shadows.md },
              ]}
            >
              <Text
                style={[styles.statNumber, { color: theme.colors.primary }]}
              >
                5,678
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: theme.colors.textSecondary },
                ]}
              >
                Mosques Visited
              </Text>
            </View>
            <View
              style={[
                styles.statCard,
                { backgroundColor: theme.colors.surface, ...theme.shadows.md },
              ]}
            >
              <Text
                style={[styles.statNumber, { color: theme.colors.primary }]}
              >
                89
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: theme.colors.textSecondary },
                ]}
              >
                Countries
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Suggested Friends
          </Text>

          <View
            style={[
              styles.suggestedFriend,
              { backgroundColor: theme.colors.surface, ...theme.shadows.md },
            ]}
          >
            <View style={styles.userInfo}>
              <View
                style={[
                  styles.avatar,
                  { backgroundColor: theme.colors.primary },
                ]}
              >
                <Text
                  style={[styles.avatarText, { color: theme.colors.secondary }]}
                >
                  Z
                </Text>
              </View>
              <View style={styles.activityInfo}>
                <Text style={[styles.userName, { color: theme.colors.text }]}>
                  Zara Ahmed
                </Text>
                <Text
                  style={[
                    styles.activityText,
                    { color: theme.colors.textSecondary },
                  ]}
                >
                  12 mutual friends
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={[
                styles.addButton,
                { backgroundColor: theme.colors.primary },
              ]}
              onPress={() => {
                console.log('Adding friend...');
              }}
            >
              <Text style={[styles.addButtonText, { color: '#202020' }]}>
                Add
              </Text>
            </TouchableOpacity>
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
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
  },
  section: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  activityCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  activityText: {
    fontSize: 14,
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
  },
  likeButton: {
    padding: 5,
  },
  friendsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  friendCard: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  friendName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  friendStats: {
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  suggestedFriend: {
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
