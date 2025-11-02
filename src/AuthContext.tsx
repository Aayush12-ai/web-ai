import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  points: number;
  login: () => void;
  logout: () => void;
  addPoints: (amount: number) => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    if (loggedIn) {
      setIsAuthenticated(true);
      const savedPoints = localStorage.getItem('points');
      if (savedPoints) {
        setPoints(parseInt(savedPoints, 10));
      }
    }
  }, []);

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    setPoints(0);
    localStorage.setItem('points', '0');
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('points');
    setIsAuthenticated(false);
    setPoints(0);
  };

  const addPoints = (amount: number) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    localStorage.setItem('points', newPoints.toString());
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, points, login, logout, addPoints }}>
      {children}
    </AuthContext.Provider>
  );
};
