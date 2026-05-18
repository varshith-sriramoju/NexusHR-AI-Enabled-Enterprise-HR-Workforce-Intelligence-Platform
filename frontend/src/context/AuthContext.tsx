import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import { getToken, removeToken, saveToken } from "../utils/token";

interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export const AuthProvider = ({
                                 children,
                             }: {
    children: React.ReactNode;
}) => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        setToken(getToken());
    }, []);

    const login = (newToken: string) => {
        saveToken(newToken);
        setToken(newToken);
    };

    const logout = () => {
        removeToken();
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside provider");
    }

    return context;
};