import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Unauthorized from "../pages/Unauthorized";
import ProtectedRoute from "../components/ProtectedRoute";
import Employees from "../pages/Employees";
import Attendance from "../pages/Attendance";
import Payroll from "../pages/Payroll";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

const AppRoutes = () => {
    return (
        <Routes>

            {/* Default Route */}
            <Route
                path="/"
                element={<Navigate to="/login" />}
            />

            <Route path="/login" element={<Login />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/employees"
                element={
                    <ProtectedRoute>
                        <Employees />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/attendance"
                element={
                    <ProtectedRoute>
                        <Attendance />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/payroll"
                element={
                    <ProtectedRoute>
                        <Payroll />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/analytics"
                element={
                    <ProtectedRoute>
                        <Analytics />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/reports"
                element={
                    <ProtectedRoute>
                        <Reports />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/settings"
                element={
                    <ProtectedRoute>
                        <Settings />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/unauthorized"
                element={<Unauthorized />}
            />
        </Routes>
    );
};

export default AppRoutes;