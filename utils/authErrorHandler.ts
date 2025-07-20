// Firebase Authentication Error Handler
// Provides user-friendly error messages for common Firebase auth errors

export interface AuthError {
  code: string;
  message: string;
  userFriendlyMessage: string;
}

export const getAuthErrorMessage = (error: any): string => {
  const errorCode = error?.code || 'unknown';

  switch (errorCode) {
    // Login Errors
    case 'auth/user-not-found':
      return 'No account found with this email address.';
    case 'auth/wrong-password':
      return 'Incorrect password.';
    case 'auth/invalid-email':
      return 'Invalid email address.';
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please check your credentials.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/operation-not-allowed':
      return 'Email/password sign-in is not enabled. Please contact support.';

    // Registration Errors
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';

    // Password Reset Errors
    case 'auth/too-many-requests':
      return 'Too many requests. Please try again later.';

    // Network and System Errors
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    case 'auth/internal-error':
      return 'An internal error occurred. Please try again.';
    case 'auth/invalid-api-key':
      return 'Invalid API key. Please contact support.';
    case 'auth/app-not-authorized':
      return 'App not authorized. Please contact support.';
    case 'auth/configuration-not-found':
      return 'Configuration error. Please contact support.';

    // Default
    default:
      return `Authentication error: ${
        error?.message || 'Unknown error occurred'
      }`;
  }
};

export const isNetworkError = (error: any): boolean => {
  return error?.code === 'auth/network-request-failed';
};

export const isConfigurationError = (error: any): boolean => {
  return [
    'auth/operation-not-allowed',
    'auth/invalid-api-key',
    'auth/app-not-authorized',
    'auth/configuration-not-found',
  ].includes(error?.code);
};

export const isUserError = (error: any): boolean => {
  return [
    'auth/user-not-found',
    'auth/wrong-password',
    'auth/invalid-email',
    'auth/invalid-credential',
    'auth/email-already-in-use',
    'auth/weak-password',
  ].includes(error?.code);
};

export const shouldRetry = (error: any): boolean => {
  return [
    'auth/network-request-failed',
    'auth/internal-error',
    'auth/too-many-requests',
  ].includes(error?.code);
};

// Error categories for UI handling
export const getErrorCategory = (
  error: any
): 'user' | 'network' | 'system' | 'configuration' => {
  if (isUserError(error)) return 'user';
  if (isNetworkError(error)) return 'network';
  if (isConfigurationError(error)) return 'configuration';
  return 'system';
};
