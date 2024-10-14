import { createContext, useContext, useEffect, useState } from "react";
import { TOKEN_KEY } from "../config";
import apiFetch from "../services/apiFetch";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const user = await apiFetch("users/profile");
        setUser(user);
        setIsLoading(false);
      }catch(error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    }

    fetch();
  }, []);

  const login = async (credentials) => {
    const response = await apiFetch("auth/login", { body: credentials });
    const { token, ...user } = response;
    localStorage.setItem(TOKEN_KEY, token);
    setUser(user);
  }

  const register = async (body) => {
    const response = await apiFetch("auth/register", { body });
    const { token, ...user } = response;
    localStorage.setItem(TOKEN_KEY, token);
    setUser(user);
  }

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        login,
        logout,
        register
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
