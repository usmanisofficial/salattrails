export default {
  expo: {
    name: 'SalatTrails',
    slug: 'salattrails',
    scheme: 'salattrails',
    version: '1.0.1',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    userInterfaceStyle: 'automatic',
    runtimeVersion: {
      policy: 'appVersion',
    },
    updates: {
      url: 'https://u.expo.dev/34c1df8e-fff0-40dd-9de0-832ebf004400',
    },
    splash: {
      image: './assets/images/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#4CAF50',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.alpinebird.salattrails',
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          'This app uses location to show nearby mosques and provide prayer times for your area.',
        NSLocationAlwaysAndWhenInUseUsageDescription:
          'This app uses location to show nearby mosques and provide prayer times for your area.',
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      package: 'com.alpinebird.salattrails',
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#4CAF50',
      },
      permissions: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
    },
    web: {
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-updates',
      [
        'expo-location',
        {
          locationAlwaysAndWhenInUsePermission:
            'Allow SalatTrails to use your location to show nearby mosques and provide accurate prayer times.',
        },
      ],
    ],
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      eas: {
        projectId: '34c1df8e-fff0-40dd-9de0-832ebf004400',
      },
    },
  },
};
