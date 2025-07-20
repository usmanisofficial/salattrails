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

- **Frontend:** React Native with Expo
- **Backend:** Firebase (Authentication, Firestore, Storage)
- **Maps:** react-native-maps
- **State Management:** Redux Toolkit
- **Additional Libraries:**
  - `expo-location` - Precise location tracking
  - `expo-image-picker` - Photo and video uploads
  - `expo-camera` - Camera functionality
  - `@react-navigation/native` - Navigation
  - `react-native-vector-icons` - Icons

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
   npm install
   # or
   yarn install
   ```

3. **Set up Firebase**

   - Create a Firebase project
   - Enable Authentication, Firestore, and Storage
   - Add your Firebase configuration to `app/config/firebase.js`

4. **Start the development server**

   ```bash
   npx expo start
   ```

5. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your device

## 📂 Project Structure

```
salattrails/
├── app/
│   ├── _layout.tsx          # Root layout component
│   ├── index.tsx            # Entry point
│   ├── components/          # Reusable components
│   │   ├── Map/
│   │   ├── Profile/
│   │   └── Common/
│   ├── screens/             # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── MapScreen.tsx
│   ├── services/            # API and external services
│   │   ├── firebase.ts
│   │   └── location.ts
│   ├── store/               # State management
│   │   ├── slices/
│   │   └── index.ts
│   └── utils/               # Utility functions
├── assets/                  # Static assets
│   ├── images/
│   └── fonts/
├── app.json                 # Expo configuration
├── package.json             # Dependencies
└── tsconfig.json           # TypeScript configuration
```

## 🎯 Development Guidelines

### Code Quality

- **TypeScript:** Use TypeScript for type safety
- **ESLint & Prettier:** Maintain consistent code formatting
- **Component Structure:** Follow React Native best practices
- **Performance:** Implement lazy loading and memoization

### State Management

- **Redux Toolkit:** Use for global state management
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
