import { create } from 'zustand';
import { storage } from '@utils/storage';
import { authService } from '@services/authService';

/**
 * Global auth state managed by Zustand.
 * Persists user & token to localStorage via storage util.
 */
export const useAuthStore = create((set) => ({
  user: storage.getUser(),
  token: storage.getToken(),
  isAuthenticated: !!storage.getToken(),
  loading: false,

  setAuth: (user, token) => {
    storage.setToken(token);
    storage.setUser(user);
    set({ user, token, isAuthenticated: true });
  },

  logout: () => {
    storage.clearAuth();
    set({ user: null, token: null, isAuthenticated: false });
  },

  fetchUser: async () => {
    set({ loading: true });
    try {
      const user = await authService.getMe();
      storage.setUser(user);
      set({ user, loading: false });
    } catch {
      storage.clearAuth();
      set({ user: null, token: null, isAuthenticated: false, loading: false });
    }
  },
}));
