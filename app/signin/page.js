"use client";
import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
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

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Signin failed");
                setLoading(false);
                return;
            }

            localStorage.setItem("token", data.token); // make sure "token" is exactly this key
            localStorage.setItem("userEmail", data.email); // optional

            alert("Signin successful");
            // example redirect
            window.location.href = "/components/Home";
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-20"
            id='Hero'>
            <h1 className="text-4xl font-bold mb-2 text-black">Welcome Back!</h1>
            <p className="text-gray-600 mb-8">
                Please sign in to continue to My Recipe App
            </p>

            {/* emojis preserved */}
            <div className="absolute top-1/6 text-6xl opacity-10">🍳</div>
            <div className="absolute top-2/4 right-4 text-6xl opacity-30">🥗</div>
            <div className="absolute top-1/2 left-8 text-4xl opacity-30">🍅</div>
            <div className="absolute top-4 right-12 text-4xl opacity-30">🥕</div>

            <form onSubmit={handleSubmit}>
                <div className="lg:bg-white p-8 rounded-2xl shadow-lg w-96 sm:bg-none relative z-10">
                    <h2 className="text-2xl font-bold mb-6 text-center text-black">
                        Sign In
                    </h2>

                    {error && (
                        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                    )}

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-black mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 text-black py-2 border rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-black mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 text-black border rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>

                    <Link
                        href="/signup"
                        className="block mt-3 text-center text-blue-500"
                    >
                        Create Account
                    </Link>

                    <Link
                        href="/reset-password"
                        className="block mt-2 text-center text-blue-500"
                    >
                        Forgot Password?
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Page;
