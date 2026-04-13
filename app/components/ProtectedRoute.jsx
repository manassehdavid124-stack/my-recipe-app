"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login"); // redirect if not logged in
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p className="text-white p-10">Checking authentication...</p>;
  }

  return <>{children}</>;
}