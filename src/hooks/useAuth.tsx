import { router } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextData = {
  isLoading: boolean;
  user?: User;
  token?: string;
  signIn: () => Promise<void>;
  signUp: () => Promise<void>;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const fakeUser: User = {
    email: "vitorscheffer.dev@gmail.com",
    id: "1",
    name: "Vitor Scheffer",
  };

  const signIn = async () => {
    setIsLoading(true);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setUser(fakeUser);
    setIsLoading(false);
  };

  const signUp = async () => {
    setIsLoading(true);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setIsLoading(false);
  };

  const signOut = () => {
    setIsLoading(true);
    setUser(undefined);
    setToken(undefined);

    setIsLoading(false);
    router.replace("/auth");
  };

  return (
    <AuthContext.Provider
      value={{ isLoading, user, token, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { useAuth, AuthProvider };
