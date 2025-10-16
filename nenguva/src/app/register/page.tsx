"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
      } else {
        // Wait a moment for a nice transition
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      }
    } catch {
      setError("⚠️ Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4 sm:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 w-full max-w-5xl border border-white/30 flex flex-col md:flex-row items-center md:space-x-10 space-y-10 md:space-y-0"
      >
        {/* Left Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 space-y-6">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/signup-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--sign-up-registration-illustrations-pack-people-illustrations-4642171.png"
            alt="Register Illustration"
            className="w-80 h-auto drop-shadow-2xl transform hover:scale-105 transition duration-500"
          />
          <h2 className="text-2xl font-bold text-purple-700 text-center">Join the Nenguva Family</h2>
          <p className="text-center text-gray-600 px-4">
            Sign up and start shipping smarter and faster today.
          </p>
        </div>

        {/* Registration Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-2">Create Account</h1>
          <p className="text-center text-gray-600 mb-8">
            Register with <span className="font-semibold text-purple-800">Nenguva International Freight</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400 hover:shadow-md transition duration-300"
              />
            </div>

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
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400 hover:shadow-md transition duration-300"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="pl-10 pr-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400 hover:shadow-md transition duration-300"
              />
              <div
                className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center animate-pulse">{error}</p>
            )}

            <motion.button
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold text-white shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                loading
                  ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Creating account...
                </>
              ) : (
                "Register"
              )}
            </motion.button>
          </form>

          <div className="text-center mt-6">
            <Link href="/login" className="text-purple-700 hover:text-purple-900 hover:underline font-medium">
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
