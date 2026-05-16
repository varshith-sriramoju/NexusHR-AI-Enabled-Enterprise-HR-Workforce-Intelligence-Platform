import { useState } from "react";
import api from "@/api/axios";
// @ts-ignore
import { Card, CardContent } from "@/components/ui/card";
// @ts-ignore
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <Card className="w-[350px]">
        <CardContent className="space-y-4 pt-6">
          <h1 className="text-2xl font-bold text-center">
            NexusHR Login
          </h1>

          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;