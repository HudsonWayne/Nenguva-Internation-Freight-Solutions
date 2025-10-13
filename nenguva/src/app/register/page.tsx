"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registration functionality coming soon!");
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-800 px-4 sm:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-5xl border border-white/20 flex flex-col md:flex-row items-center md:space-x-10 space-y-10 md:space-y-0"
      >
        {/* Left side illustration */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 space-y-4">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/signup-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--sign-up-registration-illustrations-pack-people-illustrations-4642171.png"
            alt="Register Illustration"
            className="w-80 h-auto drop-shadow-lg"
          />
          <h2 className="text-2xl font-semibold text-purple-700 text-center">
            Join the Nenguva Family
          </h2>
          <p className="text-center text-gray-500 px-4">
            Sign up and start shipping smarter and faster today.
          </p>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-2">
            Create Account
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Register with <span className="font-semibold">Nenguva International Freight</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
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
              Register
            </motion.button>
          </form>

          <div className="text-center mt-6">
            <Link href="/login" className="text-purple-700 hover:underline font-medium">
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
