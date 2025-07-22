# SalatTrails Project Review Guidelines

## Project Overview

SalatTrails is a React Native/Expo application for Muslims to discover mosques, track prayer times, and manage their spiritual journey. Built with TypeScript, Redux Toolkit, and Firebase.

## Security Focus Areas

- **Firebase Authentication**: Ensure proper user authentication and authorization
- **Location Permissions**: Validate location access and handle permission states
- **Input Validation**: Sanitize user inputs in forms and API calls
- **Environment Variables**: Never expose Firebase keys or sensitive data in code
- **AsyncStorage Security**: Validate data before storing/retrieving from AsyncStorage

## Architecture Patterns

- **Redux Toolkit**: Use createSlice, createAsyncThunk for state management
- **Expo Router**: File-based routing with proper navigation patterns
- **Custom Hooks**: Encapsulate Redux logic in reusable hooks (useAuth, useTheme)
- **TypeScript**: Strict typing for all components, interfaces, and functions
- **Component Composition**: Prefer composition over inheritance

## Code Quality Standards

- **Naming Conventions**:
  - camelCase for functions, variables, and properties
  - PascalCase for components and interfaces
  - UPPER_SNAKE_CASE for constants
- **File Structure**: Follow Expo Router conventions for file organization
- **Imports**: Group imports (React, third-party, local) with proper spacing
- **Comments**: Use JSDoc for complex functions and components

## Common Issues to Check

- **Memory Leaks**: Ensure useEffect cleanup functions for subscriptions
- **Redux State**: Check for proper state immutability and selector optimization
- **Navigation**: Verify proper navigation patterns and back button handling
- **Error Boundaries**: Implement error boundaries for React components
- **Performance**: Avoid unnecessary re-renders with proper dependency arrays
- **Accessibility**: Include proper accessibility props (accessibilityLabel, etc.)

## Testing Guidelines

- **Unit Tests**: Test Redux slices and utility functions
- **Component Tests**: Test component rendering and user interactions
- **Integration Tests**: Test navigation flows and data persistence
- **E2E Tests**: Test complete user journeys

## Performance Considerations

- **Bundle Size**: Monitor and optimize bundle size
- **Image Optimization**: Use appropriate image formats and sizes
- **Lazy Loading**: Implement lazy loading for non-critical components
- **Caching**: Implement proper caching strategies for API calls

## Platform-Specific Considerations

- **iOS**: Check iOS-specific permissions and UI guidelines
- **Android**: Verify Android-specific permissions and back navigation
- **Web**: Ensure responsive design and web-specific features work
- **Cross-Platform**: Test on multiple devices and screen sizes

## Dependencies Management

- **Expo SDK**: Use compatible versions with current Expo SDK
- **Native Modules**: Ensure proper linking for native dependencies
- **Peer Dependencies**: Resolve peer dependency conflicts
- **Security Updates**: Keep dependencies updated for security patches
