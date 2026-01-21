// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// const page = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const trimmedEmail = email.trim();

//     if (!trimmedEmail) {
//       setError("Email is required");
//       return;
//     }

//     if (password.length < 8) {
//       setError("Password must be at least 8 characters");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: trimmedEmail, password }),
//       });

//       const text = await res.text();
//       console.log(text);


//       if (!res.ok) {
//         setError(data.message || "Signup failed");
//         setLoading(false);
//         return;
//       }

//       alert("Signup successful! Please login");
//       router.push("/signin"); // SPA-friendly redirect
//     } catch (err) {
//       console.error("Frontend signup error 👉", err);
//       setError("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="Hero" className="relative flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-4xl font-bold mb-4 text-black">Create Account</h1>
//       <p className="text-gray-700 mb-6">Sign up to continue</p>

//       {/* Background emojis */}
//       <div className="absolute top-1/6 text-6xl opacity-10">🍳</div>
//       <div className="absolute top-2/4 right-4 text-6xl opacity-30">🥗</div>
//       <div className="absolute top-1/2 left-8 text-4xl opacity-30">🍅</div>
//       <div className="absolute top-4 right-12 text-4xl opacity-30">🥕</div>

//       <form
//         onSubmit={handleSubmit}
//         className="lg:bg-white p-8 rounded-2xl shadow-lg w-96 sm:bg-none relative z-10"
//       >
//         {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-black mb-1">📧 Email</label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border rounded-lg text-black"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="flex gap-2 text-black mb-1">🔒 Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border rounded-lg text-black"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             minLength={8}
//           />
//         </div>

//         <div className="mb-6">
//           <label className="flex gap-2 text-black mb-1">🔒 Confirm Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border rounded-lg text-black"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             minLength={8}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
//         >
//           {loading ? "Creating account..." : "Sign Up"}
//         </button>

//         <p className="text-center mt-4 text-sm text-gray-800">
//           Already have an account?{" "}
//           <Link href="/signin" className="text-blue-500">Sign In</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default page;
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email is required");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, password }),
      });

      let data;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        data = { message: await res.text() };
      }

      console.log(data);

      if (!res.ok) {
        setError(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      alert("Signup successful! Please login");
      router.push("/signin");
    } catch (err) {
      console.error("Frontend signup error 👉", err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="Hero" className="relative flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-black">Create Account</h1>
      <p className="text-gray-700 mb-6">Sign up to continue</p>

      {/* Background emojis */}
      <div className="absolute top-1/6 text-6xl opacity-10">🍳</div>
      <div className="absolute top-2/4 right-4 text-6xl opacity-30">🥗</div>
      <div className="absolute top-1/2 left-8 text-4xl opacity-30">🍅</div>
      <div className="absolute top-4 right-12 text-4xl opacity-30">🥕</div>

      <form
        onSubmit={handleSubmit}
        className="lg:bg-white p-8 rounded-2xl shadow-lg w-96 sm:bg-none relative z-10"
      >
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-black mb-1">📧 Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="flex gap-2 text-black mb-1">🔒 Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
          />
        </div>

        <div className="mb-6">
          <label className="flex gap-2 text-black mb-1">🔒 Confirm Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg text-black"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={8}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-center mt-4 text-sm text-gray-800">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-500">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default page;


