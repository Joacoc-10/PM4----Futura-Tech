"use client";
import React, { createContext, useContext, useState } from "react";

type SaveUserPayload = {
  user: IUser;
  token: string;
  login: boolean;
}

type AuthContextType = {
  //States
  user: IUser | null;
  token?: string | null;
  isAuth: boolean | null;

  //Actions
  saveUserData: (data:SaveUserPayload) => void;
  resetUserData: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<AuthContextType["isAuth"]>(null);
  
  const saveUserData = (data:SaveUserPayload) => {
    setUser(data.user)
    setIsAuth(data.login)
    setToken(data.token)
  };

  const resetUserData = () => {
    setUser(null);
    setIsAuth(false);
    setToken(null);
  }


  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      isAuth,
      saveUserData,
      resetUserData 
      }}> {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
  }
  return context;
};
