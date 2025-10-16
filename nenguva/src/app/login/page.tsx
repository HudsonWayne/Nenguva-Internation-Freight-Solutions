"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login functionality coming soon!");
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 px-4 sm:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-5xl border border-white/20 flex flex-col md:flex-row items-center md:space-x-10 space-y-10 md:space-y-0"
      >
        {/* Left side illustration */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 space-y-4">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/login-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--security-protection-password-illustrations-pack-people-illustrations-4642173.png"
            alt="Login Illustration"
            className="w-80 h-auto drop-shadow-lg"
          />
          <h2 className="text-2xl font-semibold text-purple-700 text-center">
            Welcome back to Nenguva
          </h2>
          <p className="text-center text-gray-500 px-4">
            Access your account to send, track, and manage your parcels with ease.
          </p>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-2">
            Log In
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Continue to <span className="font-semibold">Nenguva International Freight</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
            >
              Log In
            </motion.button>
          </form>

          <div className="text-center mt-6 space-y-2">
            <Link href="/register" className="text-purple-700 hover:underline block font-medium">
              Don’t have an account? Register now
            </Link>
            <Link href="/forgot-password" className="text-purple-600 hover:underline block">
              Forgot your password?
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) setError(res.error);
    else router.push("/");

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 p-10 rounded-xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-5 text-center text-purple-700">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-semibold hover:from-purple-800 hover:to-indigo-800 transition-all duration-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
