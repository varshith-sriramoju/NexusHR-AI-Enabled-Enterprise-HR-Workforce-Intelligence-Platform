import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

interface RoleBasedRouteProps {
    children: JSX.Element;
    requiredRole: string;
}

const RoleBasedRoute = ({
    children,
    requiredRole,
}: RoleBasedRouteProps) => {
    const { token, role } = useAuth();

    // Check if user is authenticated
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Check if user has the required role
    if (role !== requiredRole) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default RoleBasedRoute;

