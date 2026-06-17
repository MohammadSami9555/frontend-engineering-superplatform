export type UserRole = "admin" | "user";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  login: (user: User, token: string) => void;
  logout: () => void;
}