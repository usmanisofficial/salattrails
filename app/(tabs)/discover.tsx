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

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for mosques..."
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            console.log('Opening filter options...');
          }}
        >
          <Ionicons name="filter" size={20} color="#4CAF50" />
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
              <Ionicons name="location" size={24} color="#4CAF50" />
              <Text style={styles.categoryText}>Nearby</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => {
                console.log('Filtering by top rated mosques...');
              }}
            >
              <Ionicons name="star" size={24} color="#4CAF50" />
              <Text style={styles.categoryText}>Top Rated</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => router.push('/prayer-times')}
            >
              <Ionicons name="time" size={24} color="#4CAF50" />
              <Text style={styles.categoryText}>Prayer Times</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => {
                console.log('Opening Qibla direction...');
              }}
            >
              <Ionicons name="compass" size={24} color="#4CAF50" />
              <Text style={styles.categoryText}>Qibla</Text>
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
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    padding: 10,
  },
  content: {
    flex: 1,
  },
  section: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  mosqueCard: {
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
  mosqueInfo: {
    flex: 1,
  },
  mosqueName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  mosqueAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  mosqueDistance: {
    fontSize: 12,
    color: '#4CAF50',
  },
  mosqueRating: {
    fontSize: 12,
    color: '#FF9800',
  },
  viewButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
