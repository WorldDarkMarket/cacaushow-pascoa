'use client';

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type User = { name: string; email: string };

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
  loginOpen: boolean;
  setLoginOpen: (open: boolean) => void;
  registerOpen: boolean;
  setRegisterOpen: (open: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem("auth.user");
      return raw ? JSON.parse(raw) : null;
    }
    return null;
  });
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [users, setUsers] = useState<User[]>(() => {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem("auth.users");
      return raw ? JSON.parse(raw) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("auth.user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("auth.users", JSON.stringify(users));
    }
  }, [users]);

  const signIn: AuthContextType["signIn"] = async (email, password) => {
    if (!email.includes("@") || password.length < 3) throw new Error("Credenciais inválidas");
    const name = email.split("@")[0];
    setUser({ name, email });
    setLoginOpen(false);
  };

  const signUp: AuthContextType["signUp"] = async (name, email, password) => {
    if (!name || !email.includes("@") || password.length < 3) throw new Error("Dados inválidos");
    const exists = users.some((u) => u.email === email);
    if (exists) throw new Error("E-mail já cadastrado");
    const newUser = { name, email };
    setUsers((prev) => [...prev, newUser]);
    setUser(newUser);
    setRegisterOpen(false);
  };

  const signOut = () => {
    setUser(null);
  };

  const value: AuthContextType = useMemo(
    () => ({ user, signIn, signUp, signOut, loginOpen, setLoginOpen, registerOpen, setRegisterOpen }),
    [user, signIn, signUp, signOut, loginOpen, setLoginOpen, registerOpen, setRegisterOpen]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext missing");
  return ctx;
}
