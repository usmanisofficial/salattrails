import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../config/ThemeContext';
import { router } from 'expo-router';

export default function MapScreen() {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View
        style={[styles.mapContainer, { backgroundColor: theme.colors.surface }]}
      >
        <View
          style={[
            styles.mapPlaceholder,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <Ionicons name="map" size={64} color={theme.colors.primary} />
          <Text
            style={[styles.mapPlaceholderText, { color: theme.colors.text }]}
          >
            Map View
          </Text>
          <Text
            style={[
              styles.mapPlaceholderSubtext,
              { color: theme.colors.textSecondary },
            ]}
          >
            Interactive map showing your visited mosques
          </Text>
        </View>
      </View>

      <View
        style={[styles.controls, { backgroundColor: theme.colors.surface }]}
      >
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => {
            // Handle location functionality
            console.log('Getting current location...');
          }}
        >
          <Ionicons name="locate" size={20} color={theme.colors.primary} />
          <Text
            style={[styles.controlButtonText, { color: theme.colors.text }]}
          >
            My Location
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => router.push('/add-mosque')}
        >
          <Ionicons name="add" size={20} color={theme.colors.primary} />
          <Text
            style={[styles.controlButtonText, { color: theme.colors.text }]}
          >
            Add Mosque
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => {
            // Handle filter functionality
            console.log('Opening filter options...');
          }}
        >
          <Ionicons name="filter" size={20} color={theme.colors.primary} />
          <Text
            style={[styles.controlButtonText, { color: theme.colors.text }]}
          >
            Filter
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.legend, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.legendTitle, { color: theme.colors.text }]}>
          Legend
        </Text>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendDot,
              { backgroundColor: theme.colors.primary },
            ]}
          />
          <Text style={[styles.legendText, { color: theme.colors.text }]}>
            Visited Mosques
          </Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[styles.legendDot, { backgroundColor: theme.colors.info }]}
          />
          <Text style={[styles.legendText, { color: theme.colors.text }]}>
            Nearby Mosques
          </Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendDot,
              { backgroundColor: theme.colors.warning },
            ]}
          />
          <Text style={[styles.legendText, { color: theme.colors.text }]}>
            Current Location
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  mapPlaceholderSubtext: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  controlButton: {
    alignItems: 'center',
    padding: 10,
  },
  controlButtonText: {
    fontSize: 12,
    marginTop: 5,
  },
  legend: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
});
