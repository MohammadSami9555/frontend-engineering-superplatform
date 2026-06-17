import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState } from "../types";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      expiresAt: null,
      isAuthenticated: false,

      login: (user, token, expiresAt) =>
        set({
          user,
          token,
          expiresAt,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          expiresAt: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "jwt-auth-storage",
    }
  )
);