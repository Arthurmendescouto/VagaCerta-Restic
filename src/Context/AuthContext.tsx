import React, { createContext, useContext, useState } from 'react';

interface AuthContextData {
  userId: string | null;
  setUserId: (userId: string) => void;
}

// Criação do contexto
export const AuthContext = createContext<AuthContextData | undefined>(undefined);

// Definição do AuthProvider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir o contexto
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
