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
- **State Management:** React Context + AsyncStorage
- **Package Manager:** Bun
- **Maps:** react-native-maps
- **Additional Libraries:**
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
│   ├── store/               # State management
│   │   └── {slices}/        # Redux slices
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
├── contexts/                # React contexts
│   └── AuthContext.tsx      # Authentication context
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

## 🎯 Development Guidelines

### Code Quality

- **TypeScript:** Use TypeScript for type safety
- **ESLint & Prettier:** Maintain consistent code formatting
- **Component Structure:** Follow React Native best practices
- **Performance:** Implement lazy loading and memoization

### State Management

- **React Context:** Use for global state management (AuthContext)
- **Local State:** React hooks for component-specific state
- **Persistence:** AsyncStorage for offline data

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
