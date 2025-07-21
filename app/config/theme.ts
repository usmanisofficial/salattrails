export const lightTheme = {
  colors: {
    primary: '#8B4513', // Saddle Brown - warm, spiritual color
    secondary: '#fff', // Forest Green - natural, peaceful
    text: '#1A1A1A', // Very dark gray for better readability
    textSecondary: '#666666', // Medium gray
    background: '#FAFAFA', // Very light gray background
    backgroundSecondary: '#F0F0F0', // Light gray secondary background
    surface: '#FFFFFF', // Pure white surface
    border: '#E0E0E0', // Light gray border
    error: '#D32F2F', // Red error
    success: '#388E3C', // Green success
    warning: '#F57C00', // Orange warning
    info: '#1976D2', // Blue info
  },
  typography: {
    fontFamily: {
      regular: 'Jana LT',
      bold: 'Jana LT Bold',
      light: 'Jana LT Light',
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 28,
      '4xl': 32,
      '5xl': 36,
    },
    fontWeight: {
      light: '300' as const,
      normal: '400' as const,
      medium: '500' as const,
      semibold: '600' as const,
      bold: '700' as const,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 3,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.16,
      shadowRadius: 10,
      elevation: 8,
    },
  },
};

export const darkTheme = {
  colors: {
    primary: '#E2BE7F', // Gold
    secondary: '#FFFFFF', // White for dark theme
    text: '#FFFFFF', // White
    textSecondary: '#B0B0B0', // Light gray
    background: '#202020', // Dark background
    backgroundSecondary: '#2A2A2A', // Slightly lighter dark
    surface: '#2A2A2A', // Dark surface
    border: '#404040', // Dark border
    error: '#FF6B6B',
    success: '#4CAF50',
    warning: '#FFA726',
    info: '#2196F3',
  },
  typography: {
    fontFamily: {
      regular: 'Jana LT',
      bold: 'Jana LT Bold',
      light: 'Jana LT Light',
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 28,
      '4xl': 32,
      '5xl': 36,
    },
    fontWeight: {
      light: '300' as const,
      normal: '400' as const,
      medium: '500' as const,
      semibold: '600' as const,
      bold: '700' as const,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

// Default theme (currently dark theme as per your request)
export const theme = darkTheme;

export type Theme = typeof lightTheme;

// Default export for Expo Router
export default theme;
