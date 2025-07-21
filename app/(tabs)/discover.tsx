import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
//use theme from config/theme.ts
import { useTheme } from '../config/ThemeContext';
export default function DiscoverScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={20}
            color={theme.colors.textSecondary}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for mosques..."
            placeholderTextColor={theme.colors.textSecondary}
          />
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            console.log('Opening filter options...');
          }}
        >
          <Ionicons name="filter" size={20} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nearby Mosques</Text>
          <View style={styles.mosqueCard}>
            <View style={styles.mosqueInfo}>
              <Text style={styles.mosqueName}>Central Mosque</Text>
              <Text style={styles.mosqueAddress}>123 Main Street, City</Text>
              <Text style={styles.mosqueDistance}>0.5 km away</Text>
            </View>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => router.push('/mosque-details')}
            >
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Mosques</Text>
          <View style={styles.mosqueCard}>
            <View style={styles.mosqueInfo}>
              <Text style={styles.mosqueName}>Grand Mosque</Text>
              <Text style={styles.mosqueAddress}>456 Oak Avenue, City</Text>
              <Text style={styles.mosqueRating}>⭐ 4.8 (120 reviews)</Text>
            </View>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => router.push('/mosque-details')}
            >
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesContainer}>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => {
                console.log('Filtering by nearby mosques...');
              }}
            >
              <Ionicons
                name="location"
                size={24}
                color={theme.colors.primary}
              />
              <Text style={styles.categoryText}>Nearby</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => {
                console.log('Filtering by top rated mosques...');
              }}
            >
              <Ionicons name="star" size={24} color={theme.colors.primary} />
              <Text style={styles.categoryText}>Top Rated</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => router.push('/prayer-times')}
            >
              <Ionicons name="time" size={24} color={theme.colors.primary} />
              <Text style={styles.categoryText}>Prayer Times</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => {
                console.log('Opening Qibla direction...');
              }}
            >
              <Ionicons name="compass" size={24} color={theme.colors.primary} />
              <Text style={styles.categoryText}>Qibla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    searchContainer: {
      flexDirection: 'row',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
    },
    searchBox: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      borderRadius: 25,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      marginRight: theme.spacing.sm,
    },
    searchInput: {
      flex: 1,
      marginLeft: theme.spacing.sm,
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.text,
    },
    filterButton: {
      padding: theme.spacing.sm,
    },
    content: {
      flex: 1,
    },
    section: {
      margin: theme.spacing.md,
    },
    sectionTitle: {
      fontSize: theme.typography.fontSize.lg,
      fontWeight: theme.typography.fontWeight.bold,
      marginBottom: theme.spacing.sm,
      color: theme.colors.text,
    },
    mosqueCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.sm,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...theme.shadows.md,
    },
    mosqueInfo: {
      flex: 1,
    },
    mosqueName: {
      fontSize: theme.typography.fontSize.base,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    mosqueAddress: {
      fontSize: theme.typography.fontSize.sm,
      color: theme.colors.textSecondary,
      marginBottom: 3,
    },
    mosqueDistance: {
      fontSize: theme.typography.fontSize.xs,
      color: theme.colors.primary,
    },
    mosqueRating: {
      fontSize: theme.typography.fontSize.xs,
      color: theme.colors.warning,
    },
    viewButton: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: 20,
    },
    viewButtonText: {
      color: '#202020',
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.bold,
    },
    categoriesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    categoryCard: {
      backgroundColor: theme.colors.surface,
      width: '48%',
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
      ...theme.shadows.md,
    },
    categoryText: {
      marginTop: theme.spacing.sm,
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
    },
  });
