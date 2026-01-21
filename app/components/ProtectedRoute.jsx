"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/signin"); // redirect if not logged in
    } else {
      setIsChecking(false); // token exists → allow rendering
    }
  }, [router]);

  if (isChecking) return <p className="text-white p-10">Checking authentication...</p>;

  return <>{children}</>;
}
