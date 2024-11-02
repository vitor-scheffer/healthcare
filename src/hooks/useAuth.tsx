import { router } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextData = {
  user?: User;
  token?: string;
  handleSignIn: () => Promise<void>;
  handleSignOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);

  const handleSignIn = async () => {};

  const handleSignOut = () => {
    setUser(undefined);
    setToken(undefined);

    router.replace("/auth");
  };

  return (
    <AuthContext.Provider value={{ user, token, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { useAuth, AuthProvider };
