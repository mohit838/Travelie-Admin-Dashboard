import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  accessToken: string | null;
  refreshToken: string | null;

  setAccessToken: (t: string | null) => void;
  setRefreshToken: (t: string | null) => void;

  logout: () => void;

  isAuthenticated: boolean;
  permissions: string[];
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      permissions: [],

      setAccessToken: (t) => {
        set({
          accessToken: t,
          isAuthenticated: !!t,
        });
      },

      setRefreshToken: (t) => {
        set({ refreshToken: t });
      },

      logout: () => {
        set({
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          permissions: [],
        });
      },
    }),
    {
      name: "app-auth",
    }
  )
);
