"use client";

import { useState, useEffect } from "react";

export type User = {
  name: string;
  email: string;
};

const DUMMY_USERS = [
  { email: "virgiaryagunaalif@gmail.com", password: "123456", name: "Alif Virgi Aryaguna" },
  { email: "alif@momobil.id", password: "123456", name: "Alif Virgi Aryaguna" },
  { email: "081234567890", password: "123456", name: "Alif Virgi Aryaguna" },
  { email: "user@test.com", password: "password", name: "User Test" },
];

const STORAGE_KEY = "momobil_user";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {}
  }, []);

  const login = (id: string, password: string): boolean => {
    const found = DUMMY_USERS.find(
      (u) => (u.email === id.trim()) && u.password === password
    );
    if (found) {
      const userData = { name: found.name, email: found.email };
      setUser(userData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { user, login, logout };
}
