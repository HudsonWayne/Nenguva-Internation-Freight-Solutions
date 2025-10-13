"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error sending email. Please try again later.");
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Have questions or need assistance? We're here to help. 
          Get in touch with <span className="font-semibold">Nenguva International Freight</span> today.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Contact Details</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong className="text-purple-700">Address:</strong><br />
                23 Westley Terrace Annfield Plain, Stanley,<br />
                United Kingdom, DH9 8QL
              </li>
              <li>
                <strong className="text-purple-700">Mobile:</strong><br />
                <a href="tel:+447368810198" className="hover:text-purple-500">+44 7368 810198</a>
              </li>
              <li>
                <strong className="text-purple-700">Email:</strong><br />
                <a href="mailto:info@nenguvainternationalfreight.com" className="hover:text-purple-500">
                  info@nenguvainternationalfreight.com
                </a>
              </li>
              <li>
                <strong className="text-purple-700">Website:</strong><br />
                <a href="http://nenguvainternationalfreight.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
                  nenguvainternationalfreight.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <iframe
                title="Nenguva Location"
                src="https://www.google.com/maps?q=23+Westley+Terrace+Annfield+Plain,+Stanley,+United+Kingdom,+DH9+8QL&output=embed"
                width="100%"
                height="250"
                className="rounded-xl border-0 shadow"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Send Us a Message</h2>
            {submitted ? (
              <div className="text-green-600 text-center font-semibold">
                ✅ Your message has been sent. We'll get back to you soon!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold transition duration-200 shadow-md"
                >
                  Send Message
                </button>

                {/* NEW LINKS */}
                <div className="flex justify-between text-sm text-center mt-6">
                  <Link href="/register" className="text-purple-600 hover:underline">
                    Don’t have an account? Register now
                  </Link>
                  <Link href="/login" className="text-purple-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
