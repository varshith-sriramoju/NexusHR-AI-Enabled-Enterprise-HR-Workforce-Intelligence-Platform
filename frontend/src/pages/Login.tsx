import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Rocket,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import api from "@/api/axios";
import { useAuth } from "@/context/AuthContext";

const features = [
  {
    icon: Users,
    title: "Employee Management",
    desc: "Manage your workforce effortlessly",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "AI-powered workforce insights",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    desc: "Enterprise-grade security",
  },
  {
    icon: Rocket,
    title: "Boost Productivity",
    desc: "Automate HR operations",
  },
];

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      login(response.data.accessToken, response.data.role);
      
      // Route based on user role
      if (response.data.role === "ADMIN") {
        navigate("/manager");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid credentials");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Decorative Elements */}
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Main Grid - Full Height */}
      <div className="relative z-10 grid w-full h-full lg:grid-cols-[1.2fr_1fr] items-center">
        {/* LEFT SIDE - Hidden on Mobile */}
        <section className="hidden lg:flex flex-col justify-center px-12 2xl:px-16 overflow-hidden">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-teal-600 text-xl font-black text-white shadow-lg shadow-blue-200 flex-shrink-0">
              N
            </div>
            <h1 className="text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              NexusHR
            </h1>
          </div>

          {/* Badge */}
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 backdrop-blur">
            <CheckCircle2 className="h-3 w-3 text-teal-600 flex-shrink-0" />
            <span className="text-xs xl:text-sm font-medium text-blue-900 whitespace-nowrap">
              Intelligent Workforce, Smarter Decisions
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-2xl text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Empowering Teams with AI <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Elevating Work.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-xl text-sm xl:text-base 2xl:text-lg leading-7 text-gray-600 mb-10">
            NexusHR empowers your teams with AI automation, unified HR management, and intelligent insights for attendance, payroll, analytics, and strategic workforce decisions.
          </p>

          {/* Features - Scrollable if needed */}
          <div className="space-y-4 max-h-48 xl:max-h-56 overflow-y-auto pr-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-start gap-3 group">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-teal-100 text-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm xl:text-base font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-xs xl:text-sm text-gray-600 line-clamp-1">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* RIGHT SIDE - Login Card */}
        <section className="flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8 2xl:pr-12 overflow-auto">
          <Card className="w-full max-w-sm border-0 bg-white shadow-2xl shadow-blue-200/30 rounded-2xl flex-shrink-0">
            <CardContent className="space-y-6 p-6 sm:p-8 lg:p-10">
              {/* Top Logo */}
              <div className="space-y-5 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100 shadow-lg flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 text-base font-bold text-white">
                    N
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl xl:text-3xl font-bold text-gray-900">
                    Welcome Back
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Sign in to your NexusHR account
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-5">
                {/* Error Message */}
                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-xs xl:text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 flex-shrink-0" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-10 xl:h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 text-sm xl:text-base text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="block text-xs xl:text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 flex-shrink-0" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-10 xl:h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-10 text-sm xl:text-base text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-xs xl:text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-10 xl:h-12 w-full rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-sm xl:text-base font-semibold text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-[1.01] transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Signing in..." : "Sign In"}
                  <ArrowRight className="ml-2 h-4 w-4 xl:h-5 xl:w-5" />
                </Button>
              </form>

              {/* Footer */}
              <div className="pt-4 border-t border-gray-100 text-center text-xs xl:text-sm text-gray-600">
                Don't have an account?{" "}
                <button className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  Sign up here
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default Login;