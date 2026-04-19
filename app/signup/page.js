
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/api/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      console.log(data);

      // ✅ redirect to login page
      router.push("/login");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="Hero" className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="text-4xl font-bold mb-2 text-black">Create Account</h1>
      <p className="text-gray-600 mb-8">
        Sign up to start using My Recipe App
      </p>

      {/* emojis */}
      <div className="absolute top-1/6 text-6xl opacity-10">🍳</div>
      <div className="absolute top-2/4 right-4 text-6xl opacity-30">🥗</div>
      <div className="absolute top-1/2 left-8 text-4xl opacity-30">🍅</div>
      <div className="absolute top-4 right-12 text-4xl opacity-30">🥕</div>

      <form onSubmit={handleSubmit}>
        <div className="lg:bg-white p-8 rounded-2xl shadow-lg w-96 relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Sign Up
          </h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block text-black mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border text-black rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-black mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border text-black rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <Link
            href="/login"
            className="block mt-3 text-center text-blue-500"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Page;
