import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../config/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, themeMode, setThemeMode, isDark } = useTheme();

  const getThemeModeDisplayName = (mode: string) => {
    switch (mode) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      case 'system':
        return 'System Theme';
      default:
        return 'System Theme';
    }
  };

  const getThemeModeIcon = (mode: string) => {
    switch (mode) {
      case 'light':
        return 'sunny';
      case 'dark':
        return 'moon';
      case 'system':
        return 'settings';
      default:
        return 'settings';
    }
  };

  const showThemeOptions = () => {
    Alert.alert('Choose Theme', 'Select your preferred theme mode', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Light Mode',
        onPress: () => setThemeMode('light'),
      },
      {
        text: 'Dark Mode',
        onPress: () => setThemeMode('dark'),
      },
      {
        text: 'System Theme',
        onPress: () => setThemeMode('system'),
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.colors.surface }]}
      onPress={showThemeOptions}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={getThemeModeIcon(themeMode)}
            size={24}
            color={theme.colors.primary}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            {getThemeModeDisplayName(themeMode)}
          </Text>
          <Text
            style={[styles.subtitle, { color: theme.colors.textSecondary }]}
          >
            {themeMode === 'system'
              ? 'Follows your device settings'
              : `Currently using ${themeMode} theme`}
          </Text>
        </View>
        <View style={styles.arrowContainer}>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme.colors.textSecondary}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
  },
  arrowContainer: {
    marginLeft: 8,
  },
});

export default ThemeToggle;
