import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';
import { router } from 'expo-router';
import { useTheme } from '../hooks/useTheme';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const handleLogout = async () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: async () => {
          try {
            console.log('Logging out...');
            await logout();
            console.log('Logout successful, navigating to auth...');
            // Navigate to auth screen after logout
            router.replace('/login');
          } catch (error) {
            console.error('Logout error:', error);
            Alert.alert('Error', 'Failed to sign out. Please try again.');
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>U</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user?.name || 'User Name'}</Text>
              <Text style={styles.userEmail}>
                {user?.email || 'user@example.com'}
              </Text>
              <Text style={styles.joinDate}>Member since 2024</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={20} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Mosques Visited</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Countries</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Friends</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Journey</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push('/(tabs)/')}
          >
            <Ionicons name="map" size={24} color={theme.colors.primary} />
            <Text style={styles.menuText}>My Visited Mosques</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              console.log('Opening prayer history...');
            }}
          >
            <Ionicons name="calendar" size={24} color={theme.colors.primary} />
            <Text style={styles.menuText}>Prayer History</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              console.log('Opening achievements...');
            }}
          >
            <Ionicons name="trophy" size={24} color={theme.colors.primary} />
            <Text style={styles.menuText}>Achievements</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              console.log('Opening notifications settings...');
            }}
          >
            <Ionicons
              name="notifications"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.menuText}>Notifications</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              console.log('Opening privacy settings...');
            }}
          >
            <Ionicons
              name="shield-checkmark"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.menuText}>Privacy</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              console.log('Opening language settings...');
            }}
          >
            <Ionicons name="language" size={24} color={theme.colors.primary} />
            <Text style={styles.menuText}>Language</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              console.log('Opening help & support...');
            }}
          >
            <Ionicons
              name="help-circle"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.menuText}>Help & Support</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push('/edit-profile')}
          >
            <Ionicons name="person" size={24} color={theme.colors.primary} />
            <Text style={styles.menuText}>Edit Profile</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              console.log('Opening change password...');
            }}
          >
            <Ionicons
              name="lock-closed"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.menuText}>Change Password</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Ionicons name="log-out" size={24} color={theme.colors.error} />
            <Text style={[styles.menuText, { color: theme.colors.error }]}>
              Sign Out
            </Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              console.log('Opening about SalatTrails...');
            }}
          >
            <Ionicons
              name="information-circle"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.menuText}>About SalatTrails</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              console.log('Opening terms of service...');
            }}
          >
            <Ionicons
              name="document-text"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.menuText}>Terms of Service</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              console.log('Opening privacy policy...');
            }}
          >
            <Ionicons name="shield" size={24} color={theme.colors.primary} />
            <Text style={styles.menuText}>Privacy Policy</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
    },
    header: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.lg,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    profileInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing.md,
    },
    avatarText: {
      color: theme.colors.secondary,
      fontSize: theme.typography.fontSize['2xl'],
      fontWeight: theme.typography.fontWeight.bold,
    },
    userInfo: {
      flex: 1,
    },
    userName: {
      fontSize: theme.typography.fontSize.xl,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    userEmail: {
      fontSize: theme.typography.fontSize.sm,
      color: theme.colors.textSecondary,
      marginBottom: 2,
    },
    joinDate: {
      fontSize: theme.typography.fontSize.xs,
      color: theme.colors.textSecondary,
    },
    editButton: {
      padding: theme.spacing.sm,
    },
    statsSection: {
      flexDirection: 'row',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      marginBottom: theme.spacing.sm,
    },
    statCard: {
      flex: 1,
      alignItems: 'center',
    },
    statNumber: {
      fontSize: theme.typography.fontSize['2xl'],
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.primary,
      marginBottom: theme.spacing.xs,
    },
    statLabel: {
      fontSize: theme.typography.fontSize.xs,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    section: {
      margin: theme.spacing.md,
    },
    sectionTitle: {
      fontSize: theme.typography.fontSize.lg,
      fontWeight: theme.typography.fontWeight.bold,
      marginBottom: theme.spacing.md,
      color: theme.colors.text,
    },
    menuItem: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.sm,
      flexDirection: 'row',
      alignItems: 'center',
      ...theme.shadows.sm,
    },
    menuText: {
      flex: 1,
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.text,
      marginLeft: theme.spacing.md,
    },
  });
