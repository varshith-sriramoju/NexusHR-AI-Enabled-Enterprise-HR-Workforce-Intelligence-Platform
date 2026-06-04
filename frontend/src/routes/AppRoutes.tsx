import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Unauthorized from "../pages/Unauthorized";
import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/RoleBasedRoute";

import Employees from "../pages/Employees";
import Attendance from "../pages/Attendance";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

import ManagerDashboard from "../pages/manager/ManagerDashboard";
import PayrollPage from "../pages/PayrollPage";
import PerformancePage from "../pages/PerformancePage";

import AttritionPrediction
    from "../components/AttritionPrediction";
import AIInsightsDashboard
    from "../pages/AIInsightsDashboard";

const AppRoutes = () => {

    return (

        <Routes>
            {/* AI Attrition Prediction */}
            <Route
                path="/ai"
                element={
                    <ProtectedRoute>
                        <AttritionPrediction />
                    </ProtectedRoute>
                }
            />

            {/* Default Route */}
            <Route
                path="/"
                element={<Navigate to="/login" />}
            />

            {/* Login */}
            <Route
                path="/login"
                element={<Login />}
            />

            {/* Register */}
            <Route
                path="/register"
                element={<Register />}
            />

            {/* Dashboard */}
            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

            {/* Employees */}
            <Route
                path="/employees"
                element={
                    <ProtectedRoute>
                        <Employees />
                    </ProtectedRoute>
                }
            />

            {/* Attendance */}
            <Route
                path="/attendance"
                element={
                    <ProtectedRoute>
                        <Attendance />
                    </ProtectedRoute>
                }
            />

            {/* Payroll */}
            <Route
                path="/payroll"
                element={
                    <ProtectedRoute>
                        <PayrollPage />
                    </ProtectedRoute>
                }
            />

            {/* Performance */}
            <Route
                path="/performance"
                element={
                    <ProtectedRoute>
                        <PerformancePage />
                    </ProtectedRoute>
                }
            />

            {/* Analytics */}
            <Route
                path="/analytics"
                element={
                    <ProtectedRoute>
                        <Analytics />
                    </ProtectedRoute>
                }
            />

            {/* Reports */}
            <Route
                path="/reports"
                element={
                    <ProtectedRoute>
                        <Reports />
                    </ProtectedRoute>
                }
            />

            {/* Settings */}
            <Route
                path="/settings"
                element={
                    <ProtectedRoute>
                        <Settings />
                    </ProtectedRoute>
                }
            />

            {/* Manager Dashboard */}
            <Route
                path="/manager"
                element={
                    <RoleBasedRoute requiredRole={["ADMIN", "MANAGER"]}>
                        <ManagerDashboard />
                    </RoleBasedRoute>
                }
            />

            {/* Unauthorized */}
            <Route
                path="/unauthorized"
                element={<Unauthorized />}
            />
            {/*ai dashboard*/}
            <Route
                path="/ai-dashboard"
                element={<AIInsightsDashboard />}
            />

        </Routes>
    );
};

export default AppRoutes;