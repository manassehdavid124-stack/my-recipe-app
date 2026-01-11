"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordClient() {
  const params = useSearchParams();
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-0"
      id='Hero'>
      <h1 className="text-4xl font-bold mb-2 text-black">Reset Password</h1>
      <p className="text-gray-600 mb-8">
        Please Reset Password to continue to My Recipe App
      </p>

      {/* emojis preserved */}
      <div className="absolute top-1/6 text-6xl opacity-10">🍳</div>
      <div className="absolute top-2/4 right-4 text-6xl opacity-30">🥗</div>
      <div className="absolute top-1/2 left-8 text-4xl opacity-30">🍅</div>
      <div className="absolute top-4 right-12 text-4xl opacity-30">🥕</div>

      <form onSubmit={handleReset} className="lg:bg-white p-8 rounded-2xl shadow-lg w-96 sm:bg-none relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Reset Password</h2>
        <input
          type="password"
          placeholder="New password"
          className="w-full px-3 py-2 text-black border rounded-lg mb-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >Reset</button>
        <p>{message}</p>
      </form>
    </div>
  );
}
