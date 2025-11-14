import { create } from "zustand";

interface AppState {
  accessToken: string | null;
  refreshToken: string | null;

  setAccessToken: (t: string | null) => void;
  setRefreshToken: (t: string | null) => void;

  logout: () => void;

  // auth control
  isAuthenticated: boolean;
  permissions: string[];
}

export const useAppStore = create<AppState>((set) => ({
  accessToken: null,
  refreshToken: null,

  setAccessToken: (t) => set({ accessToken: t, isAuthenticated: !!t }),
  setRefreshToken: (t) => set({ refreshToken: t }),

  logout: () =>
    set({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      permissions: [],
    }),

  isAuthenticated: false,
  permissions: [],
}));
