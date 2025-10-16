"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

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

    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/"); // Redirect to homepage after login
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 px-4 sm:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-5xl border border-white/20 flex flex-col md:flex-row items-center md:space-x-10 space-y-10 md:space-y-0"
      >
        {/* Left Illustration */}
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

        {/* Right Form */}
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
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg ${
                loading ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Logging in..." : "Log In"}
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
