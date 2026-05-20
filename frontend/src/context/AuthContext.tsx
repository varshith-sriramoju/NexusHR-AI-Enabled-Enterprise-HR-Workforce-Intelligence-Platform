import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    getToken,
    removeToken,
    saveToken,
} from "../utils/token";

interface AuthContextType {
    token: string | null;
    role: string | null;

    login: (
        token: string,
        role: string
    ) => void;

    logout: () => void;
}

const AuthContext =
    createContext<AuthContextType | undefined>(
        undefined
    );

export const AuthProvider = ({
                                 children,
                             }: {
    children: React.ReactNode;
}) => {

    const [token, setToken] =
        useState<string | null>(null);

    const [role, setRole] =
        useState<string | null>(null);

    useEffect(() => {
        setToken(getToken());

        setRole(
            localStorage.getItem("role")
        );
    }, []);

    const login = (
        newToken: string,
        newRole: string
    ) => {

        saveToken(newToken);

        localStorage.setItem(
            "role",
            newRole
        );

        setToken(newToken);
        setRole(newRole);
    };

    const logout = () => {

        removeToken();

        localStorage.removeItem("role");

        setToken(null);
        setRole(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                role,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {

    const context =
        useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside provider"
        );
    }

    return context;
};