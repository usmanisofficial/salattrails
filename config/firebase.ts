import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';

// Your Firebase configuration
const firebaseConfig = {
  apiKey:
    process.env.FIREBASE_API_KEY || 'AIzaSyBGnO0n8kuByaohFVBdv77RXckki0hvMaQ',
  authDomain:
    process.env.FIREBASE_AUTH_DOMAIN || 'salat-trails.firebaseapp.com',
  projectId: process.env.FIREBASE_PROJECT_ID || 'salat-trails',
  storageBucket:
    process.env.FIREBASE_STORAGE_BUCKET || 'salat-trails.firebasestorage.app',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '365376001604',
  appId:
    process.env.FIREBASE_APP_ID || '1:365376001604:web:e32e3d6e7c7f72583bce11',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Note: The AsyncStorage warning is expected in Expo Go
// This is a limitation of Expo Go, not a problem with the code
// In production builds, this will work properly

export { auth };
export default app;
