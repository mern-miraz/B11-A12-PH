import React, { useState } from "react";
import { Link } from "react-router";
import GoogleLogin from "../../components/GoogleLogin";
import { useAuth } from "../../hook/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signinUser } = useAuth();

  const handleLogin = () => {
    if (!email) {
      return toast.error("Email is required");
    }
    if (!password) {
      return toast.error("Password is required");
    }

    signinUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Login successful");
        // Redirect or perform additional logic
      })
      .catch((error) => {
        // toast.error(error.message || "Login failed");
        if (error.message == "Firebase: Error (auth/invalid-email).") {
          toast.error("Wrong credential");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="relative mt-4">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-5 cursor-pointer"
        >
          Login
        </button>

        {/* Register link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </Link>
        </p>

        {/* Google Login */}
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Login;
