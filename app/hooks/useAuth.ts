import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  loginUser,
  registerUser,
  logoutUser,
  forgotPassword,
  clearError,
} from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading, error } = useAppSelector(
    (state) => state.auth
  );

  const login = async (email: string, password: string) => {
    try {
      await dispatch(loginUser({ email, password })).unwrap();
    } catch (error) {
      // Error is already handled in the slice
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      await dispatch(registerUser({ email, password, name })).unwrap();
    } catch (error) {
      // Error is already handled in the slice
      throw error;
    }
  };

  const logout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
    } catch (error) {
      // Error is already handled in the slice
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await dispatch(forgotPassword(email)).unwrap();
    } catch (error) {
      // Error is already handled in the slice
      throw error;
    }
  };

  const clearAuthError = () => {
    dispatch(clearError());
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    resetPassword,
    clearAuthError,
  };
};

// Default export for Expo Router
export default useAuth;
