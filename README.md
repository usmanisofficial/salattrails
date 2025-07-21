# SalatTrails 🕌📍

A React Native Expo application designed for Muslims to document and share their prayer locations, connect with a global community, and discover mosques worldwide.

## 📱 About This App

SalatTrails helps Muslims track their spiritual journey by documenting the mosques and places where they've performed their prayers. Connect with fellow believers, discover new mosques, and maintain a digital record of your worship experiences across the globe.

## ✨ Features

### 🗺️ Map Integration

- **Real-time Location Tracking:** View your current location and discover nearby mosques
- **Interactive Mosque Markers:** Add visited mosques with precise GPS coordinates
- **Rich Location Data:** Include mosque names, photos, and videos for each visit
- **Global Mosque Discovery:** Explore mosques around the world through an interactive map

### 👤 Social Features

- **Personal Profiles:** Showcase your global mosque visits and spiritual journey
- **Community Connection:** Follow friends and view their visited mosques
- **Social Feed:** Timeline of recent mosque visits from your network
- **Community Building:** Connect with Muslims worldwide through shared experiences

### 🌐 Global Mosque Database

- **Comprehensive Search:** Find mosques worldwide with advanced search capabilities
- **Community Contributions:** Users can update and enrich mosque information
- **Verified Data:** Access reliable mosque details and information
- **Local Insights:** Discover prayer times and Qibla direction for any location

### 💡 Enhanced Features

- **Prayer Times Integration:** Access accurate local prayer times
- **Qibla Direction:** Find the direction of the Kaaba from anywhere
- **Stories & Reflections:** Share personal experiences and spiritual insights
- **Media Support:** Upload photos and videos of your mosque visits

## 🛠️ Tech Stack

- **Frontend:** React Native with Expo (SDK 53)
- **Navigation:** Expo Router (file-based routing)
- **Backend:** Firebase (Authentication, Firestore, Storage)
- **Authentication:** Firebase Email/Password Authentication
- **State Management:** Redux Toolkit + React Redux
- **Package Manager:** Bun
- **Maps:** react-native-maps
- **Additional Libraries:**
  - `@reduxjs/toolkit` - Redux state management
  - `react-redux` - React Redux bindings
  - `expo-location` - Precise location tracking
  - `expo-image-picker` - Photo and video uploads
  - `expo-camera` - Camera functionality
  - `@react-native-async-storage/async-storage` - Local data persistence
  - `react-native-vector-icons` - Icons
  - `firebase` - Firebase Web SDK for authentication

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/salattrails.git
   cd salattrails
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

   **Note**: The project uses Redux Toolkit and React Redux for state management. These dependencies are already included in the package.json.

3. **Set up Firebase**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password provider
   - Enable Firestore Database
   - Enable Storage (if needed)
   - Copy your Firebase config to `config/firebase.ts`

4. **Environment Variables (Optional)**

   Create a `.env` file in the root directory:

   ```env
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   FIREBASE_APP_ID=your_app_id
   ```

5. **Start the development server**

   ```bash
   bun run expo start
   # or
   npx expo start
   ```

6. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your device

## 📂 Project Structure

```
salattrails/
├── app/                     # Main application directory (Expo Router)
│   ├── _layout.tsx          # Root layout component
│   ├── index.tsx            # Entry point
│   ├── (auth)/              # Authentication screens
│   │   ├── _layout.tsx      # Auth layout
│   │   ├── login.tsx        # Login screen
│   │   ├── register.tsx     # Registration screen
│   │   └── forgot-password.tsx # Password reset screen
│   ├── (tabs)/              # Main app tabs
│   │   ├── _layout.tsx      # Tab layout
│   │   ├── index.tsx        # Home tab
│   │   ├── discover.tsx     # Discover tab
│   │   ├── map.tsx          # Map tab
│   │   ├── community.tsx    # Community tab
│   │   └── profile.tsx      # Profile tab
│   ├── components/          # Reusable components
│   │   ├── Map/             # Map-related components
│   │   ├── Profile/         # Profile-related components
│   │   └── Common/          # Common UI components
│   ├── config/              # Configuration files
│   ├── screens/             # Additional screen components
│   ├── services/            # API and external services
│   ├── store/               # Redux state management
│   │   ├── index.ts         # Store configuration
│   │   ├── hooks.ts         # Typed Redux hooks
│   │   ├── ReduxProvider.tsx # Redux provider component
│   │   └── slices/          # Redux slices
│   │       ├── authSlice.ts      # Authentication state
│   │       ├── mosqueSlice.ts    # Mosque data management
│   │       ├── prayerTimesSlice.ts # Prayer times management
│   │       ├── userSlice.ts      # User profile management
│   │       ├── themeSlice.ts     # Theme management
│   │       └── locationSlice.ts  # Location services
│   ├── hooks/               # Custom hooks
│   │   ├── useAuth.ts       # Authentication hook
│   │   └── useTheme.ts      # Theme management hook
│   ├── utils/               # Utility functions
│   ├── add-mosque.tsx       # Add mosque screen
│   ├── edit-profile.tsx     # Edit profile screen
│   ├── mosque-details.tsx   # Mosque details screen
│   ├── prayer-times.tsx     # Prayer times screen
│   └── settings.tsx         # Settings screen
├── assets/                  # Static assets
│   ├── images/              # App images and icons
│   └── fonts/               # Custom fonts
├── components/              # Global components
│   └── LoadingScreen.tsx    # Loading screen component
├── config/                  # Global configuration
│   └── firebase.ts          # Firebase configuration
├── contexts/                # Legacy React contexts (deprecated)
│   └── AuthContext.tsx      # Authentication context (migrated to Redux)
├── services/                # Global services
├── app.config.js            # Expo app configuration
├── app.json                 # Expo configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── bun.lock                 # Bun lock file
└── README.md               # Project documentation
```

## 🔐 Authentication Features

### ✅ Implemented Features

- **Email/Password Registration** - Create new user accounts
- **Email/Password Login** - Secure user authentication
- **Password Reset** - Forgot password functionality
- **User Profile Management** - Update display name and profile
- **Session Management** - Automatic login state handling
- **Error Handling** - User-friendly error messages

### ⚠️ Known Limitations (Expo Go)

- **Session Persistence** - Sessions reset on app restart (Expo Go limitation)
- **AsyncStorage Warning** - Expected warning in development (doesn't affect functionality)

### 🚀 Production Ready

- **Development Builds** - Full session persistence support
- **Production Builds** - Complete authentication functionality
- **Firebase Web SDK** - Compatible with Expo Go and production builds

## 🗃️ Redux State Management

### Overview

SalatTrails uses Redux Toolkit for comprehensive state management, providing a scalable and predictable way to handle application state.

### Store Structure

The Redux store is organized into six main slices:

#### 🔐 **Auth Slice** (`authSlice.ts`)

- **Purpose**: Manages user authentication state
- **Features**:
  - User login/logout/registration
  - Password reset functionality
  - Authentication state persistence
  - Error handling for auth operations
- **State**:
  ```typescript
  {
    user: User | null,
    isAuthenticated: boolean,
    isLoading: boolean,
    error: string | null
  }
  ```

#### 🕌 **Mosque Slice** (`mosqueSlice.ts`)

- **Purpose**: Handles mosque data and search functionality
- **Features**:
  - Fetch nearby and popular mosques
  - Search mosques by name/location
  - Mosque details management
  - Filtering and sorting capabilities
- **State**:
  ```typescript
  {
    mosques: Mosque[],
    nearbyMosques: Mosque[],
    popularMosques: Mosque[],
    selectedMosque: Mosque | null,
    searchQuery: string,
    filters: FilterOptions,
    isLoading: boolean,
    error: string | null
  }
  ```

#### 🕐 **Prayer Times Slice** (`prayerTimesSlice.ts`)

- **Purpose**: Manages prayer times and calculations
- **Features**:
  - Automatic prayer time calculations
  - Next prayer detection
  - Time until next prayer
  - Location-based prayer times
- **State**:
  ```typescript
  {
    prayerTimes: PrayerTime | null,
    nextPrayer: string | null,
    timeUntilNextPrayer: string | null,
    currentLocation: Location | null,
    date: string,
    isLoading: boolean,
    error: string | null
  }
  ```

#### 👤 **User Slice** (`userSlice.ts`)

- **Purpose**: Manages user profile and preferences
- **Features**:
  - User profile data
  - Preferences management
  - Favorite mosques tracking
  - Visited mosques history
- **State**:
  ```typescript
  {
    profile: UserProfile | null,
    isLoading: boolean,
    isUpdating: boolean,
    error: string | null
  }
  ```

#### 🎨 **Theme Slice** (`themeSlice.ts`)

- **Purpose**: Manages app theming
- **Features**:
  - Light/dark/system theme support
  - Theme persistence
  - Dynamic theme switching
  - System theme detection
- **State**:
  ```typescript
  {
    theme: Theme,
    themeMode: 'light' | 'dark' | 'system',
    isDark: boolean,
    isLoading: boolean,
    error: string | null
  }
  ```

#### 📍 **Location Slice** (`locationSlice.ts`)

- **Purpose**: Handles location services
- **Features**:
  - Current location tracking
  - Location permission management
  - Last known location persistence
  - Location-based features
- **State**:
  ```typescript
  {
    currentLocation: Location | null,
    lastKnownLocation: Location | null,
    hasPermission: boolean,
    isLocationEnabled: boolean,
    isLoading: boolean,
    error: string | null
  }
  ```

### Custom Hooks

#### `useAuth()`

Provides authentication functionality with Redux state:

```typescript
const { user, isAuthenticated, isLoading, login, logout } = useAuth();
```

#### `useTheme()`

Provides theme management functionality:

```typescript
const { theme, themeMode, setThemeMode } = useTheme();
```

### Usage Examples

#### Using Redux Hooks

```typescript
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchNearbyMosques } from '../store/slices/mosqueSlice';

function MyComponent() {
  const dispatch = useAppDispatch();
  const { nearbyMosques, isLoading } = useAppSelector((state) => state.mosque);
  const { theme } = useAppSelector((state) => state.theme);

  useEffect(() => {
    dispatch(fetchNearbyMosques());
  }, [dispatch]);

  // Component logic...
}
```

#### Using Custom Hooks

```typescript
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

function LoginScreen() {
  const { login, isLoading, error } = useAuth();
  const { theme } = useTheme();

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Component logic...
}
```

### Benefits of Redux Implementation

1. **Better Performance**: Shallow equality checks for re-renders
2. **Developer Tools**: Redux DevTools for debugging
3. **Predictable State**: Immutable state updates
4. **Middleware Support**: Easy integration of side effects
5. **Scalability**: Better for large applications
6. **Testing**: Easier to test state logic
7. **TypeScript**: Full type safety throughout

### Migration from Context API

The application has been migrated from React Context API to Redux Toolkit for better state management:

#### Before (Context API)

```typescript
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../config/ThemeContext';

function MyComponent() {
  const { user, login } = useAuth();
  const { theme } = useTheme();
  // Component logic...
}
```

#### After (Redux)

```typescript
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

function MyComponent() {
  const { user, login } = useAuth();
  const { theme } = useTheme();
  // Component logic...
}
```

#### Key Changes

- **AuthContext** → **authSlice** + **useAuth hook**
- **ThemeContext** → **themeSlice** + **useTheme hook**
- **Provider Wrapping** → **ReduxProvider**
- **State Access** → **useAppSelector** and **useAppDispatch**

## 🚀 Current Status

### ✅ What's Working

- **Redux Implementation**: Complete and functional
- **Authentication**: Login, register, logout, password reset
- **Theme Management**: Light/dark/system theme switching
- **Navigation**: File-based routing with Expo Router
- **Firebase Integration**: Authentication and database ready
- **TypeScript**: Full type safety throughout
- **Development Environment**: Ready for development

### 🔄 In Progress

- **Mosque Data**: Mock data implemented, ready for real API integration
- **Prayer Times**: Basic structure ready for API integration
- **Location Services**: Basic structure ready for implementation
- **User Profiles**: Basic structure ready for enhancement

### 📋 Next Steps

1. **API Integration**: Connect to real mosque and prayer time APIs
2. **Location Services**: Implement GPS and location tracking
3. **Map Features**: Add interactive map functionality
4. **Social Features**: Implement community and sharing features
5. **Media Upload**: Add photo and video upload capabilities
6. **Offline Support**: Implement offline data caching
7. **Push Notifications**: Add prayer time reminders

## 🎯 Development Guidelines

### Code Quality

- **TypeScript:** Use TypeScript for type safety
- **ESLint & Prettier:** Maintain consistent code formatting
- **Component Structure:** Follow React Native best practices
- **Performance:** Implement lazy loading and memoization

### State Management

- **Redux Toolkit:** Use for global state management
- **Custom Hooks:** `useAuth()` and `useTheme()` for common functionality
- **Local State:** React hooks for component-specific state
- **Persistence:** AsyncStorage for offline data
- **Async Operations:** Redux Toolkit's `createAsyncThunk` for API calls

### Security

- **Firebase Rules:** Implement proper security rules
- **Authentication:** Secure user authentication flow
- **Data Validation:** Validate all user inputs
- **Privacy:** Respect user privacy and data protection

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Email:** [usmanisofficial@outlook.com](mailto:usmanisofficial@outlook.com)
- **Issues:** [GitHub Issues](https://github.com/yourusername/salattrails/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/salattrails/discussions)

## 🙏 Acknowledgments

- Thanks to the Muslim community for inspiration
- Contributors and beta testers
- Open source libraries and tools used in this project

---

**May SalatTrails help you on your spiritual journey and strengthen the bonds of our global Muslim community.** 🕌✨
