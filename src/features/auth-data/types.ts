export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

export interface AuthState {
  user: User | null;
  token: string | null;

  expiresAt: number | null;

  isAuthenticated: boolean;

  login: (
    user: User,
    token: string,
    expiresAt: number
  ) => void;

  logout: () => void;
}