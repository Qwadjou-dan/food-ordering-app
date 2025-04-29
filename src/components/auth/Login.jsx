import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState("");

  const handleLogin = () => {
    const id = parseInt(userId);
    if (id >= 1 && id <= 1000) {
      onLogin(userId);
    } else {
      alert("Please enter a valid ID between 1 and 1000");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <Card className="w-full max-w-md bg-green-200 border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Staff Login
          </CardTitle>
          <CardDescription className="text-center">
            Enter your Staff ID to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="number"
              placeholder="Enter ID (1-1000)"
              min="1"
              max="1000"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full"
            />
            <Button onClick={handleLogin} className="w-full bg-green-400">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
