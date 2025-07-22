import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchNearbyMosques } from '../store/slices/mosqueSlice';
import { router } from 'expo-router';

interface Mosque {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  distance?: number;
  type: 'visited' | 'nearby' | 'favorite';
}

const { width, height } = Dimensions.get('window');

export default function InteractiveMap() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  const { nearbyMosques, isLoading } = useAppSelector((state) => state.mosque);
  const { profile } = useAppSelector((state) => state.user);

  const mapRef = useRef<MapView>(null);
  const [userLocation, setUserLocation] =
    useState<Location.LocationObject | null>(null);
  const [region, setRegion] = useState<Region>({
    latitude: 40.7128,
    longitude: -74.006,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [locationPermission, setLocationPermission] = useState<boolean>(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState<boolean>(true);

  const styles = createStyles(theme);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (userLocation && locationPermission) {
      const newRegion = {
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setRegion(newRegion);

      // Fetch nearby mosques
      dispatch(fetchNearbyMosques());
    }
  }, [userLocation, locationPermission, dispatch]);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status === 'granted');

      if (status === 'granted') {
        getCurrentLocation();
      } else {
        Alert.alert(
          'Location Permission Required',
          'Please enable location access to see nearby mosques and get accurate prayer times.',
          [{ text: 'OK' }]
        );
        setIsLoadingLocation(false);
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
      setIsLoadingLocation(false);
    }
  };

  const getCurrentLocation = async () => {
    try {
      setIsLoadingLocation(true);
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setUserLocation(location);
    } catch (error) {
      console.error('Error getting current location:', error);
      Alert.alert('Location Error', 'Unable to get your current location.');
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const handleMapPress = (event: any) => {
    // Handle map press if needed
    console.log('Map pressed at:', event.nativeEvent.coordinate);
  };

  const handleMarkerPress = (mosque: Mosque) => {
    // Navigate to mosque details
    router.push(`/mosque-details?id=${mosque.id}`);
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'visited':
        return theme.colors.primary;
      case 'favorite':
        return theme.colors.warning;
      case 'nearby':
      default:
        return theme.colors.info;
    }
  };

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'visited':
        return 'checkmark-circle';
      case 'favorite':
        return 'heart';
      case 'nearby':
      default:
        return 'location';
    }
  };

  const centerOnUserLocation = () => {
    if (userLocation && mapRef.current) {
      const newRegion = {
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      mapRef.current.animateToRegion(newRegion, 1000);
    }
  };

  if (isLoadingLocation) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        onPress={handleMapPress}
        showsUserLocation={true}
        showsMyLocationButton={false}
        showsCompass={true}
        showsScale={true}
        showsBuildings={true}
        mapType="standard"
      >
        {/* User Location Marker */}
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
            }}
            title="Your Location"
            description="You are here"
            pinColor={theme.colors.warning}
          />
        )}

        {/* Mosque Markers */}
        {nearbyMosques.map((mosque: any) => (
          <Marker
            key={mosque.id}
            coordinate={{
              latitude: mosque.coordinates?.latitude || 0,
              longitude: mosque.coordinates?.longitude || 0,
            }}
            title={mosque.name}
            description={mosque.address}
            onPress={() => handleMarkerPress(mosque)}
            pinColor={getMarkerColor(mosque.type || 'nearby')}
          />
        ))}
      </MapView>

      {/* Map Controls */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={centerOnUserLocation}
        >
          <Ionicons name="locate" size={24} color={theme.colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => router.push('/add-mosque')}
        >
          <Ionicons name="add" size={24} color={theme.colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => router.push('/(tabs)/discover')}
        >
          <Ionicons name="search" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Map Legend */}
      <View style={styles.legend}>
        <Text style={styles.legendTitle}>Map Legend</Text>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendDot,
              { backgroundColor: theme.colors.primary },
            ]}
          />
          <Text style={styles.legendText}>Visited Mosques</Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[styles.legendDot, { backgroundColor: theme.colors.info }]}
          />
          <Text style={styles.legendText}>Nearby Mosques</Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendDot,
              { backgroundColor: theme.colors.warning },
            ]}
          />
          <Text style={styles.legendText}>Favorites</Text>
        </View>
      </View>

      {/* Location Status */}
      {!locationPermission && (
        <View style={styles.locationWarning}>
          <Ionicons name="warning" size={20} color={theme.colors.warning} />
          <Text style={styles.locationWarningText}>
            Location access required for nearby mosques
          </Text>
        </View>
      )}
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    map: {
      flex: 1,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    loadingText: {
      marginTop: 10,
      fontSize: 16,
      color: theme.colors.text,
    },
    controls: {
      position: 'absolute',
      right: 20,
      top: 100,
      backgroundColor: theme.colors.surface,
      borderRadius: 25,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    controlButton: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.colors.surface,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    legend: {
      position: 'absolute',
      bottom: 100,
      left: 20,
      backgroundColor: theme.colors.surface,
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    legendTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.colors.text,
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
      color: theme.colors.text,
    },
    locationWarning: {
      position: 'absolute',
      top: 50,
      left: 20,
      right: 20,
      backgroundColor: theme.colors.warning,
      padding: 10,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    locationWarningText: {
      marginLeft: 8,
      color: '#202020',
      fontSize: 14,
      fontWeight: '500',
    },
  });
