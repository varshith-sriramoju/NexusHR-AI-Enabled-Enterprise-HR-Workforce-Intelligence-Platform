import { Navigate } from "react-router-dom";

interface Props {
    requiredRole: string[];
    children: React.ReactNode;
}

const RoleBasedRoute = ({
    requiredRole,
    children
}: Props) => {
    const userRole = localStorage.getItem("role");

    if (!userRole) {
        return <Navigate to="/login" />;
    }

    if (!requiredRole.includes(userRole)) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default RoleBasedRoute;

