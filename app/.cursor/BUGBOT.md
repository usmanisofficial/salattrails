# App Directory Review Guidelines

## Expo Router Structure

- **File-based Routing**: Follow Expo Router v3 file-based routing conventions
- **Layout Files**: Use `_layout.tsx` for navigation structure and shared UI
- **Tab Navigation**: Implement proper tab navigation with `(tabs)/` directory
- **Modal Routes**: Use `(modals)/` for modal screens
- **Dynamic Routes**: Implement `[id].tsx` for dynamic content

## Navigation Patterns

- **Stack Navigation**: Use Stack.Screen for hierarchical navigation
- **Tab Navigation**: Implement bottom tabs with proper icons and labels
- **Deep Linking**: Ensure proper deep linking configuration
- **Back Navigation**: Handle back button and gesture navigation properly

## Component Guidelines

- **Default Exports**: All route components must have default exports
- **Loading States**: Implement proper loading states for async operations
- **Error Handling**: Use error boundaries and proper error states
- **Accessibility**: Include proper accessibility props for navigation

## Authentication Flow

- **Protected Routes**: Implement proper authentication guards
- **Auth State**: Handle authentication state changes properly
- **Redirect Logic**: Implement proper redirect logic for auth flows
- **Session Management**: Handle session persistence and expiration

## Performance Considerations

- **Lazy Loading**: Implement lazy loading for route components
- **Preloading**: Preload critical routes for better UX
- **Memory Management**: Clean up resources when components unmount
- **Bundle Splitting**: Optimize bundle size with proper code splitting

## Common Issues

- **Missing Default Exports**: Ensure all route files export default components
- **Navigation Props**: Pass proper navigation props to child components
- **State Persistence**: Handle state persistence across navigation
- **Deep Link Handling**: Implement proper deep link handling
- **Platform Differences**: Handle iOS/Android navigation differences
